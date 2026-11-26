const artworkByUrl = new Map();
const MAX_EDGE = 560;

export function getClientLogoArtwork(url) {
  if (!artworkByUrl.has(url)) {
    artworkByUrl.set(url, loadArtwork(url).catch(() => {
      artworkByUrl.delete(url);
      return url;
    }));
  }
  return artworkByUrl.get(url);
}

async function loadArtwork(url) {
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.src = url;
  await image.decode();

  const scale = Math.min(1, MAX_EDGE / Math.max(image.naturalWidth, image.naturalHeight));
  const canvas = document.createElement("canvas");
  const width = canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(image, 0, 0, width, height);
  const frame = context.getImageData(0, 0, width, height);
  const { data } = frame;
  let transparentEdge = 0;
  for (let x = 0; x < width; x++) {
    transparentEdge += Number(data[x * 4 + 3] <= 8);
    transparentEdge += Number(data[((height - 1) * width + x) * 4 + 3] <= 8);
  }
  for (let y = 0; y < height; y++) {
    transparentEdge += Number(data[y * width * 4 + 3] <= 8);
    transparentEdge += Number(data[(y * width + width - 1) * 4 + 3] <= 8);
  }
  const removePaleBackground = transparentEdge < (width + height) * 0.2;
  const visited = new Uint8Array(width * height);
  const queue = new Uint32Array(width * height);
  let end = 0;

  function enqueue(pixel) {
    if (visited[pixel]) return;
    visited[pixel] = 1;
    const start = pixel * 4;
    const red = data[start];
    const green = data[start + 1];
    const blue = data[start + 2];
    const lightest = Math.max(red, green, blue);
    const darkest = Math.min(red, green, blue);
    if (data[start + 3] <= 8 || (removePaleBackground && darkest >= 218 && lightest - darkest <= 22)) {
      data[start + 3] = 0;
      queue[end++] = pixel;
    }
  }

  for (let x = 0; x < width; x++) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }
  for (let index = 0; index < end; index++) {
    const pixel = queue[index];
    const x = pixel % width;
    if (x > 0) enqueue(pixel - 1);
    if (x < width - 1) enqueue(pixel + 1);
    if (pixel >= width) enqueue(pixel - width);
    if (pixel < width * (height - 1)) enqueue(pixel + width);
  }

  let left = width;
  let top = height;
  let right = -1;
  let bottom = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] < 24) continue;
      left = Math.min(left, x);
      top = Math.min(top, y);
      right = Math.max(right, x);
      bottom = Math.max(bottom, y);
    }
  }

  if (right < left || bottom < top) return url;
  left = Math.max(0, left - 2);
  top = Math.max(0, top - 2);
  right = Math.min(width - 1, right + 2);
  bottom = Math.min(height - 1, bottom + 2);
  canvas.width = right - left + 1;
  canvas.height = bottom - top + 1;
  context.putImageData(frame, -left, -top);
  return canvas.toDataURL("image/png");
}

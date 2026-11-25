import React, { useState } from "react";

const responsiveWidths = [320, 480, 640, 960, 1280, 1600, 1920, 2560];

function getResponsiveSources(src) {
  if (!src?.startsWith("https://images.unsplash.com/")) return undefined;

  const url = new URL(src);
  const maxWidth = Number(url.searchParams.get("w"));
  if (!Number.isInteger(maxWidth) || maxWidth < responsiveWidths[0]) return undefined;

  return [...responsiveWidths.filter((width) => width < maxWidth), maxWidth]
    .map((width) => {
      url.searchParams.set("w", width);
      return `${url.href} ${width}w`;
    })
    .join(", ");
}

export function SiteImage({ src, ...props }) {
  return <ImageRequest key={src} src={src} {...props} />;
}

function ImageRequest({ src, sizes, fallbackSrc, loading = "lazy", style, ...props }) {
  const [attempt, setAttempt] = useState(0);
  const srcSet = sizes ? getResponsiveSources(src) : undefined;
  const sources = [
    ...(srcSet ? [{ src, srcSet }] : []),
    ...(src ? [{ src }] : []),
    ...(fallbackSrc && fallbackSrc !== src ? [{ src: fallbackSrc }] : []),
  ];
  const source = sources[attempt];

  return (
    <img
      key={attempt}
      {...props}
      src={source?.src}
      srcSet={source?.srcSet}
      sizes={source?.srcSet ? sizes : undefined}
      loading={loading}
      decoding="async"
      style={source ? style : { ...style, opacity: 0 }}
      onError={() => setAttempt(attempt + 1)}
    />
  );
}

export function HeroImage({ src, themed = false }) {
  return (
    <div
      aria-hidden="true"
      className={themed ? "growus-hero-image absolute inset-0" : "absolute inset-0 bg-slate-800"}
    >
      <SiteImage
        src={src}
        sizes="100vw"
        alt=""
        loading="eager"
        fetchPriority="high"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export const footerPages = {
  home: "Home",
  about: "About Us",
  services: "Services",
  gallery: "Gallery",
  culture: "Careers",
  "open-positions": "Open Positions",
  contact: "Contact",
};

export function readFooterLink(link) {
  if (typeof link !== "string") return link;
  const page = Object.keys(footerPages).find((key) => footerPages[key] === link);
  return { label: link, page: page || "home" };
}

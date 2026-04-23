import { useEffect } from "react";

function setMetaAttribute(selector, attribute, value) {
  const metaTag = document.querySelector(selector);
  if (metaTag && value) {
    metaTag.setAttribute(attribute, value);
  }
}

export default function Seo({ title, description, image }) {
  useEffect(() => {
    document.title = title;

    setMetaAttribute("meta[name='description']", "content", description);
    setMetaAttribute("meta[property='og:title']", "content", title);
    setMetaAttribute("meta[property='og:description']", "content", description);
    setMetaAttribute("meta[property='og:image']", "content", image);
    setMetaAttribute("meta[name='twitter:title']", "content", title);
    setMetaAttribute("meta[name='twitter:description']", "content", description);
    setMetaAttribute("meta[name='twitter:image']", "content", image);
    setMetaAttribute("meta[name='twitter:card']", "content", image ? "summary_large_image" : "summary");
  }, [title, description, image]);

  return null;
}

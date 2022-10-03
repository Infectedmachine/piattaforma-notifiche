import * as React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { SeoProps } from "../models/components";

export default function SEO(props: SeoProps) {
  const {
    author: defaultAuthor,
    site: defaultSite,
    creator: defaultCreator,
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    author: props.author || defaultAuthor,
    site: props.site || defaultSite,
    creator: props.creator || defaultCreator,
    title: props.title || defaultTitle,
    description: props.description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${props.pathname || ""}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/x-icon"
        href="/src/assets/icons/favicon.ico"
      />
      <link
        rel="icon"
        href="/src/assets/icons/favicon-196x196.png"
        sizes="196x196"
        type="image/png"
      />
      <link
        rel="icon"
        href="/src/assets/icons/favicon-128x128.png"
        sizes="128x128"
        type="image/png"
      />
      <link
        rel="icon"
        href="/src/assets/icons/favicon-96x96.png"
        sizes="96x96"
        type="image/png"
      />
      <link
        rel="icon"
        href="/src/assets/icons/favicon-32x32.png"
        sizes="32x32"
        type="image/png"
      />
      <link
        rel="icon"
        href="/src/assets/icons/favicon-16x16.png"
        sizes="16x16"
        type="image/png"
      />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seo.site} />
      <meta name="twitter:creator" content={seo.creator} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </>
  );
}

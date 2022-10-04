import * as React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { SeoProps } from "../models/components";

export default function SEO(props: SeoProps) {
  const {
    metaTitle: defaultTitle,
    metaDescription: defaultDescription,
    metaImage: defaultImage,
    metaSocial: defaultSocial,
    keywords: defaultKeywords,
    metaRobots: defaultRobots,
    metaViewport: defaultViewport,
    canonicalURL: defaultUrl,
  }: SeoProps = useSiteMetadata();

  const seo = {
    title: props.metaTitle || defaultTitle,
    description: props.metaDescription || defaultDescription,
    image: `${props.canonicalURL || defaultUrl}${
      props.metaImage?.url || defaultImage
    }`,
    url: `${props.canonicalURL}`,
    socialNetwork:
      props.metaSocial?.socialNetwork || defaultSocial?.socialNetwork,
    socialTitle: props.metaSocial?.title || defaultSocial?.title,
    viewport: props.metaViewport || defaultViewport,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
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
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name={seo.socialNetwork+"title"} content={seo.title} />
      <meta name={seo.socialNetwork+"description"} content={seo.description} />
      <meta name={seo.socialNetwork+"iimage"} content={seo.image} />
      <meta name="viewport" content={seo.viewport} />
    </>
  );
}

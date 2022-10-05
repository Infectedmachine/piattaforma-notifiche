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
      props.metaSocial?.socialNetwork?.toLowerCase() ||
      defaultSocial?.socialNetwork,
    socialTitle: props.metaSocial?.title || defaultSocial?.title,
    socialImage: `${props.canonicalURL || defaultUrl}${
      props.metaSocial?.image?.url || defaultImage
    }`,
    viewport: props.metaViewport || defaultViewport,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href={seo.image} />
      <link rel="icon" href={seo.image} sizes="196x196" type="image/png" />
      <link rel="icon" href={seo.image} sizes="128x128" type="image/png" />
      <link rel="icon" href={seo.image} sizes="96x96" type="image/png" />
      <link rel="icon" href={seo.image} sizes="32x32" type="image/png" />
      <link rel="icon" href={seo.image} sizes="16x16" type="image/png" />
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name={seo.socialNetwork + ":title"} content={seo.title} />
      <meta
        name={seo.socialNetwork + ":description"}
        content={seo.description}
      />
      <meta name={seo.socialNetwork + ":image"} content={seo.socialImage} />
      <meta name="viewport" content={seo.viewport} />
    </>
  );
}

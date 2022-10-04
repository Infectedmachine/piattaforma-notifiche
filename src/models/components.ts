export type ImagePosition = "left" | "right" | "top" | "bottom";

export interface PageProps {
  title: string;
  titleMobile?: string;
  description?: string;
  slug: string;
  body?: string;
  blocks: Array<GridProps | HeroProps | LinkProps>;
  seo?: SeoProps;
}
export interface LinkProps {
  title: string;
  titlemobile: string;
  body?: string;
  image?: string;
  page?: PageProps;
  externalUrl?: string;
  target?: string;
  attributes?: string;
  cssclass?: string;
  reactcomponent?: string;
}

export interface HeroProps {
  title: string;
  titlemobile: string;
  body: string;
  images?: Array<string>;
  imageposition?: ImagePosition;
  attributes?: Array<string>;
  cssclass?: string;
  reactcomponent?: string;
  buttons?: Array<LinkProps>;
}

export interface GridItemProps extends LinkProps {}

export interface GridProps {
  title: string;
  titleMobile: string;
  body?: string;
  items: Array<GridItemProps>;
}

export interface SeoProps {
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
  metaSocial?: {
    socialNetwork?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  keywords?: string;
  metaRobots?: string;
  metaViewport?: string;
  canonicalURL?: string;
}

export interface WalkthroughItem {
  image?: string;
  title: string;
  titleMobile: string;
  body: string | JSX.Element;
  isSequential?: boolean;
}
export interface WalkthroughProps {
  title: string;
  titleMobile: string;
  body: Array<WalkthroughItem>;
}

export interface StrapiBlock { 
  __typename: string;
}
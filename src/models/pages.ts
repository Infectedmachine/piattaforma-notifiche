export type IconTypeText = "primary" | "secondary";
export type ImagePosition = "left" | "right" | "top" | "bottom";
export type AspectRatio = "4/3" | "9/16";
export interface LinkProps {
  title: string;
  titleMobile: string;
  body?: string;
  icon?: string;
  iconColor?: IconTypeText;
  related?: string;
  externalUrl?: string;
  cssClass?: string;
  attributes?: Array<string>;
  target?: string;
}

export interface HeroProps {
  title: string;
  titleMobile: string;
  body: string;
  images?: Array<string>;
  background?: string;
  imagePosition?: ImagePosition;
  buttons?: Array<LinkProps>;
  attributes?: Array<string>;
  cssClass?: string;
  aspectRatio?: AspectRatio;
}

export interface GridItemProps {
  title: string;
  titleMobile: string;
  body?: string;
  image?: string;
}

export interface GridProps {
  title: string;
  titleMobile: string;
  body: Array<GridItemProps>;
}

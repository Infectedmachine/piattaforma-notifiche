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
  target? : any;
}

export interface HeroProps {
  title: string;
  titleMobile: string;
  body: string;
  images?: Array<string>;
  background?: string;
  imageInverse?: boolean;
  buttons?: Array<LinkProps>;
  attributes?: Array<string>;
  cssClass?: string;
}

export type IconTypeText = "primary" | "secondary";

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
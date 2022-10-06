import { graphql } from "gatsby";
import * as React from "react";
import { StrapiBlock } from "../models/components";
import Grid from "./Grid";
import GridItem from "./GridItem";
import HeroComponent from "./Hero";
import LinkComponent from "./Link";
import SEO from "./Seo";

const componentsMap: {
  [key: string]: (props: any) => JSX.Element;
} = {
  STRAPI__COMPONENT_SHARED_HERO: HeroComponent,
  STRAPI__COMPONENT_SHARED_LINK: LinkComponent,
  STRAPI__COMPONENT_SHARED_GRIDITEM: GridItem,
  STRAPI__COMPONENT_SHARED_GRID: Grid,
  STRAPI__COMPONENT_SHARED_SEO: SEO,
};

const Block = ({ block }: { block: StrapiBlock }) => {
  const Component = componentsMap[block.__typename];

  return !!Component ? <Component {...block} /> : null;
};

const BlocksRenderer = ({ blocks }: { blocks: Array<StrapiBlock> }) => {
  return (
    <>
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </>
  );
};

export const query = graphql`
  fragment Blocks on STRAPI__COMPONENT_SHARED_GRIDSTRAPI__COMPONENT_SHARED_HEROSTRAPI__COMPONENT_SHARED_LINKUnion {
    __typename
    ... on STRAPI__COMPONENT_SHARED_GRID {
      body {
        data {
          body
        }
      }
      title
      titlemobile
      items {
        body {
          data {
            body
          }
        }
        title
        titlemobile
        externalurl
        image {
          alternativeText
          url
        }
        page {
          slug
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_HERO {
      body {
        data {
          body
        }
      }
      imageposition
      images {
        url
        alternativeText
      }
      title
      titlemobile
      buttons {
        title
        titlemobile
        page {
          slug
        }
        externalurl
        body {
          data {
            body
          }
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_LINK {
      body {
        data {
          body
        }
      }
      titlemobile
      page {
        slug
      }
      title
      externalurl
      image {
        alternativeText
        url
      }
    }
  }
`;

export default BlocksRenderer;

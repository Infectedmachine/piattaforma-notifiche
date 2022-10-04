import { graphql, useStaticQuery } from "gatsby";
import { PageProps } from "../models/components";

export const useAllStrapiPages = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPage {
        nodes {
          blocks {
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
              }
            }
            __typename
            ... on STRAPI__COMPONENT_SHARED_HERO {
              body {
                data {
                  body
                }
              }
              imageposition
              images {
                url
              }
              title
              titlemobile
            }
            __typename
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
            }
          }
          slug
          title
          titlemobile
          description
        }
      }
    }
  `);
  return data.allStrapiPage.nodes as Array<PageProps>;
};

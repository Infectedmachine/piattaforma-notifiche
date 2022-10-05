import { graphql, useStaticQuery } from "gatsby";
import { PageProps } from "../models/components";

export const useAllStrapiPages = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPage {
        nodes {
          blocks {
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
            }
          }
          slug
          title
          titlemobile
          description
          seo {
            canonicalURL
            metaDescription
            metaImage {
              alternativeText
              url
            }
            metaSocial {
              title
              socialNetwork
              image {
                alternativeText
                url
              }
              description
            }
            metaTitle
            metaViewport
          }
        }
      }
    }
  `);
  return data.allStrapiPage.nodes as Array<PageProps>;
};

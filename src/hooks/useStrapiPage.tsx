import { graphql, useStaticQuery } from "gatsby";
import { PageProps } from "../models/components";

export const useStrapiPage = () => {
  const data = useStaticQuery(graphql`
    query ($id: String) {
      strapiPage(id: { eq: $id }) {
        id
        slug
        title
        titlemobile
        seo {
          canonicalURL
          metaDescription
          metaImage {
            alternativeText
            url
          }
          metaTitle
          metaViewport
          metaSocial {
            description
            image {
              alternativeText
              url
            }
            title
            socialNetwork
          }
        }
        description
        blocks {
          ...Blocks
        }
        body {
          data {
            body
          }
        }
      }
    }
  `);
  return data.strapiPage as PageProps;
};

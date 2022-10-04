import { graphql, useStaticQuery } from "gatsby";
import { SeoProps } from "../models/components";

export const useStrapiMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPage(filter: { title: { eq: "index" } }) {
        nodes {
          seo {
            canonicalURL
            metaDescription
            metaImage {
              url
            }
            metaSocial {
              description
              socialNetwork
              title
            }
            metaTitle
            metaViewport
          }
        }
      }
    }
  `);
  return data.allStrapiPage.nodes[0].seo as SeoProps;
};

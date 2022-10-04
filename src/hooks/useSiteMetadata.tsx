import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          metaTitle
          canonicalURL
          metaDescription
          metaSocial {
            socialNetwork
            title
            description
            image
          }
          keywords
          metaRobots
          metaViewport
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          canonicalURL
          description
          keywords
          metaDescription
          metaRobots
          metaTitle
          title
          metaViewport
          metaSocial {
            description
            image
            socialNetwork
            title
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

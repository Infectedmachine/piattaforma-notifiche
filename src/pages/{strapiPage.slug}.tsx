import { ThemeProvider } from "@emotion/react";
import { theme } from "@pagopa/mui-italia";
import { graphql, HeadFC } from "gatsby";
import * as React from "react";
import BlocksRenderer from "../components/componentsRenderer";
import SEO from "../components/Seo";

export default function Page({ data }: any) {
  const page = data.strapiPage;

  return (
    <>
      <ThemeProvider theme={theme}>
        <BlocksRenderer blocks={page.blocks || []} />
      </ThemeProvider>
    </>
  );
}

export const Head: HeadFC = ({ data }: any) => {
  const page = data.strapiPage;
  return <SEO {...page.seo} />;
};

export const query = graphql`
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
`;

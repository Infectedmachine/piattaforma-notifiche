import { ThemeProvider } from "@mui/material";
import { theme } from "@pagopa/mui-italia";
import { HeadFC } from "gatsby";
import * as React from "react";
import BlocksRenderer from "../components/componentsRenderer";
import SEO from "../components/Seo";
import { useAllStrapiPages } from "../hooks/useAllStrapiPage";
import { useStrapiMetadata } from "../hooks/useStrapiMetadata";

const IndexPage = () => {
  const strapiPages = useAllStrapiPages();

  return (
    <>
      <ThemeProvider theme={theme}>
        <BlocksRenderer blocks={strapiPages[0].blocks} />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const strapiSeo = useStrapiMetadata();
  return <SEO {...strapiSeo} />;
};

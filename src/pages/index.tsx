import { ThemeProvider } from "@mui/material";
import { theme } from "@pagopa/mui-italia";
import { graphql, HeadFC } from "gatsby";
import * as React from "react";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";
import HeroComponent from "../components/Hero";
import InfoblockComponent from "../components/Infoblock";
import LinkComponent from "../components/Link";
import SEO from "../components/Seo";
import WalkthroughComponent from "../components/Walkthrough";

const heroMock = {
  title: "Titolo",
  titlemobile: "Titolo mobile",
  body: "Lorem Ipsum",
  buttons: [
    {
      title: "test1",
      titlemobile: "Titolo mobile",
      page: { title: "random", slug: "about", blocks: [] },
    },
  ],
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Piggy_Bank_or_Savings_Flat_Icon_Vector.svg",
  ],
};

const linkMock = {
  title: "Convenienza",
  titlemobile: "test link",
  body: "Il recapito delle notifiche in digitale comporta minori costi di notificazione e spedizione",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Piggy_Bank_or_Savings_Flat_Icon_Vector.svg",
  page: { title: "random", slug: "about", blocks: [] },
};
const IndexPage = ({
  data,
}: {
  data: {
    site: {
      siteMetadata: { title: string };
    };
    strapi: any;
  };
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SEO />
        <WalkthroughComponent
          title="test grid"
          titleMobile="same"
          body={Array(4).fill({ ...linkMock })}
        />
        <HeroComponent {...heroMock} />
        <InfoblockComponent
          {...{ ...heroMock, aspectRatio: "9/16", imagePosition: "left" }}
        />
        <LinkComponent {...linkMock} />
        <GridItem {...linkMock} />
        <Grid
          title="test grid"
          titleMobile="same"
          items={Array(4).fill({ ...linkMock })}
        />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

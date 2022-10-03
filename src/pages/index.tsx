import { AspectRatio } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material";
import { theme, Walkthrough } from "@pagopa/mui-italia";
import { graphql, HeadFC } from "gatsby";
import * as React from "react";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";
import HeroComponent from "../components/Hero";
import InfoblockComponent from "../components/Infoblock";
import LinkComponent from "../components/Link";
import SEO from "../components/Seo";
import WalkthroughComponent from "../components/Walkthrough";
import { IconTypeText, ImagePosition } from "../models/components";

const heroMock = {
  title: "Titolo",
  titleMobile: "Titolo mobile",
  body: "Lorem Ipsum",
  buttons: [{ title: "test1", titleMobile: "Titolo mobile", related: "about" }],
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Piggy_Bank_or_Savings_Flat_Icon_Vector.svg",
  ],
};

const linkMock = {
  title: "Convenienza",
  titleMobile: "test link",
  body: "Il recapito delle notifiche in digitale comporta minori costi di notificazione e spedizione",
  icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Piggy_Bank_or_Savings_Flat_Icon_Vector.svg",
  related: "404",
  iconColor: "primary" as IconTypeText,
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
          body={Array(4).fill({ ...{ image: linkMock.icon, ...linkMock } })}
        />
        <HeroComponent {...heroMock} />
        <InfoblockComponent
          {...{ ...heroMock, aspectRatio: "9/16", imagePosition: "left" }}
        />
        <LinkComponent {...linkMock} />
        <GridItem {...{ image: linkMock.icon, ...linkMock }} />
        <Grid
          title="test grid"
          titleMobile="same"
          body={Array(4).fill({ ...{ image: linkMock.icon, ...linkMock } })}
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

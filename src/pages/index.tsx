import { ThemeProvider } from "@mui/material";
import { theme, Walkthrough } from "@pagopa/mui-italia";
import { graphql, HeadFC } from "gatsby";
import * as React from "react";
import GridItem from "../components/GridItem";
import HeroComponent from "../components/Hero";
import LinkComponent from "../components/Link";
import { IconTypeText } from "../models/pages";

const heroMock = {
  title: "Titolo",
  titleMobile: "Titolo mobile",
  body: "Lorem Ipsum",
  buttons: [{ title: "test1", titleMobile: "Titolo mobile", related: "about" }],
  images: [
    "data:image/png;base64,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",
  ],
};

const linkMock = {
  title: "Convenienza",
  titleMobile: "test link",
  body: "Il recapito delle notifiche in digitale comporta minori costi di notificazione e spedizione",
  icon: "data:image/png;base64,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",
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
        <Walkthrough
          title="test"
          items={[
            { title: "item1", subtitle: "testing" },
            { title: "item2", subtitle: "testing" },
            { title: "item3", subtitle: "testing" },
          ]}
        />
        <HeroComponent {...heroMock} />
        <LinkComponent {...linkMock} />
        <GridItem {...{image: linkMock.icon, ...linkMock}} />
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

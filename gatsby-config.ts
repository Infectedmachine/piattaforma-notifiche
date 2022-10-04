import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const config: GatsbyConfig = {
  siteMetadata: {
    metaTitle: `piattaforma-notifiche`,
    canonicalURL: `https://www.yourdomain.tld`,
    metaDescription: `site-description`,
    metaSocial: {
      socialNetwork: `@site-twitter-account`,
      title: `https://www.twitterdomain.tld`,
      description: `author`,
      image: `/site-icon.png`,
    },
    keywords: `random-stuff`,
    metaRobots: `stuff`,
    metaViewport: `width=device-width, initial-scale=1, shrink-to-fit=no`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN || "29aed4f9efbdb3aca31fc330e2979874e2f7bead3e3e2baf849f997844ad18e856aeeff353d1209d621349e5c3e4f303198ac8e0160967ce519e956d7492fe6f5e3149e21e0a71296b8c8f4df1c416dff28d1a0e1cfb11f5ece735edd5e48cfab519eaaf0d5d4ed32c22ddef302661aaa9290d6a1ee949047a915cbc18a20f61",
        collectionTypes: [
          {
            singularName: "page",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
                seo: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "user",
          },
        ],
        singleTypes: [
          {
            singularName: "navigation",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
  ],
};

export default config;

import { useMediaQuery, useTheme } from "@mui/material";
import { Hero } from "@pagopa/mui-italia";
import { navigate } from "gatsby";
import * as React from "react";
import { HeroProps } from "../models/components";

export default function HeroComponent(props: HeroProps) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Hero
      title={isMobileDevice ? props.titlemobile : props.title}
      subtitle={props.body}
      inverse={props.imageposition === "left"}
      {...(props.images
        ? {
            image: props.images[0],
            type: "image",
            altText: "",
          }
        : {
            type: "text",
          })}
      ctaPrimary={
        props.buttons?.[0] && {
          label: props.buttons[0].title,
          title: props.buttons[0].title,
          onClick: () => {
            props.buttons && props.buttons[0].page?.slug
              ? navigate(props.buttons[0].page?.slug)
              : window
                  .open(props.buttons && props.buttons[0].externalUrl, "_blank")
                  ?.focus();
          },
        }
      }
      ctaSecondary={
        props.buttons?.[1] && {
          label: props.buttons[1].title,
          title: props.buttons[1].title,
          onClick: () => {
            props.buttons && props.buttons[1].page?.slug
              ? navigate(props.buttons[1].page?.slug)
              : window
                  .open(props.buttons && props.buttons[1].externalUrl, "_blank")
                  ?.focus();
          },
        }
      }
    />
  );
}

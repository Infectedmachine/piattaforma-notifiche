import { useMediaQuery, useTheme } from "@mui/material";
import { Infoblock } from "@pagopa/mui-italia";
import * as React from "react";
import altIcon from "../images/altIcon.png";
import { HeroProps } from "../models/components";
import getConfig from "../utils/config/config";

export default function InfoblockComponent(props: HeroProps) {
  const theme = useTheme();
  const appConfig = getConfig();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Infoblock
      title={isMobileDevice ? props.titlemobile : props.title}
      content={props.body.data.body}
      inverse={props.imageposition === "left"}
      imageShadow={false}
      image={`${appConfig.STRAPI_API_URL}${props.images?.[0].url}` || altIcon}
      ctaPrimary={
        props.buttons?.[0] && {
          label: props.buttons[0].title,
          title: props.buttons[0].title,
          onClick: () => {
            props.buttons && props.buttons[0].page?.slug
              ? (window.location.href = props.buttons[0].page?.slug)
              : window
                  .open(props.buttons && props.buttons[0].externalurl, "_blank")
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
              ? (window.location.href = props.buttons[1].page?.slug)
              : window
                  .open(props.buttons && props.buttons[1].externalurl, "_blank")
                  ?.focus();
          },
        }
      }
    />
  );
}

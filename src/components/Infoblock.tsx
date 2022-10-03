import { useMediaQuery, useTheme } from "@mui/material";
import { Hero, Infoblock } from "@pagopa/mui-italia";
import { navigate } from "gatsby";
import * as React from "react";
import { HeroProps } from "../models/components";
import altIcon from "../images/altIcon.png";

export default function InfoblockComponent(props: HeroProps) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Infoblock
      title={isMobileDevice ? props.titleMobile : props.title}
      content={props.body}
      inverse={props.imagePosition === "left"}
      imageShadow={false}
      image={props.images?.[0] || altIcon}
      aspectRatio={props.aspectRatio}
      ctaPrimary={
        props.buttons?.[0] && {
          label: props.buttons[0].title,
          title: props.buttons[0].title,
          onClick: () => {
            props.buttons && props.buttons[0].related
              ? navigate(props.buttons[0].related)
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
            props.buttons && props.buttons[1].related
              ? navigate(props.buttons[1].related)
              : window
                  .open(props.buttons && props.buttons[1].externalUrl, "_blank")
                  ?.focus();
          },
        }
      }
    />
  );
}

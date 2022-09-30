import { BoyRounded } from "@mui/icons-material";
import { Box, Link, useMediaQuery, useTheme } from "@mui/material";
import { navigate } from "gatsby";
import * as React from "react";
import { LinkProps } from "../models/pages";
import GridItem from "./GridItem";

export default function LinkComponent(props: LinkProps) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const iconStyle = props.iconColor && {
    color: theme.palette.text[props.iconColor],
  };

  return (
    <Link
      href={props.externalUrl}
      target={props.target}
      rel="noopener noreferrer"
      style={{ textDecoration: "none", cursor: "pointer" }}
      onClick={() => props.related && navigate(props.related)}
    >
      <GridItem {...{ image: props.icon, ...props, navigable: true }} />
    </Link>
  );
}

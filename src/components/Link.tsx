import { Link } from "@mui/material";
import { navigate } from "gatsby";
import * as React from "react";
import { LinkProps } from "../models/components";
import GridItem from "./GridItem";

export default function LinkComponent(props: LinkProps) {
  return (
    <Link
      href={props.externalUrl}
      target={props.target}
      rel="noopener noreferrer"
      style={{ textDecoration: "none", cursor: "pointer" }}
      onClick={() => props.page?.slug && navigate(props.page?.slug)}
    >
      <GridItem {...{ image: props.image, ...props, navigable: true }} />
    </Link>
  );
}

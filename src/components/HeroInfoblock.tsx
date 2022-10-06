import { useMediaQuery, useTheme } from "@mui/material";
import * as React from "react";
import { HeroProps } from "../models/components";
import getConfig from "../utils/config/config";
import HeroComponent from "./Hero";
import InfoblockComponent from "./Infoblock";

export default function HeroInfoblock(props: HeroProps) {
  const variant = props.extra
    ? props.extra.variant
    : "blue";

  return (
    <>
      {variant === "blue" ? (
        <HeroComponent {...props} />
      ) : (
        <InfoblockComponent {...props} />
      )}
    </>
  );
}

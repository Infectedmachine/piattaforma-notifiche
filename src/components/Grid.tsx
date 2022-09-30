import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Showcase } from "@pagopa/mui-italia";
import * as React from "react";
import { GridProps } from "../models/pages";

export default function Grid(props: GridProps) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Showcase
      title={isMobileDevice ? props.titleMobile : props.title}
      items={props.body.map((item) => ({
        icon: (
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "60px", height: "60px" }}
          />
        ),
        title: isMobileDevice ? item.titleMobile : item.title,
        subtitle: item.body || "",
      }))}
    />
  );
}

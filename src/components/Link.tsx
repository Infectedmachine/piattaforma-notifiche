import { Box, Link, useMediaQuery, useTheme } from "@mui/material";
import { navigate } from "gatsby";
import * as React from "react";
import { LinkProps } from "../models/pages";

export default function LinkComponent(props: LinkProps) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const iconStyle = props.iconColor && {
    color: theme.palette.text[props.iconColor],
  };

  return (
    <Link
      href={props.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontWeight: 600, textDecoration: "none", cursor: "pointer" }}
      onClick={() => props.related && navigate(props.related)}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        {props.icon && (
          <Box sx={{ pb: 1 }}>
            <img
              src={props.icon}
              alt={props.title}
              style={{ width: "60px", height: "60px", ...iconStyle }}
            />
          </Box>
        )}
        <Box>{isMobileDevice ? props.titleMobile : props.title}</Box>
        <Box sx={{ color: theme.palette.text.secondary }}>{props.body}</Box>
      </Box>
    </Link>
  );
}

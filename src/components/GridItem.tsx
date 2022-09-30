import * as React from "react";
import { GridItemProps } from "../models/pages";
import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { navigate } from "gatsby";

export default function GridItem(
  props: GridItemProps & { navigable?: boolean }
) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
    >
      {props.image && (
        <Box sx={{ pb: 1 }}>
          <img
            src={props.image}
            alt={props.title}
            style={{ width: "60px", height: "60px" }}
          />
        </Box>
      )}
      <Typography
        variant="sidenav"
        component={"div"}
        sx={{
          color: props.navigable
            ? theme.palette.primary.main
            : theme.palette.text.primary,
        }}
      >
        {isMobileDevice ? props.titleMobile : props.title}
      </Typography>
      <Typography
        variant="body2"
        component={"div"}
        sx={{ color: theme.palette.text.secondary }}
      >
        {props.body}
      </Typography>
    </Box>
  );
}

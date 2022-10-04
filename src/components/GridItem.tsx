import * as React from "react";
import { GridItemProps } from "../models/components";
import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import altIcon from "../images/altIcon.png";

export default function GridItem(
  props: GridItemProps & { navigable?: boolean }
) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [altImage, setAltImage] = React.useState(props.image?.url);

  const onImgError = React.useCallback(() => setAltImage(altIcon), []);

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
            src={altImage}
            alt={props.title}
            style={{ width: "120px", height: "120px" }}
            onError={onImgError}
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
        {isMobileDevice ? props.titlemobile : props.title}
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

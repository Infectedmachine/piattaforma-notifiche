import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Showcase } from "@pagopa/mui-italia";
import * as React from "react";
import { GridProps } from "../models/components";
import altIcon from "../images/altIcon.png";

export default function Grid(props: GridProps) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [altImages, setAltImages] = React.useState<Array<string | undefined>>(
    props.body.map((item) => item.image)
  );

  const onImgError = React.useCallback((index: number) => {
    const imgArray = altImages;
    imgArray[index] = altIcon;
    setAltImages(imgArray);
  }, [altImages]);

  return (
    <Showcase
      title={isMobileDevice ? props.titleMobile : props.title}
      items={props.body.map((item, index) => ({
        icon: item.image ? (
          <img
            src={altImages[index]}
            alt={item.title}
            style={{ width: "60px", height: "60px" }}
            onError={() => onImgError(index)}
          />
        ) : undefined,
        title: isMobileDevice ? item.titleMobile : item.title,
        subtitle: item.body || "",
      }))}
    />
  );
}

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Showcase } from "@pagopa/mui-italia";
import * as React from "react";
import { GridProps } from "../models/components";
import altIcon from "../images/altIcon.png";
import getConfig from "../utils/config/config";

export default function Grid(props: GridProps) {
  const theme = useTheme();
  const appConfig = getConfig();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [altImages, setAltImages] = React.useState<Array<string | undefined>>(
    props.items.map((item) => `${appConfig.STRAPI_API_URL}${item.image?.url}`)
  );

  const onImgError = React.useCallback(
    (index: number) => {
      altImages[index] = altIcon;
      setAltImages(altImages);
    },
    [altImages]
  );

  return (
    <Showcase
      title={isMobileDevice ? props.titleMobile : props.title}
      items={props.items.map((item, index) => ({
        icon: item.image ? (
          <img
            src={altImages[index]}
            alt={item.title}
            style={{ width: "60px", height: "60px" }}
            onError={() => onImgError(index)}
          />
        ) : undefined,
        title: isMobileDevice ? item.titlemobile : item.title,
        subtitle: item.body?.data.body || "",
      }))}
    />
  );
}

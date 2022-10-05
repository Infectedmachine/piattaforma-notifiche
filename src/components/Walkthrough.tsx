import { useMediaQuery, useTheme } from "@mui/material";
import { Walkthrough } from "@pagopa/mui-italia";
import * as React from "react";
import altIcon from "../images/altIcon.png";
import { WalkthroughProps } from "../models/components";
import getConfig from "../utils/config/config";

export default function WalkthroughComponent(props: WalkthroughProps) {
  const theme = useTheme();
  const appConfig = getConfig();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [altImages, setAltImages] = React.useState<Array<string | undefined>>(
    props.body.map((item) => `${appConfig.STRAPI_API_URL}${item.image?.url}`)
  );

  const onImgError = React.useCallback(
    (index: number) => {
      const imgArray = altImages;
      imgArray[index] = altIcon;
      setAltImages(imgArray);
    },
    [altImages]
  );

  return (
    <Walkthrough
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
        subtitle: item.body.data.body || "",
      }))}
    />
  );
}

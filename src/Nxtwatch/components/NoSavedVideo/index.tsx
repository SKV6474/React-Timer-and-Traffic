import React from "react";
import { useTranslation } from "react-i18next";

import {
  NoSavedContainer,
  NoSavedContent,
  NoSavedContentDescription,
  NoSavedContentTitle,
  NoSavedImg,
} from "../../../Nxtwatch/styledComponent";

const NoSavedVideosRoute = () => {
  const { t } = useTranslation();

  return (
    <NoSavedContainer>
      <NoSavedImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="No Saved videos"
      ></NoSavedImg>
      <NoSavedContent>
        <NoSavedContentTitle>{t("No saved videos found")}</NoSavedContentTitle>
        <NoSavedContentDescription>
          {t("you can save your videos while watching them")}
        </NoSavedContentDescription>
      </NoSavedContent>
    </NoSavedContainer>
  );
};

export default NoSavedVideosRoute;

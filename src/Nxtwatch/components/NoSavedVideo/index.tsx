import React from "react";
import { useTranslation } from "react-i18next";

import { NO_SAVED_VIDEOS } from "../../constants/images";

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
      <NoSavedImg src={NO_SAVED_VIDEOS} alt="No Saved videos"></NoSavedImg>
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

import React from "react";
import { useTranslation } from "react-i18next";

import WithHeader from "../../hocs/withHeaderHoc";
import WithSideBar from "../../hocs/withSideBarHoc";

import { toggleTheme } from "../../store/Theme";

import { SideContentContainer } from "../../styledComponent";
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundContentDescription,
  NotFoundContentTitle,
  NotFoundImg,
} from "./styledComponet";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <SideContentContainer>
      <NotFoundContainer>
        {toggleTheme.isLightMode ? (
          <NotFoundImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
            alt="Not Found"
          ></NotFoundImg>
        ) : (
          <NotFoundImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
            alt="Not Found"
          ></NotFoundImg>
        )}
        <NotFoundContent>
          <NotFoundContentTitle>{t("Page Not Found")}</NotFoundContentTitle>
          <NotFoundContentDescription>
            {t("We are sorry, the page you requested could not be found")}
          </NotFoundContentDescription>
        </NotFoundContent>
      </NotFoundContainer>
    </SideContentContainer>
  );
};
export default WithHeader(WithSideBar(NotFoundPage));

import React from "react";
import {
  FailureContainer,
  FailureContent,
  FailureContentDescription,
  FailureContentTitle,
  FailureImg,
  RetryBtn,
} from "./styledComponets";

import { toggleTheme } from "../../../Nxtwatch/store/Theme";
import { useTranslation } from "react-i18next";

const Failure = () => {
  const { t } = useTranslation();
  return (
    <FailureContainer>
      {toggleTheme.isLightMode ? (
        <FailureImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure"
        ></FailureImg>
      ) : (
        <FailureImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
          alt="failure"
        ></FailureImg>
      )}
      <FailureContent>
        <FailureContentTitle>
          {t("Oops! Something Went Wrong")}
        </FailureContentTitle>
        <FailureContentDescription>
          {t(
            "We are having some trouble to complete your request. Please try again"
          )}
        </FailureContentDescription>
        <div>
          <RetryBtn onClick={() => window.location.reload()}>
            {t("Retry")}
          </RetryBtn>
        </div>
      </FailureContent>
    </FailureContainer>
  );
};

export default Failure;

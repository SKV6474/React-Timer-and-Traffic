import React from "react";
import { useTranslation } from "react-i18next";
import {
  NoSearchContent,
  NoSearchDiv,
  NoSearchImg,
  NoSearchTitle,
  RetryBtn,
} from "../../../styledComponent";

const NoSearchResults = (props: { onChange: () => void }) => {
  const { t } = useTranslation();
  const { onChange } = props;
  return (
    <NoSearchDiv>
      <NoSearchImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
        alt="No Videos"
      ></NoSearchImg>

      <NoSearchTitle>{t("No Search results found")}</NoSearchTitle>
      <NoSearchContent>
        {t("Try different key words or remove search filter")}
      </NoSearchContent>
      <RetryBtn onClick={() => onChange()}>{t("Retry")}</RetryBtn>
    </NoSearchDiv>
  );
};

export default NoSearchResults;

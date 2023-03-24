import React from "react";
import { useTranslation } from "react-i18next";

import { NO_SEARCH_RESULTS } from "../../constants/images";

import {
  NoSearchContent,
  NoSearchDiv,
  NoSearchImg,
  NoSearchTitle,
  RetryBtn,
} from "../../styledComponent";

const NoSearchResults = (props: { onChange: () => void }) => {
  const { t } = useTranslation();
  const { onChange } = props;
  return (
    <NoSearchDiv>
      <NoSearchImg src={NO_SEARCH_RESULTS} alt="No Videos"></NoSearchImg>
      <NoSearchTitle>{t("No Search results found")}</NoSearchTitle>
      <NoSearchContent>
        {t("Try different key words or remove search filter")}
      </NoSearchContent>
      <RetryBtn onClick={() => onChange()}>{t("Retry")}</RetryBtn>
    </NoSearchDiv>
  );
};

export default NoSearchResults;

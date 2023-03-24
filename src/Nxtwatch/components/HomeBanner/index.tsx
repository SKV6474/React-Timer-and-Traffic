import React from "react";
import { useTranslation } from "react-i18next";

import { BannerProp } from "../../interface";

import { ClOSE_ICON, NXT_WATCH_LOGO_LIGHT_THEME } from "../../constants/images";

import {
  ContentDiv,
  GetItNowBtn,
  HeaderImage,
  ImgContainer,
  ImgStyle,
  RemoveImg,
} from "../../styledComponent";

const HomeBanner = (props: BannerProp) => {
  const { handleCloseEvent } = props;
  const { t } = useTranslation();

  return (
    <HeaderImage>
      <ImgContainer>
        <ImgStyle src={NXT_WATCH_LOGO_LIGHT_THEME} alt="Banner" />
        <RemoveImg onClick={handleCloseEvent} src={ClOSE_ICON} alt="close" />
      </ImgContainer>
      <ContentDiv>{t("Pre_paid")}</ContentDiv>
      <GetItNowBtn>{t("get_it_now")}</GetItNowBtn>
    </HeaderImage>
  );
};

export default HomeBanner;

import { ImgDiv, Logoimg } from "../../../Nxtwatch/styledComponent";

import "styled-components/macro";

import { toggleTheme } from "../../../Nxtwatch/store";
import {
  NXT_WATCH_LOGO_DARK_THEME,
  NXT_WATCH_LOGO_LIGHT_THEME,
} from "../../../Nxtwatch/constants/images";

const LogoImg = (props: { css: string }) => {
  const { css } = props;
  return (
    <ImgDiv css={css}>
      {toggleTheme.Theme === "light" ? (
        <Logoimg src={NXT_WATCH_LOGO_LIGHT_THEME} alt="logo"></Logoimg>
      ) : (
        <Logoimg src={NXT_WATCH_LOGO_DARK_THEME} alt="logo dark"></Logoimg>
      )}
    </ImgDiv>
  );
};

export default LogoImg;

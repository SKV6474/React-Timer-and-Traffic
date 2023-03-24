import { ImgDiv, Logoimg } from "../../../Nxtwatch/styledComponent";
import "styled-components/macro";

import { toggleTheme } from "../../../Nxtwatch/store/Theme";

const LogoImg = (props: any) => {
  return (
    <ImgDiv css={props.css}>
      {toggleTheme.isLightMode ? (
        <Logoimg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        ></Logoimg>
      ) : (
        <Logoimg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
          alt="logo dark"
        ></Logoimg>
      )}
    </ImgDiv>
  );
};

export default LogoImg;

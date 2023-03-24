import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { RemoveCookies } from "../../../Authentication/utils";

import LogoImg from "../../../Common/components/logoImg";

import { Props } from "../../interface";
import { toggleTheme } from "../../store";

import LogOutPopup from "../PopupDesignPage/logOut";
import Menu from "../PopupDesignPage/menuBox";

import {
  LOGOUT_DARK_THEME,
  LOGOUT_LIGHT_THEME,
  MENU_BAR_DARK_THEME,
  MENU_BAR_LIGHT_THEME,
  MOON_LIGHT_THEME,
  NXT_WATCH_PROFILE,
  TORCH_DARK_THEME,
} from "../../constants/images";

import {
  DarkImg,
  HeaderDiv,
  HeaderMenu,
  HeaderStyle,
  LightImg,
  LogoutBtn,
  Logoutimg,
  MenuImg,
  Profile,
  ProfileImg,
  ThemeImgContainer,
} from "../../styledComponent";

const HeaderComponent = (props: Props) => {
  const { history } = props;
  const { t, i18n } = useTranslation();

  const [isLinkPop, setIsLinkPop] = useState(false);
  const [isLogoutPop, setIsLogoutPop] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("i18nextLng");
    if (value === "en" || value === "hindi") {
      (document.getElementById("Language") as HTMLInputElement).value = value;
    }
  });

  const handleThemeChange = () => {
    toggleTheme.toggleThemeMode();
  };

  const handleConfirmedLogout = () => {
    history.replace("/login");
    RemoveCookies();
  };

  const handleToggleLogoutCancel = () => {
    setIsLogoutPop(!isLogoutPop);
  };

  const handleToggleMenuShow = () => {
    setIsLinkPop(!isLinkPop);
  };

  const handleLanguageChange = () => {
    const Language = (document.getElementById("Language") as HTMLInputElement)
      .value;
    if (Language === "en") {
      i18n.changeLanguage(Language);
    } else if (Language === "hindi") {
      i18n.changeLanguage(Language);
    }
  };

  return (
    <HeaderDiv>
      <div>
        <LogoImg css={HeaderStyle} />
      </div>
      <HeaderMenu>
        <select id="Language" onClick={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hindi">हिंदी</option>
        </select>
        <ThemeImgContainer
          style={{
            marginLeft: toggleTheme.Theme === "light" ? "5px" : "0",
          }}
        >
          <DarkImg
            onClick={handleThemeChange}
            src={MOON_LIGHT_THEME}
            alt="Dark Theme"
          ></DarkImg>

          <LightImg
            onClick={handleThemeChange}
            src={TORCH_DARK_THEME}
            alt="Light Theme"
          />
        </ThemeImgContainer>
        <Profile>
          <ProfileImg src={NXT_WATCH_PROFILE} alt="profile"></ProfileImg>
          {toggleTheme.Theme === "light" ? (
            <MenuImg
              onClick={handleToggleMenuShow}
              src={MENU_BAR_LIGHT_THEME}
              alt="Menu"
            />
          ) : (
            <MenuImg
              onClick={handleToggleMenuShow}
              src={MENU_BAR_DARK_THEME}
              alt="Menu"
            />
          )}
        </Profile>
        <div>
          {toggleTheme.Theme === "light" ? (
            <Logoutimg
              onClick={handleToggleLogoutCancel}
              src={LOGOUT_LIGHT_THEME}
              alt="logout"
            />
          ) : (
            <Logoutimg
              onClick={handleToggleLogoutCancel}
              src={LOGOUT_DARK_THEME}
              alt="logout"
            />
          )}
          <LogoutBtn onClick={handleToggleLogoutCancel}>
            <b>{t("logout")}</b>
          </LogoutBtn>
        </div>
        {isLogoutPop && (
          <LogOutPopup
            onCancel={handleToggleLogoutCancel}
            onConfirm={handleConfirmedLogout}
          />
        )}
        {isLinkPop && <Menu onChange={handleToggleMenuShow} />}
      </HeaderMenu>
    </HeaderDiv>
  );
};

export default HeaderComponent;

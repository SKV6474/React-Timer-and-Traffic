import React from "react";
import { withRouter } from "react-router-dom";

import LogoImg from "../../../Common/components/logoImg";

import LogOutPopup from "../../components/PopupDesignPage/logOut";
import Menu from "../../components/PopupDesignPage/menuBox";

import { RemoveCookies } from "../../../Authentication/login";
import { Props, State } from "../../interface/index";

import { toggleTheme } from "../../store/Theme";
import { inject, observer } from "mobx-react";

import {
  HeaderDiv,
  HeaderStyle,
  HeaderMenu,
  DarkImg,
  LightImg,
  Profile,
  ProfileImg,
  MenuImg,
  Logoutimg,
  LogoutBtn,
  Container,
  AppDiv,
  ThemeImgContainer,
} from "../../styledComponent";
import { ThemeProvider } from "styled-components";

import { DarkTheme, LightTheme } from "../../constants/color";

import i18n from "i18next";
import { withTranslation } from "react-i18next";

const WithHeader = (
  WrappedComponent: React.ComponentType<any>
): React.ComponentType<any> => {
  @inject("toggleTheme")
  @observer
  class Header extends React.Component<Props, State> {
    history: any;
    constructor(props: Props | Readonly<Props>) {
      super(props);
      this.history = this.props.history;
    }
    state: State = {
      isLinkPop: false,
      isLogoutPop: false,
    };

    handleThemeChange = (): void => {
      toggleTheme.toggleThemeMode();
    };

    handleConfirmedLogout = () => {
      this.history.replace("/login");
      RemoveCookies();
    };

    handleLogoutEvent = () => {
      this.setState({ isLinkPop: this.state.isLinkPop, isLogoutPop: true });
    };

    handleLogoutCancel = () => {
      this.setState({ isLinkPop: this.state.isLinkPop, isLogoutPop: false });
    };

    handleCloseMenu = () => {
      this.setState({ isLinkPop: false, isLogoutPop: this.state.isLogoutPop });
    };

    handleMenuShow = () => {
      this.setState({ isLinkPop: true, isLogoutPop: this.state.isLogoutPop });
    };

    handleLanguageChange = () => {
      const Language = (document.getElementById("Language") as HTMLInputElement)
        .value;
      if (Language === "en") {
        i18n.changeLanguage(Language);
      } else if (Language === "hindi") {
        i18n.changeLanguage(Language);
      }
    };

    render() {
      const { t } = this.props;
      return (
        <ThemeProvider theme={toggleTheme.isLightMode ? LightTheme : DarkTheme}>
          <AppDiv>
            <Container className="Container">
              <HeaderDiv>
                <div>
                  <LogoImg css={HeaderStyle} />
                </div>
                <HeaderMenu>
                  <select
                    id="Language"
                    name="Languages"
                    onClick={this.handleLanguageChange}
                  >
                    <option>Language</option>
                    <option value="en">English</option>
                    <option value="hindi">हिंदी</option>
                  </select>
                  <ThemeImgContainer
                    style={{
                      marginLeft: toggleTheme.isLightMode ? "5px" : "0",
                    }}
                  >
                    <DarkImg
                      onClick={this.handleThemeChange}
                      src="https://i.ibb.co/JnkFmhW/icons8-moon-symbol-30.png"
                      alt="Dark Theme"
                    ></DarkImg>

                    <LightImg
                      onClick={this.handleThemeChange}
                      src="https://i.ibb.co/HtRGC9M/Screenshot-from-2023-03-13-16-43-53.png"
                      alt="Light Theme"
                    />
                  </ThemeImgContainer>
                  <Profile>
                    <ProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                      alt="profile"
                    ></ProfileImg>
                    {toggleTheme.isLightMode ? (
                      <MenuImg
                        onClick={this.handleMenuShow}
                        src="https://i.ibb.co/zJPR5ZK/Screenshot-from-2023-03-13-17-09-50.png"
                        alt="Menu"
                      />
                    ) : (
                      <MenuImg
                        onClick={this.handleMenuShow}
                        src="https://i.ibb.co/8cRGN6W/Screenshot-from-2023-03-13-17-17-57.png"
                        alt="Menu"
                      />
                    )}
                  </Profile>
                  <div>
                    {toggleTheme.isLightMode ? (
                      <Logoutimg
                        onClick={this.handleLogoutEvent}
                        src="https://i.ibb.co/NNX0S5G/Screenshot-from-2023-03-13-17-10-10.png"
                        alt="logout"
                      />
                    ) : (
                      <Logoutimg
                        onClick={this.handleLogoutEvent}
                        src="https://i.ibb.co/nsqVFbv/Screenshot-from-2023-03-13-17-17-44.png"
                        alt="logout"
                      />
                    )}
                    <LogoutBtn onClick={this.handleLogoutEvent}>
                      <b>{t("logout")}</b>
                    </LogoutBtn>
                  </div>
                  {this.state.isLogoutPop && (
                    <LogOutPopup
                      onCancel={this.handleLogoutCancel}
                      onConfirm={this.handleConfirmedLogout}
                    />
                  )}
                  {this.state.isLinkPop && (
                    <Menu onChange={this.handleCloseMenu} />
                  )}
                </HeaderMenu>
              </HeaderDiv>
              <WrappedComponent {...this.props} />
            </Container>
          </AppDiv>
        </ThemeProvider>
      );
    }
  }
  return withTranslation()(withRouter(Header));
};
export default WithHeader;

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import LogoImg from "../../../Common/components/logoImg";

import { userDeatailsType } from "../../interface";

import { toggleTheme } from "../../store/Theme";
import { inject, observer } from "mobx-react";

import {
  LoginWrapper,
  LoginDiv,
  LogoImgContainer,
  UserInput,
  Input,
  Label,
  InputDiv,
  ShowDiv,
  Check,
  LoginBtn,
  ErrorP,
  AppDiv,
  LanguageDiv,
} from "../../styledComponent";
import { ThemeProvider } from "styled-components";

import { DarkTheme, LightTheme } from "../../constants/color";

import { useTranslation } from "react-i18next";

const Login = inject("toggleTheme")(
  observer((props: any) => {
    const { t, i18n } = useTranslation();
    const [userDetails, setUserDeatail] = useState<userDeatailsType>({
      username: "",
      password: "",
    });

    const [isCheck, setIsCheck] = useState<boolean>(false);

    const handleSubmit = async (e: React.SyntheticEvent) => {
      e.preventDefault();

      const response = await fetch("https://apis.ccbp.in/login", {
        method: "POST",
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (response.ok) {
        const { history } = props;
        history.replace("/");
        Cookies.set("jwt_token", data.jwt_token, { expires: 1 });
        <Redirect to="/" />;
      } else {
        (
          document.getElementById("Error") as HTMLInputElement
        ).innerHTML = `*${data.error_msg}`;
      }
    };

    const handleUserName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setUserDeatail({
        username: e.target.value,
        password: userDetails.password,
      });
    };

    const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setUserDeatail({
        username: userDetails.username,
        password: e.target.value,
      });
    };

    const handleCheckEvent: React.ChangeEventHandler<HTMLInputElement> = (
      e
    ) => {
      setIsCheck(e.target.checked);
    };

    return (
      <ThemeProvider theme={toggleTheme.isLightMode ? LightTheme : DarkTheme}>
        <AppDiv>
          <LoginWrapper>
            <LoginDiv>
              <LogoImgContainer>
                <LogoImg />
              </LogoImgContainer>
              <form onSubmit={handleSubmit}>
                <InputDiv>
                  <Label>{t("username")}</Label>
                  <UserInput
                    style={{
                      backgroundColor:
                        userDetails.username.length > 0 ? "#e2e8f0" : "",
                    }}
                    placeholder={t("username") + ""}
                    onChange={handleUserName}
                  />
                </InputDiv>
                <InputDiv>
                  <Label>{t("password")}</Label>
                  <Input
                    placeholder={t("password") + ""}
                    type={isCheck ? "none" : "password"}
                    onChange={handlePassword}
                  />
                </InputDiv>

                <ShowDiv>
                  <Check type="checkbox" onChange={handleCheckEvent} />
                  <div>{t("show_password")}</div>
                </ShowDiv>

                <LoginBtn type="submit">
                  <b>{t("login")}</b>
                </LoginBtn>
                <LanguageDiv>
                  <div
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    onClick={() => i18n.changeLanguage("en")}
                  >
                    English
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => i18n.changeLanguage("hindi")}
                  >
                    हिंदी
                  </div>
                </LanguageDiv>
                <ErrorP id="Error"></ErrorP>
              </form>
            </LoginDiv>
          </LoginWrapper>
        </AppDiv>
      </ThemeProvider>
    );
  })
);

export default Login;

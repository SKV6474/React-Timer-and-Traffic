import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import { Props, UserDeatailsType } from "../../interface";

import LoginComponent from "../../components/Login";

import { toggleTheme } from "../../store";
import { inject, observer } from "mobx-react";

import { DarkTheme, LightTheme } from "../../constants/color";

import { ThemeProvider } from "styled-components";

const LoginRoute = inject("toggleTheme")(
  observer((props: Props) => {
    const handleSubmit = async (userDetails: UserDeatailsType) => {
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

    return (
      <ThemeProvider
        theme={toggleTheme.Theme === "light" ? LightTheme : DarkTheme}
      >
        <LoginComponent onSubmitForm={handleSubmit} />
      </ThemeProvider>
    );
  })
);

export default LoginRoute;

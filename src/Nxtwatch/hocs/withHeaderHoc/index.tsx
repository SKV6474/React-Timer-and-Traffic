import React from "react";

import HeaderComponent from "../../components/Header";
import { Props } from "../../interface/index";

import { toggleTheme } from "../../store";
import { inject, observer } from "mobx-react";

import { DarkTheme, LightTheme } from "../../constants/color";

import { Container, AppDiv } from "../../styledComponent";
import { ThemeProvider } from "styled-components";

const WithHeader = (
  WrappedComponent: React.ComponentType<any>
): React.ComponentType<any> => {
  @inject("toggleTheme")
  @observer
  class Header extends React.Component<Props> {
    render() {
      return (
        <ThemeProvider
          theme={toggleTheme.Theme === "light" ? LightTheme : DarkTheme}
        >
          <AppDiv>
            <Container className="Container">
              <HeaderComponent {...this.props} />
              <WrappedComponent {...this.props} />
            </Container>
          </AppDiv>
        </ThemeProvider>
      );
    }
  }
  return Header;
};
export default WithHeader;

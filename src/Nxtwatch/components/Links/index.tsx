import React from "react";
import { useTranslation } from "react-i18next";
import { Icon, LinkStyle, MenuDiv } from "../../styledComponent";

const Link = () => {
  const { t } = useTranslation();

  return (
    <>
      <LinkStyle activeClassName="active" exact to="/">
        <MenuDiv className="childDiv">
          <Icon className="fa-solid fa-house"></Icon>
          {t("Home")}
        </MenuDiv>
      </LinkStyle>

      <LinkStyle activeClassName="active" exact to="/trending">
        <MenuDiv className="childDiv">
          <Icon className="fa-solid fa-fire"></Icon>
          {t("Trending")}
        </MenuDiv>
      </LinkStyle>

      <LinkStyle activeClassName="active" exact to="/gaming">
        <MenuDiv className="childDiv">
          <Icon className="fa-solid fa-gamepad"></Icon>
          {t("Gaming")}
        </MenuDiv>
      </LinkStyle>

      <LinkStyle activeClassName="active" exact to="/saved-videos">
        <MenuDiv className="childDiv">
          <Icon className="fa-sharp fa-solid fa-bookmark"></Icon>
          {t("Saved videos")}
        </MenuDiv>
      </LinkStyle>
    </>
  );
};

export default Link;

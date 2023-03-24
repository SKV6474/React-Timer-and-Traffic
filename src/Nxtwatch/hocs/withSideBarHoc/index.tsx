import React from "react";
import { useTranslation } from "react-i18next";

import Link from "../../components/Links";

import { Props } from "../../interface";

import {
  FACEBOOK_LOGO,
  LINKED_IN_LOGO,
  TWITTER_LOGO,
} from "../../constants/images";

import {
  SideBarDiv,
  ContactSupport,
  ContactImg,
  ContactContainer,
  SideWithContentContainer,
  ContactDescription,
} from "../../styledComponent";

const WithSideBar = (
  WrappedComponent: React.ComponentType<any>
): React.ComponentType<any> => {
  const SideBar = (props: Props) => {
    const { t } = useTranslation();

    return (
      <SideWithContentContainer>
        <SideBarDiv>
          <div>
            <Link />
          </div>
          <ContactSupport>
            <div>
              <b style={{ fontSize: "18px" }}>{t("CONTACT US")}</b>
            </div>
            <ContactContainer>
              <ContactImg src={FACEBOOK_LOGO} alt="Facebook"></ContactImg>
              <ContactImg
                style={{ margin: "0 15px" }}
                src={TWITTER_LOGO}
                alt="Twitter"
              ></ContactImg>
              <ContactImg src={LINKED_IN_LOGO} alt="linked in"></ContactImg>
            </ContactContainer>
            <ContactDescription>
              {t("Enjoy! Now to see your channels and recommendations!")}
            </ContactDescription>
          </ContactSupport>
        </SideBarDiv>
        <WrappedComponent {...props} />
      </SideWithContentContainer>
    );
  };
  return SideBar;
};

export default WithSideBar;

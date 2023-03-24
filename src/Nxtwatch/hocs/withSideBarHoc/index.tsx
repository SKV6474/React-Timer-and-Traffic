import React from "react";
import { useTranslation } from "react-i18next";

import Link from "../../../Common/components/Links";

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
  const SideBar = (props: any) => {
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
              <ContactImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="Facebook"
              ></ContactImg>
              <ContactImg
                style={{ margin: "0 15px" }}
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="Twitter"
              ></ContactImg>
              <ContactImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in"
              ></ContactImg>
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

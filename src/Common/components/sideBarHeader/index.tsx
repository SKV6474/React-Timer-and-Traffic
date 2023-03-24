import {
  SubHeaderContainer,
  SubHeaderIconContainer,
} from "../../../Nxtwatch/styledComponent";

import i18n from "i18next";

const SideBarHeader = (props: { type: string }) => {
  const SubHeader = [
    { type: "trending", icon: "fa-solid fa-fire", title: i18n.t("Trending") },
    { type: "gaming", icon: "fa-solid fa-gamepad", title: i18n.t("Gaming") },
    {
      type: "saved-videos",
      icon: "fa-sharp fa-solid fa-bookmark",
      title: i18n.t("Saved videos"),
    },
  ];
  const { type } = props;

  let index = SubHeader.findIndex((ele) => ele.type === type);

  return (
    <SubHeaderContainer>
      <SubHeaderIconContainer>
        <i className={SubHeader[index].icon}></i>
      </SubHeaderIconContainer>
      {SubHeader[index].title}
    </SubHeaderContainer>
  );
};

export default SideBarHeader;

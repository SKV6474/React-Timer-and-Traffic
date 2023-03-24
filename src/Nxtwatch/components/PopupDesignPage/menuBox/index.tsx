import React from "react";
import Link from "../../Links";
import { MenuCloseFunc } from "../../../interface";

import { MenuClose, MenuContainer } from "./styledComponent";

const Menu = (props: MenuCloseFunc) => {
  const { onChange } = props;

  const handleCloseMenu = () => {
    onChange();
  };

  return (
    <>
      <MenuContainer>
        <MenuClose onClick={handleCloseMenu}>
          <i className="fa-solid fa-xmark"></i>
        </MenuClose>
        <div>
          <Link />
        </div>
      </MenuContainer>
    </>
  );
};

export default Menu;

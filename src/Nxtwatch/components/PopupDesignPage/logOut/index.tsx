import React from "react";
import { useTranslation } from "react-i18next";
import { LogoutFunctions } from "../../../interface";
import {
  BtnContainer,
  CancelBtn,
  ConfirmBtn,
  LogOutContainer,
  LogOutContent,
  LogoutMsg,
} from "./styledComponent";

const LogOutPopup = (props: LogoutFunctions) => {
  const { t } = useTranslation();

  const { onCancel, onConfirm } = props;

  const handleCancelEvent = () => {
    onCancel();
  };

  const handleConfirmEvent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    onConfirm();
  };
  return (
    <LogOutContainer onClick={handleCancelEvent}>
      <LogOutContent>
        <LogoutMsg>{t("Are you sure you want to logout?")}</LogoutMsg>
        <BtnContainer>
          <CancelBtn onClick={handleCancelEvent}>{t("cancel")}</CancelBtn>
          <ConfirmBtn onClick={handleConfirmEvent}>{t("Confirm")}</ConfirmBtn>
        </BtnContainer>
      </LogOutContent>
    </LogOutContainer>
  );
};

export default LogOutPopup;

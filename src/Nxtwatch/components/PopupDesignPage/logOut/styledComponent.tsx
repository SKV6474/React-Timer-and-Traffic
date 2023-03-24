import styled from "styled-components";

export const LogOutContainer = styled.div`
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
`;
export const LogOutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.LOGOUT_BGCOLOR};
  border-radius: 5px;
  width: 300px;
  height: 125px;
  @media screen and (max-width: 576px) {
    width: 300px;
    height: 150px;
  }
`;

export const LogoutMsg = styled.div`
  color: ${(props) => props.theme.LOGOUT_MSG};
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  margin-top: 20px;
`;

export const CancelBtn = styled.button`
  padding: 10px 20px;
  color: ${(props) => props.theme.color};
  border: 1px solid;
  border-color: ${(props) => props.theme.color};
  border-radius: 5px;
  background-color: transparent;
`;

export const ConfirmBtn = styled.button`
  padding: 10px 20px;
  color: #fff;
  background-color: #3b82f6;
  border: 0;
  border-radius: 5px;
`;

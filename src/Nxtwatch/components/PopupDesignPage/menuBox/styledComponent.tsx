import styled from "styled-components";

export const MenuContainer = styled.div`
  z-index: 1;
  background-color: ${(props) => props.theme.rcolor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
`;

export const MenuClose = styled.div`
  color: ${(props) => props.theme.color};
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
`;

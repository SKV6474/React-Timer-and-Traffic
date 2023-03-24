import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NotFoundImg = styled.img`
  width: 450px;
  height: 450px;
  @media screen and (max-width: 576px) {
    width: 300px;
    height: 300px;
  }
`;

export const NotFoundContent = styled.div`
  text-align: center;
`;

export const NotFoundContentTitle = styled.div`
  font-size: 36px;
  height: 48px;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin: 40px 0 30px;
  @media screen and (max-width: 576px) {
    font-size: 28px;
    margin: 30px 0 20px;
  }
`;

export const NotFoundContentDescription = styled.div`
  font-size: 16px;
  height: 22px;
  color: ${(props) => props.theme.childtextColor};
  @media screen and (max-width: 390px) {
    width: 325px;
  }
`;

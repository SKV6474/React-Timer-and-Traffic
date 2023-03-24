import styled from "styled-components";

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 145px);
  padding: 20px 0 0;
`;

export const FailureImg = styled.img`
  height: 275px;
  width: 340px;
  @media screen and (max-width: 576px) {
    height: 200px;
    width: 265px;
  }
`;

export const FailureContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FailureContentTitle = styled.div`
  font-size: 25px;
  margin: 40px 0 30px;
  color: ${(props) => props.theme.color};
  @media screen and (max-width: 576px) {
    font-size: 19px;
    margin: 30px 0 20px;
  }
`;

export const FailureContentDescription = styled.div`
  font-size: 18px;
  text-align: center;
  width: 500px;
  line-height: 2;
  color: ${(props) => props.theme.childtextColor};
  margin-bottom: 15px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    line-height: 1.5;
    width: 80%;
    margin-bottom: 10px;
  }
`;

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  padding: 12px 25px;
  color: #fff;
  border-radius: 5px;
  border: 0;
  width: 120px;
  height: 42px;
`;

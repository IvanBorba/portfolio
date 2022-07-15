import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 16vh;
  background-color: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 76vw;
    border: 1px solid #d2d2d2;
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1vh 5vw;
  box-sizing: border-box;

  div {
  }

  p {
    color: #d2d2d2;
  }
`;

export const IconContainer = styled.a`
  cursor: pointer;
  margin-left: 1vw;
`;

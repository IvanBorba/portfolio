import styled, { css } from "styled-components";

interface VerticalLineProps {
  small?: boolean;
}

interface SideColumnProps {
  reverse?: boolean;
}

export const VerticalLine = styled.hr`
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  height: 45vh;

  ${(props: VerticalLineProps) =>
    props.small &&
    css`
      height: 5vh;
    `}
`;

export const SideColumn = styled.div`
  width: 16vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #111111;

  ${(props: SideColumnProps) =>
    props.reverse &&
    css`
      flex-direction: column-reverse;
    `}
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
`;

export const InfoContainer = styled.div`
  width: 68vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111111;
`;

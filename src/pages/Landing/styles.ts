import styled, { css } from "styled-components";

interface VerticalLineProps {
  small?: boolean;
}

interface SideColumnProps {
  reverse?: boolean;
}

export const VerticalLine = styled.hr`
  border: 1px solid #d2d2d2;
  transform: rotate(90deg);
  border-radius: 10px;
  width: 45vw;

  ${(props: VerticalLineProps) =>
    props.small &&
    css`
      width: 5vw;
    `}
`;

export const SideColumn = styled.div`
  height: 90vh;
  width: 16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  ${(props: SideColumnProps) =>
    props.reverse &&
    css`
      flex-direction: column-reverse;
    `}
`;

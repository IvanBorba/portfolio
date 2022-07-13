import styled, { css } from "styled-components";

interface HorizontalLineProps {
  small?: boolean;
}

export const HorizontalLine = styled.hr`
  border: 2px solid #d2d2d2;
  transform: rotate(90deg);
  border-radius: 10px;
  width: 45vw;

  ${(props: HorizontalLineProps) =>
    props.small &&
    css`
      width: 5vw;
    `}
`;

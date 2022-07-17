import styled, { css } from "styled-components";

interface TechCardProps {
  shadowColor?: "blue" | "orange" | "yellow" | "green" | "red" | "light-green";
}

export const StyledCard = styled.div`
  width: 9vw;
  height: 16vh;
  margin: 1.9vw;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 0 8px 24px 0 rgba(100, 100, 100, 0.25);

  ${(props: TechCardProps) =>
    props.shadowColor === "blue" &&
    css`
      :hover {
        box-shadow: 0 8px 24px 0 rgba(0, 122, 204, 0.25);
      }
    `};

  ${(props: TechCardProps) =>
    props.shadowColor === "green" &&
    css`
      :hover {
        box-shadow: 0 8px 24px 0 rgba(87, 174, 71, 0.25);
      }
    `};

  ${(props: TechCardProps) =>
    props.shadowColor === "yellow" &&
    css`
      :hover {
        box-shadow: 0 8px 24px 0 rgba(240, 219, 79, 0.25);
      }
    `};

  ${(props: TechCardProps) =>
    props.shadowColor === "orange" &&
    css`
      :hover {
        box-shadow: 0 8px 24px 0 rgba(243, 79, 41, 0.25);
      }
    `};

  ${(props: TechCardProps) =>
    props.shadowColor === "red" &&
    css`
      :hover {
        box-shadow: 0 8px 24px 0 rgba(223, 35, 79, 0.25);
      }
    `};

  ${(props: TechCardProps) =>
    props.shadowColor === "light-green" &&
    css`
      :hover {
        box-shadow: 0 8px 24px 0 rgba(131, 205, 41, 0.25);
      }
    `};
`;

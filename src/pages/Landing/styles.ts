import styled, { css } from "styled-components";

interface VerticalLineProps {
  small?: boolean;
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
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
`;

export const ProfileContainer = styled.div`
  width: 68vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111111;
`;

export const InfoContainer = styled.div`
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #d2d2d2;
    font-weight: normal;
    font-size: 64px;
    margin-bottom: 1rem;
  }

  h3 {
    color: #146fc2;
    font-size: 22px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p {
    width: 23vw;
    color: #d2d2d2;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: lighter;
    text-align: center;
    line-height: 140%;
  }
`;

export const AvatarContainer = styled.div`
  width: 16vw;
  height: 16vw;
  border-radius: 50%;
  border: 1px solid #d2d2d2;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const ScrollCta = styled.span`
  width: 8vw;
  color: #146fc2;
  position: absolute;
  bottom: 5vh;
  left: calc(50% - 4vw);
  text-align: center;
  font-weight: lighter;
  letter-spacing: 1px;
  user-select: none;
`;

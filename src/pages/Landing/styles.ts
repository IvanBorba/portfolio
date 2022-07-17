import styled, { css } from "styled-components";

interface VerticalLineProps {
  small?: boolean;
}

interface HorizontalLineProps {
  position?: "center" | "right";
}

interface BlurBgBallProps {
  top: string;
  left: string;
}

export const VerticalLine = styled.hr`
  height: 45vh;
  border: 1px solid #d2d2d2;
  border-radius: 10px;

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
  height: 60vh;
  margin: 0 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

export const StyledTitle = styled.h2`
  color: #d2d2d2;
  font-weight: lighter;
  font-size: 72px;
  margin-bottom: 2vh;

  span {
    color: #146fc2;
  }
`;

export const AvatarContainer = styled.div`
  width: 16vw;
  height: 16vw;
  margin: 0 2vw;

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

export const SecondSectionContainer = styled.section`
  width: 100%;
  height: 220vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111111;
  padding-top: 12vh;
`;

export const AboutMeContainer = styled.div`
  width: 64vw;
  height: 40vh;
  margin-bottom: 12vh;
  display: flex;
  flex-direction: column;

  p {
    width: 65vw;
    color: #d2d2d2;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: lighter;
    line-height: 140%;

    .spotify-link {
      text-decoration: none;
      font-weight: normal;
      color: #0bd659;
    }

    .steam-link {
      text-decoration: none;
      font-weight: normal;
      color: #146fc2;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

export const HorizontalLine = styled.hr`
  width: 5vw;
  border: 2px solid #146fc2;
  margin-bottom: 4vh;

  ${(props: HorizontalLineProps) =>
    props.position === "center" &&
    css`
      margin-left: 29.5vw;
    `}

  ${(props: HorizontalLineProps) =>
    props.position === "right" &&
    css`
      margin-left: 59vw;
    `}
`;

export const MyStacksContainer = styled.div`
  width: 64vw;
  height: 64vh;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const TechIconsContainer = styled.div`
  width: 64vw;
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectsContainer = styled.div`
  width: 64vw;
  height: 64vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 10vh;

  p {
    width: 65vw;
    color: #d2d2d2;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: lighter;
    line-height: 140%;
  }
`;

export const IconContainer = styled.a`
  cursor: pointer;

  &:first-child {
    color: "#d2d2d2";
  }
`;

export const BlurBgBall = styled.div`
  position: absolute;
  width: 22rem;
  height: 14rem;
  border-radius: 50%;
  background: rgba(20, 111, 194, 0.7);
  filter: blur(212px);
  filter: blur(72px);

  ${(props: BlurBgBallProps) =>
    props &&
    css`
      top: ${props.top};
      left: ${props.left};
    `}
`;

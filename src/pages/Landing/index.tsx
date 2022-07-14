import { VscGithub } from "react-icons/vsc";
import {
  IoLogoLinkedin,
  IoMailOutline,
  IoLogoWhatsapp,
  IoCaretDown,
} from "react-icons/io5";

import Header from "../../components/Header";
import {
  AvatarContainer,
  InfoContainer,
  MainContainer,
  ProfileContainer,
  ScrollCta,
  SideColumn,
  VerticalLine,
  SecondSectionContainer,
  AboutMeContainer,
  StyledTitle,
  HorizontalLine,
  MyStacksContainer,
  TechIconsContainer,
  TechCard,
} from "./styles";

import profileImage from "../../assets/images/profile.jpg";

import * as TechIcons from "../../assets/icons";

interface ContactIconsStyle {
  color: string;
  cursor: string;
}

const LandingPage = () => {
  const contactIconsStyle: ContactIconsStyle = {
    color: "#d2d2d2",
    cursor: "pointer",
  };

  return (
    <>
      <Header />
      <MainContainer>
        <SideColumn>
          <VerticalLine small />
          <a href="https://github.com/IvanBorba" target="_blank">
            <VscGithub style={contactIconsStyle} size={40} />
          </a>
          <a href="https://www.linkedin.com/in/ivan-borba/" target="_blank">
            <IoLogoLinkedin style={contactIconsStyle} size={40} />
          </a>
          <VerticalLine />
        </SideColumn>
        <ProfileContainer>
          <InfoContainer>
            <StyledTitle>
              Hey, I'm <strong>Ivan</strong>
            </StyledTitle>
            <h3>Full Stack Developer + Teacher</h3>
            <p>
              I'm a Full Stack Developer based in Brazil. <br />
              Focused on writing clean, scalable and efficient code, also in
              sharing my knowledges.
            </p>
          </InfoContainer>
          <AvatarContainer>
            <img src={profileImage} alt="Foto de perfil" />
          </AvatarContainer>
        </ProfileContainer>
        <SideColumn>
          <VerticalLine />
          <a href="mailto: mrborbaivan@gmail.com">
            <IoMailOutline style={contactIconsStyle} size={40} />
          </a>
          <a href="https://wa.me/5547991114205" target="_blank">
            <IoLogoWhatsapp style={contactIconsStyle} size={40} />
          </a>
          <VerticalLine small />
        </SideColumn>
        <ScrollCta>
          Scroll down
          <br />
          <IoCaretDown size={20} />
        </ScrollCta>
      </MainContainer>
      <SecondSectionContainer>
        <AboutMeContainer>
          <StyledTitle>
            About <strong>me</strong>
            <span>.</span>
          </StyledTitle>
          <HorizontalLine />
          <p>
            I'm Ivan Gabriel de Borba, a {new Date().getFullYear() - 1996} year
            old Brazilian Web Developer, passionated about mathematics, nature,
            patterns, technology, music, games and much more.
            <br />
            <br />
            Follow me on{" "}
            <a href="https://open.spotify.com/user/mr_borba?si=d9ef676df3bf4c0d">
              Spotify
            </a>{" "}
            to see what I'm listening, or add me on{" "}
            <a href="https://steamcommunity.com/id/Ivanplays666/">Steam</a> so
            we can enjoy some games together.
            <br />
            <br />
            Studying about software development since february 2020, I'm focused
            on keeping learning everyday through reading, coding, watching live
            codes and teaching what I've already learned.
          </p>
        </AboutMeContainer>
        <MyStacksContainer>
          <StyledTitle>
            <strong>My </strong>Stacks
            <span>.</span>
          </StyledTitle>
          <HorizontalLine position="right" />
          <TechIconsContainer>
            <TechCard shadowColor="yellow">
              <TechIcons.JavascriptIcon />
            </TechCard>
            <TechCard shadowColor="blue">
              <TechIcons.TypescriptIcon />
            </TechCard>
            <TechCard shadowColor="orange">
              <TechIcons.HtmlIcon />
            </TechCard>
            <TechCard shadowColor="blue">
              <TechIcons.CssIcon />
            </TechCard>
            <TechCard shadowColor="blue">
              <TechIcons.ReactIcon />
            </TechCard>
            <TechCard shadowColor="green">
              <TechIcons.NodeIcon />
            </TechCard>
            <TechCard shadowColor="red">
              <TechIcons.NestIcon />
            </TechCard>
            <TechCard shadowColor="blue">
              <TechIcons.PostgresIcon />
            </TechCard>
            <TechCard shadowColor="green">
              <TechIcons.MongoIcon />
            </TechCard>
            <TechCard shadowColor="orange">
              <TechIcons.GitIcon />
            </TechCard>
          </TechIconsContainer>
        </MyStacksContainer>
      </SecondSectionContainer>
    </>
  );
};

export default LandingPage;

import { useRef, useState } from "react";
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
  ProjectsContainer,
  IconContainer,
  BlurBgBall,
} from "./styles";

import profileImage from "../../assets/images/profile.jpg";

import * as TechIcons from "../../assets/icons";
import Footer from "../../components/Footer";
import TechCard from "../../components/TechCard";

const LandingPage = () => {
  return (
    <>
      <Header />
      <BlurBgBall top="-15%" left="-2%" />
      <MainContainer>
        <SideColumn>
          <VerticalLine small />
          <IconContainer href="https://github.com/IvanBorba" target="_blank">
            <VscGithub size={40} color="#d2d2d2" />
          </IconContainer>
          <IconContainer
            href="https://www.linkedin.com/in/ivan-borba/"
            target="_blank"
          >
            <IoLogoLinkedin size={40} color="#d2d2d2" />
          </IconContainer>
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
          <IconContainer href="mailto: mrborbaivan@gmail.com">
            <IoMailOutline size={40} color="#d2d2d2" />
          </IconContainer>
          <IconContainer href="https://wa.me/5547991114205" target="_blank">
            <IoLogoWhatsapp size={40} color="#d2d2d2" />
          </IconContainer>
          <VerticalLine small />
        </SideColumn>
        <ScrollCta>
          Scroll down
          <br />
          <IoCaretDown size={20} />
        </ScrollCta>
      </MainContainer>
      <SecondSectionContainer id="about">
        <AboutMeContainer>
          <StyledTitle>
            About <strong>me</strong>
            <span>.</span>
          </StyledTitle>
          <HorizontalLine />
          <p>
            I'm Ivan Gabriel de Borba, a {new Date().getFullYear() - 1996} year
            old Brazilian Web Developer passionated about technology,
            mathematics, nature, patterns, music, games and much more.
            <br />
            <br />
            Follow me on{" "}
            <a
              className="spotify-link"
              href="https://open.spotify.com/user/mr_borba?si=d9ef676df3bf4c0d"
              target="_blank"
            >
              Spotify
            </a>{" "}
            to see what I'm listening, or add me on{" "}
            <a
              className="steam-link"
              href="https://steamcommunity.com/id/Ivanplays666/"
              target="_blank"
            >
              Steam
            </a>{" "}
            so we can enjoy some games together.
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
            <TechCard color="yellow">
              <TechIcons.JavascriptIcon />
            </TechCard>
            <TechCard color="blue">
              <TechIcons.TypescriptIcon />
            </TechCard>
            <TechCard color="orange">
              <TechIcons.HtmlIcon />
            </TechCard>
            <TechCard color="blue">
              <TechIcons.CssIcon />
            </TechCard>
            <TechCard color="blue">
              <TechIcons.ReactIcon />
            </TechCard>
            <TechCard color="light-green">
              <TechIcons.NodeIcon />
            </TechCard>
            <TechCard color="red">
              <TechIcons.NestIcon />
            </TechCard>
            <TechCard color="blue">
              <TechIcons.PostgresIcon />
            </TechCard>
            <TechCard color="green">
              <TechIcons.MongoIcon />
            </TechCard>
            <TechCard color="orange">
              <TechIcons.GitIcon />
            </TechCard>
          </TechIconsContainer>
        </MyStacksContainer>
        <ProjectsContainer id="projects">
          <StyledTitle>
            <span>&lt;</span>
            Projects
            <span>/&gt;</span>
          </StyledTitle>
          <HorizontalLine position="center" />
          <p>Some of my favourites (and best) projects</p>
        </ProjectsContainer>
      </SecondSectionContainer>
      <Footer />
    </>
  );
};

export default LandingPage;

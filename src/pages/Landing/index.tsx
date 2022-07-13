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
} from "./styles";

import profileImage from "../../assets/images/profile.jpg";

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
            <h1>
              Hey, I'm <strong>Ivan</strong>
            </h1>
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
          Scroll down <br /> <IoCaretDown size={20} />
        </ScrollCta>
      </MainContainer>
    </>
  );
};

export default LandingPage;

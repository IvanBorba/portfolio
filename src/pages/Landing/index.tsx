import { VscGithub } from "react-icons/vsc";
import { IoLogoLinkedin, IoMailOutline, IoLogoWhatsapp } from "react-icons/io5";

import Header from "../../components/Header";
import {
  MainContainer,
  InfoContainer,
  SideColumn,
  VerticalLine,
} from "./styles";

interface IconsStyle {
  color: string;
  cursor: string;
}

const LandingPage = () => {
  const iconsStyle: IconsStyle = {
    color: "#d2d2d2",
    cursor: "pointer",
  };

  return (
    <>
      <Header />
      <MainContainer>
        <SideColumn>
          <VerticalLine small />
          <VscGithub style={iconsStyle} size={40} />
          <IoLogoLinkedin style={iconsStyle} size={40} />
          <VerticalLine />
        </SideColumn>
        <InfoContainer></InfoContainer>
        <SideColumn>
          <VerticalLine />
          <IoMailOutline style={iconsStyle} size={40} />
          <IoLogoWhatsapp style={iconsStyle} size={40} />
          <VerticalLine small />
        </SideColumn>
      </MainContainer>
    </>
  );
};

export default LandingPage;

import { VscGithub } from "react-icons/vsc";
import { IoLogoLinkedin, IoMailOutline, IoLogoWhatsapp } from "react-icons/io5";

import Header from "../../components/Header";
import {
  MainContainer,
  InfoContainer,
  SideColumn,
  VerticalLine,
} from "./styles";

const LandingPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <SideColumn>
          <VerticalLine style={{ margin: 0 }} />
          <VscGithub />
          <IoLogoLinkedin />
          <VerticalLine small />
        </SideColumn>
        <InfoContainer></InfoContainer>
        <SideColumn>
          <VerticalLine small />
          <IoMailOutline />
          <IoLogoWhatsapp />
          <VerticalLine style={{ margin: 0 }} />
        </SideColumn>
      </MainContainer>
    </>
  );
};

export default LandingPage;

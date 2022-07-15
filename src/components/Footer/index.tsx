import { FooterContainer, IconContainer, InfoContainer } from "./styles";
import { VscGithub } from "react-icons/vsc";
import { IoLogoLinkedin, IoMailOutline, IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <FooterContainer>
      <hr />
      <InfoContainer>
        <p>© 2022 Ivan Borba</p>
        <div>
          <IconContainer href="https://github.com/IvanBorba" target="_blank">
            <VscGithub size={40} color="#d2d2d2" />
          </IconContainer>
          <IconContainer
            href="https://www.linkedin.com/in/ivan-borba/"
            target="_blank"
          >
            <IoLogoLinkedin size={40} color="#d2d2d2" />
          </IconContainer>
          <IconContainer href="mailto: mrborbaivan@gmail.com">
            <IoMailOutline size={40} color="#d2d2d2" />
          </IconContainer>
          <IconContainer href="https://wa.me/5547991114205" target="_blank">
            <IoLogoWhatsapp size={40} color="#d2d2d2" />
          </IconContainer>
        </div>
      </InfoContainer>
    </FooterContainer>
  );
};

export default Footer;

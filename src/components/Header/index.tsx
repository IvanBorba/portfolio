import { StyledContactLink, StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Ivan Borba</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#">Resume</a>
        <StyledContactLink>Contact me!</StyledContactLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;

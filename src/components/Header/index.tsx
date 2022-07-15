import { StyledContactLink, StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Ivan Borba</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="Ivan-BorbaCV.pdf" download>
          Resume
        </a>
        <a href="https://linktr.ee/ivanborba" target="_blank">
          <StyledContactLink>Contact me!</StyledContactLink>
        </a>
      </nav>
    </StyledHeader>
  );
};

export default Header;

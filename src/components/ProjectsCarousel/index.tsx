import { VscGithub } from "react-icons/vsc";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useState } from "react";
import { IconContainer } from "../../pages/Landing/styles";
import { CarouselContainer } from "./styles";

const ProjectsCarousel = () => {
  const [globalState, setGlobalState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  const projects = [
    {
      name: "Drops Pay",
      stack: "Full-stack",
      github: "https://github.com/IvanBorba/drops-pay",
      key: Math.random(),
      content: <img src="https://i.imgur.com/66UXHcX.png" alt="" />,
    },
    {
      name: "API Hamburgueria",
      stack: "Back-end",
      github: "https://github.com/IvanBorba/blue-hamburgueria",
      key: Math.random(),
      content: <img src="https://i.imgur.com/3Wzd7QY.png" alt="" />,
    },
    {
      name: "Deixa que eu faço",
      stack: "Front-end",
      github: "https://github.com/IvanBorba/deixa-que-eu-faco",
      key: Math.random(),
      content: <img src="https://i.imgur.com/zLaniX3.png" alt="" />,
    },
    {
      name: "Portfolio",
      stack: "Full-stack",
      github: "https://github.com/IvanBorba/portfolio",
      key: Math.random(),
      content: <img src="https://i.imgur.com/WgBvo6s.png" alt="" />,
    },
    {
      name: "KenzieHub",
      stack: "Front-end",
      github: "https://github.com/IvanBorba/kenziehub",
      key: Math.random(),
      content: <img src="https://i.imgur.com/vvYZzc7.png" alt="" />,
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => setGlobalState({ ...globalState, goToSlide: index }),
    };
  });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer>
      <div>
        <p>{projects[globalState.goToSlide].name}</p>
      </div>
      <Carousel
        slides={projects}
        goToSlide={globalState.goToSlide}
        offsetRadius={globalState.offsetRadius}
        showNavigation={globalState.showNavigation}
        animationConfig={globalState.config}
        ref={(slider) => (slider = slider)}
        {...settings}
      ></Carousel>
      <div>
        <IconContainer
          href={projects[globalState.goToSlide].github}
          target="_blank"
        >
          <VscGithub size={40} color="#d2d2d2" />
        </IconContainer>
        <p>{projects[globalState.goToSlide].stack}</p>
      </div>
    </CarouselContainer>
  );
};

export default ProjectsCarousel;

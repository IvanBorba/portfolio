import { ReactElement, useRef, useState } from "react";
import { StyledCard } from "./styles";

interface TechCardProps {
  children: ReactElement<any, any>;
  color: "blue" | "orange" | "yellow" | "green" | "red" | "light-green";
}

const TechCard = ({ children, color }: TechCardProps) => {
  const card = useRef<HTMLDivElement>(null);

  const [bounds, setBounds] = useState(() => {
    return card.current && card.current.getBoundingClientRect();
  });

  const animateCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setBounds(card.current && card.current.getBoundingClientRect());

    if (bounds) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      if (card.current) {
        card.current.style.transition = `0.2s`;
        card.current.style.transform = `
          scale3d(1.20, 1.20, 1.20)
          rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
            0,
            ${Math.log(distance) * 2}deg
          )
        `;

        card.current.style.backgroundImage = `
          radial-gradient(
            circle at
            ${center.x * 2 + bounds.width / 4}px
            ${center.y * 2 + bounds.height / 4}px,
            #ffffff55,
            #0000000f
          )
        `;
      }
    }
  };

  return (
    <StyledCard
      shadowColor={color}
      ref={card}
      onMouseMove={animateCard}
      onMouseLeave={() => {
        if (card.current) {
          card.current.style.transform = `scale3d(1, 1, 1)`;
        }
      }}
    >
      {children}
    </StyledCard>
  );
};

export default TechCard;

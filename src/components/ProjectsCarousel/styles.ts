import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 64vw;
  height: 32vh;
  margin: 6vh 0;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: #d2d2d2;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: lighter;
      line-height: 140%;
      margin-bottom: 2vh;
    }

    a {
      margin-top: 2vh;
    }
  }
`;

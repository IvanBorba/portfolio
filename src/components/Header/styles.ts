import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #111111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8vh;
  box-sizing: border-box;

  h1 {
    color: #d2d2d2;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 400;
    user-select: none;
  }

  a {
    text-decoration: none;
    color: #d2d2d2;
    margin-right: 2.8rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const StyledContactLink = styled.button`
  color: #146fc2;
  background-color: #111111;
  border: 1px solid #146fc2;
  border-radius: 10px;
  padding: 0.5rem 1.3rem;
  cursor: pointer;

  :hover {
    color: #111111;
    background-color: #146fc2;
    transition: ease 0.3s;
  }
`;

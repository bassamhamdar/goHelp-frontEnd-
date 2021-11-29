import styled from "styled-components";
export const Menu = styled.div`
  width: ${(props) => props.width};
  background-color: #3d9970;
  padding-left: 1rem;
  min-height: 100vh;
  overflow: hidden;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
`;
export const Burger = styled.div`
  padding-top: 1rem;
  cursor: pointer;
`;
export const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 15px;
  padding-left: 2rem;
  display: ${(props) => props.display};
`;

export const Line = styled.div`
  width: 35px;
  height: 4px;
  background-color: white;
  margin: 6px 0;
`;

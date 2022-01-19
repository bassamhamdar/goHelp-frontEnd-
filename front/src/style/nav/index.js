import styled from "styled-components";
import image from "../../image/Go_Help.png";

export const NavMenu = styled.div`
  height: 60px;
  width: 100%;
  background: #00857c;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-start;
`;
export const NavLogo = styled.div`
  width: 33.33%;
`;
export const NavSection = styled.div`
  width: 33.33%;
  @media (max-width: 700px) {
    display: none !important;
  }
`;

export const NavSpan = styled.p`
  cursor: pointer;
  color: white;
  font-family: system-ui;
  margin-top: 15px;
`;
export const Logo = styled.div`
  background-image: url(${image});
  height: 60px;
  width: 104px;
  background-size: 100% 100%;
  cursor: pointer;
  margin-left: 10%;
`;
export const Burger = styled.div`
  cursor: pointer;
  width: 43px;
  position: absolute;
  top: 10;
  right: 0;
  @media (min-width: 700px) {
    display: none !important;
  }
`;
export const Line = styled.div`
  width: 35px;
  height: 4px;
  background-color: white;
  margin: 6px 0;
`;

import styled from "styled-components";
import image from "../../image/Go_Help.png";

export const NavMenu = styled.div`
  height: 60px;
  width: 100%;
  background: #00857c;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s ease;
`;

export const NavSection = styled.div`
  display: ${(props) => props.display};
  transition: all 0.2s ease;
  width: 38rem;
  justify-content: space-around;
  @media (max-width: 730px) {
    display: ${(props) =>
      props.display === "inline" ? "inline" : "none!important"};
    position: absolute;
    top: 0;
    right: 0;
    background: #00857c;
    width: 10rem;
  }
`;

export const NavSpan = styled.p`
  cursor: pointer;
  color: white;
  font-family: system-ui;
  margin-top: 15px;
  transition: all 0.2s ease;
`;
export const Logo = styled.div`
  background-image: url(${image});
  height: 60px;
  width: 104px;
  background-size: 100% 100%;
  cursor: pointer;
  margin-left: 2rem;
`;
export const Burger = styled.div`
  cursor: pointer;
  padding: 0.7rem;
  margin-right: 1.2rem;
  position: absolute;
  right: 0;
  @media (min-width: 731px) {
    display: none !important;
  }
`;
export const Line = styled.div`
  width: 35px;
  height: 4px;
  background-color: white;
  margin: 6px 0;
`;

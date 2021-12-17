import styled from "styled-components";
import image from "../../image/Go_Help.png";

export const NavMenu = styled.div`
  height: 60px;
  width: 100%;
  background: #00857c;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
`;
export const NavSection = styled.div`
  width: 33.33%;
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
`;

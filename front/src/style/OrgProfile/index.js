import styled from "styled-components";
import Image from "../../image/org.jpg";
export const OrgProfile = styled.div`
  margin-top: 3rem;
  background: -webkit-linear-gradient(left, #25c481, #00857c);
  background: linear-gradient(to right, #25c481, #00857c);
  color: #fff;
`;

export const Photo = styled.div`
  background-image: url(${Image});
  height: 250px;
  background-size: 100% 100%;
`;
export const Flex = styled.div`
  display: flex;
`;
export const Left = styled.div`
  width: 70%;
  height: 100%;
  padding: 1rem;
`;
export const Right = styled.div`
  width: 30%;
`;
export const Intro = styled.div`
  height: 150px;
`;
export const Half = styled.div`
  width: 50%;
`;
export const P = styled.p``;
export const H1 = styled.h1`
  transform: uppercase;
  padding-top: 0.5rem;
  margin-left: 1rem;
`;

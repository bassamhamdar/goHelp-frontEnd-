import styled from "styled-components";
import Image4 from "../../image/homepage4.jpg";

export const HeaderImage = styled.div`
  background-image: url(${Image4});
  background-size: 100% 100%;
  margin: 3.1rem 2rem 0 2rem;
`;
export const ImageHeader = styled.h1`
  font-size: 6vw;
  width: 50%;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  color: white;
  padding: 1rem;
`;
export const ImageParg = styled.p`
  font-size: 4vw;
  width: 50%;
  margin: auto;
  margin-top: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: white;
`;
export const H1 = styled.h1`
  color: black;
  font-size: xxx-large;
  margin: auto;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 6px solid black;
  background-image: url(${(props) => props.img})
}
  background-size: 220px 220px;
  background-position: center;
`;
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const FlexItem = styled.div`
  margin: 2rem;
`;
export const H3 = styled.h3`
  color: black;
  font-size: large;
  margin: auto;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
export const Organization = styled.div`
  color: hsl(240, 75%, 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 535px) {
    flex-direction: column;
`;
export const Arrow = styled.div`
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 535px) {
    transform: rotate(90deg);
  }
`;
export const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #002129;
  width: 150px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;
`;
export const RegisterH1 = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;
export const FooterSection = styled.div`
  background-color: #00857c;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
`;
export const Section = styled.section`
  text-align: center;
  width: 30%;
  min-width: 210px;
  margin: 1rem;
`;
export const FooterH3 = styled.h3`
  color: white;
`;
export const P = styled.p`
  text-align: center;
  color: white;
  margin-top: 2rem;
  font-size: 1rem;
`;

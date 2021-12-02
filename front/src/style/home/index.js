import styled from "styled-components";
import Image2 from "../../image/homepage.jpg";

/* ... */

export const HeaderImage = styled.div`
  background-image: url(${Image2});
  background-position: center;
  height: 280px;
  margin: 0 2rem 0 2rem;
`;

export const H1 = styled.h1`
  color: hsl(240, 75%, 10%);
  font-size: xxx-large;
  width: 25%;
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
  justify-content: center;
`;
export const FlexItem = styled.div`
  margin: 2rem;
`;
export const H3 = styled.h3`
  color: hsl(240, 75%, 10%);
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
`;

export const RegisterButton = styled.button`
  background: linear-gradient(#073, #0fa);
  width: 150px;
  height: 60px;
  border: none;
  color: white;
  padding: 15px;
  display: inline-block;
  font-size: 16px;
  margin-top: 1rem;
  margin-left: 2rem;
  border-radius: 4px;
  cursor: pointer;
`;
export const FooterH1 = styled.h1`
  color: hsl(240, 75%, 10%);
  font-size: xxx-large;
  margin-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
export const FooterSection = styled.div`
  background-color: #002129;
  height: 300px;
  display: flex;
  justify-content: ;
`;
export const Section = styled.section``;
export const FooterH3 = styled.h3`
  margin-top: 1rem;
  text-alin: center;
  color: white;
`;
export const P = styled.p`
  color: white;
  margin-top: 2rem;
`;

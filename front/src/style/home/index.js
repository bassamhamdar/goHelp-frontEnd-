import styled from "styled-components";
import Image4 from "../../image/homepage4.jpg";

/* ... */

export const HeaderImage = styled.div`
  background-image: url(${Image4});
  background-size: 100% 100%;
  object-fit: cover;
  height: 400px;
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
  background: #002129;
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
export const RegisterH1 = styled.h1`
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
  justify-content: space-around;
`;
export const Section = styled.section`
  text-align: center;
`;
export const FooterH3 = styled.h3`
  margin-top: 1rem;
  color: white;
`;
export const P = styled.p`
  color: white;
  margin-top: 2rem;
`;

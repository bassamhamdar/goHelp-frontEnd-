import React from "react";
import {
  Circle,
  Flex,
  FlexItem,
  FooterH3,
  FooterSection,
  H1,
  H3,
  HeaderImage,
  ImageHeader,
  ImageParg,
  Organization,
  P,
  RegisterButton,
  RegisterH1,
  Section,
} from "../../style/home";
import Profile from "../../image/profile.webp";
import Request from "../../image/help.webp";
import Ngo from "../../image/ngo.jpg";
import { AboutUs } from "./AboutUs";
import { useHistory } from "react-router-dom";
import { Nav } from "../../components/Nav";

export const Home = () => {
  const navigate = useHistory();
  const handleClick = () => navigate.push("/org/register");
  return (
    <>
      <Nav />
      <HeaderImage style={{ marginTop: "60px" }}>
        <ImageHeader>Because they need your help</ImageHeader>
        <ImageParg>do not let them down</ImageParg>
      </HeaderImage>
      <AboutUs />
      <H1>Here's How it Works</H1>
      <Flex>
        <FlexItem>
          <Circle img={Profile}></Circle>
          <H3>Create Profile</H3>
        </FlexItem>
        <FlexItem>
          <Circle img={Ngo}></Circle>
          <H3>Select Organization</H3>
        </FlexItem>
        <FlexItem>
          <Circle img={Request}></Circle>
          <H3>Send Help/Donate </H3>
        </FlexItem>
      </Flex>
      <Organization>
        <RegisterH1
          onClick={() => navigate.push("/org/login")}
          style={{ cursor: "pointer" }}
        >
          For Organizations {"->"}{" "}
        </RegisterH1>
        <RegisterButton onClick={() => handleClick()}>
          Register Here
        </RegisterButton>
      </Organization>
      <FooterSection>
        <Section>
          <FooterH3>Learn More</FooterH3>
          <P>How GoHelp Works</P>
          <P>Success Stories</P>
          <P>Supported Countries</P>
          <P>Pricing</P>
        </Section>
        <Section>
          <FooterH3>Use Cases</FooterH3>
          <P>Medical</P>
          <P>Food</P>
          <P>Clothes</P>
          <P>Corona Virus</P>
        </Section>
        <Section>
          <FooterH3>Resources</FooterH3>
          <P>Careers</P>
          <P>Help Center</P>
          <P>Press Center</P>
          <P>Media</P>
        </Section>
      </FooterSection>
    </>
  );
};

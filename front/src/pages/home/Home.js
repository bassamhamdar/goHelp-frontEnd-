import React from "react";
import {
  Circle,
  Flex,
  FlexItem,
  FooterH3,
  FooterSection,
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
import Profile from "../../image/profile-icon.png";
import Ngo from "../../image/ngo.jpg";
import Request from "../../image/request.png";
import { AboutUs } from "./AboutUs";

export const Home = () => {
  return (
    <>
      <HeaderImage>
        <ImageHeader>Becasue they need your help</ImageHeader>
        <ImageParg>do not let them down</ImageParg>
      </HeaderImage>
      <AboutUs />
      <Flex>
        <FlexItem>
          <Circle img={Profile}></Circle>
          <H3>Create profile</H3>
        </FlexItem>
        <FlexItem>
          <Circle img={Ngo}></Circle>
          <H3>Select organization</H3>
        </FlexItem>
        <FlexItem>
          <Circle img={Request}></Circle>
          <H3>Send help/donate request</H3>
        </FlexItem>
      </Flex>
      <Organization>
        <RegisterH1>For organizations {"->"} </RegisterH1>
        <RegisterButton>Register here</RegisterButton>
      </Organization>
      <FooterSection>
        <Section>
          <FooterH3>Learn More</FooterH3>
          <P>How goHelp works</P>
          <P>Success stories</P>
          <P>Supported countries</P>
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

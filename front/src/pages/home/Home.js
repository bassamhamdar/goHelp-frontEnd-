import React from "react";
import {
  Circle,
  Flex,
  FlexItem,
  Footer,
  FooterH1,
  FooterH3,
  FooterSection,
  H1,
  H3,
  HeaderImage,
  Organization,
  P,
  RegisterButton,
  Section,
} from "../../style/home";
import Profile from "../../image/profile-icon.png";
import Ngo from "../../image/ngo.jpg";
import Request from "../../image/request.png";

export const Home = () => {
  return (
    <>
      <HeaderImage></HeaderImage>
      <H1>Here's how it works</H1>
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
        <FooterH1>For organizations {"->"} </FooterH1>
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

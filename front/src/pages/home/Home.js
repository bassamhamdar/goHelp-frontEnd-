import React from "react";
import {
  Circle,
  Flex,
  FlexItem,
  Footer,
  FooterH1,
  H1,
  H3,
  HeaderImage,
  RegisterButton,
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
      <Footer>
        <FooterH1>For organizations {"->"} </FooterH1>
        <RegisterButton>Register here</RegisterButton>
      </Footer>
    </>
  );
};

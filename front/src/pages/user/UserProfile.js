import React from "react";
import {
  Data,
  Info,
  InfoData,
  H3,
  H4,
  Left,
  Right,
  Wrapper,
  P,
} from "../../style/profile";
export const UserProfile = () => {
  return (
    <Wrapper>
      <Left>
        <H4>Alex William</H4>
        <P>UI Developer</P>
      </Left>
      <Right>
        <Info>
          <H3>Information</H3>
          <InfoData>
            <Data>
              <H4>Email</H4>
              <P>alex@gmail.com</P>
            </Data>
            <Data>
              <H4>Phone</H4>
              <P>0001-213-998761</P>
            </Data>
          </InfoData>
          <InfoData>
            <Data>
              <H4>Email</H4>
              <P>alex@gmail.com</P>
            </Data>
            <Data>
              <H4>Phone</H4>
              <P>0001-213-998761</P>
            </Data>
          </InfoData>
        </Info>
      </Right>
    </Wrapper>
  );
};

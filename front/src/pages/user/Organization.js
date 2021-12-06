import React from "react";
import {
  OrgProfile,
  Photo,
  Right,
  Left,
  Flex,
  Intro,
  Half,
  H1,
} from "../../style/OrgProfile";

export const Organization = () => {
  return (
    <OrgProfile>
      <Photo></Photo>
      <H1>ORG NAME</H1>
      <Flex>
        <Left>
          <Intro>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
            voluptatem non. Provident fuga tempora quo ratione obcaecati
            molestiae vel aut harum veniam minima mollitia minus, omnis ex,
            facere laborum quae? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Rem, voluptatem non. Provident fuga tempora quo
            ratione obcaecati molestiae vel aut harum veniam minima mollitia
            minus, omnis ex, facere laborum quae?
          </Intro>
          <Flex>
            <Half>
              <H1>Addresses</H1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              voluptatem non. Provident fuga tempora quo ratione obcaecati
              molestiae vel aut harum veniam minima mollitia minus, omnis ex,
              facere laborum quae?
            </Half>
            <Half>
              <H1>Achievments</H1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              voluptatem non. Provident fuga tempora quo ratione obcaecati
              molestiae vel aut harum veniam minima mollitia minus, omnis ex,
              facere laborum quae?
            </Half>
          </Flex>
        </Left>
        <Right>
          <H1>Mission</H1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
          voluptatem non. Provident fuga tempora quo ratione obcaecati molestiae
          vel aut harum veniam minima mollitia minus, omnis ex, facere laborum
          quae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
          voluptatem non. Provident fuga tempora quo ratione obcaecati molestiae
          vel aut harum veniam minima mollitia minus, omnis ex, facere laborum
          quae?
        </Right>
      </Flex>
    </OrgProfile>
  );
};

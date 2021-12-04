import React from "react";
import {
  AboutCol,
  AboutRow,
  Details,
  H3,
  Icon,
  P,
  ReadMore,
} from "../../style/aboutUs";

export const AboutUs = () => {
  return (
    <AboutRow>
      <AboutCol>
        <Icon></Icon>
        <H3>our mission</H3>
        <Details>
          <P>
            Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus
            ut eta esami vera dolor sit amet consect
          </P>
        </Details>
        <ReadMore href="#">Read more</ReadMore>
      </AboutCol>{" "}
      <AboutCol>
        <Icon></Icon>
        <H3>our mission</H3>
        <Details>
          <P>
            Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus
            ut eta esami vera dolor sit amet consect
          </P>
        </Details>
        <ReadMore href="#">Read more</ReadMore>
      </AboutCol>{" "}
      <AboutCol>
        <Icon></Icon>
        <H3>our mission</H3>
        <Details>
          <P>
            Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus
            ut eta esami vera dolor sit amet consect
          </P>
        </Details>
        <ReadMore href="#">Read more</ReadMore>
      </AboutCol>
    </AboutRow>
  );
};

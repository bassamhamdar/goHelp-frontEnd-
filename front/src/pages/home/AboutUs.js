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
import ourmission from "../../image/icons/our-mission-icon.png";
import help from "../../image/icons/help-icon.png";
import programs from "../../image/icons/programs-icon.png";
export const AboutUs = () => {
  return (
    <AboutRow>
      <AboutCol>
        <Icon src={ourmission} />
        <H3>our mission</H3>
        <Details>
          <P>
            Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus
            ut eta esami vera dolor sit amet consect
          </P>
        </Details>
        <ReadMore href="#">Read more</ReadMore>
      </AboutCol>
      <AboutCol>
        <Icon src={help} />
        <H3>our mission</H3>
        <Details>
          <P>
            Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus
            ut eta esami vera dolor sit amet consect
          </P>
        </Details>
        <ReadMore href="#">Read more</ReadMore>
      </AboutCol>
      <AboutCol>
        <Icon src={programs} />
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

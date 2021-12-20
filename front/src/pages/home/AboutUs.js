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
        <H3>Our Mission</H3>
        <Details>
          <P>
            Connect people with verified organizations to communicate, send
            donations and help requests.
          </P>
        </Details>
        <ReadMore href="#">Read more</ReadMore>
      </AboutCol>
      <AboutCol>
        <Icon src={help} />
        <H3 style={{ paddingTop: "10px" }}>Help & Support</H3>
        <Details>
          <P>
            We are Supported by United Nations, Ministry of Health, and Ministry
            of Social Affairs
          </P>
        </Details>
        <ReadMore href="#">Read more</ReadMore>
      </AboutCol>
      <AboutCol>
        <Icon src={programs} />
        <H3>Programs</H3>
        <Details>
          <P>
            Our organzations mainly provide medical, food , and clothing
            support.
          </P>
        </Details>
        <ReadMore href="#">Read more</ReadMore>
      </AboutCol>
    </AboutRow>
  );
};

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Message } from "../../components/Message";
import { FetchOneOrg } from "../../redux/actions/user/userActions";
import { Button } from "../../style/login";
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
  const param = useParams();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const org = useSelector((state) => state.org);
  useEffect(() => dispatch(FetchOneOrg(param.id)));
  return (
    <OrgProfile>
      {console.log("org profile", org)}
      <Photo></Photo>
      <Button onClick={() => setVisible(true)} style={{ border: "none" }}>
        Send request
      </Button>
      {visible ? <Message setVisible={setVisible} org_id={param.id} /> : null}
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

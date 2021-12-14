import React from "react";
import { SendReq } from "../redux/actions/user/userActions";
import { Button, Input, LoginForm } from "../style/login";

export const Message = ({ setVisible }) => {
  SendReq();
  return (
    <LoginForm style={{ backgroundColor: "white" }}>
      <Button onClick={() => setVisible(false)}>x</Button>
      <Input placeholder="title" />
      <Input placeholder="description" />
      <Input placeholder="image" type="file" />
      <Button>Send</Button>
    </LoginForm>
  );
};

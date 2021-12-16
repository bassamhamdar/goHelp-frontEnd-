import React from "react";
import { Form, Input, Button, TextArea, Error } from "../style/message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
export const Donate = ({ setVisible, org_id }) => {
  const schema = yup.object().shape({
    message: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    const message = {
      user_id: data.user_id,
      org_id: data.org_id,
      message: data.message,
      image: data.image[0].name,
    };
    console.log("donation", message);
  };
  return (
    <Form
      style={{ backgroundColor: "white" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Error>{errors.message?.message}</Error>

      <Button
        onClick={() => setVisible(false)}
        style={{ float: "right", marginRight: "5%" }}
      >
        x
      </Button>

      <Input type="hidden" value="1" {...register("user_id")} />
      <Input type="hidden" value="1" {...register("org_id")} />

      <TextArea placeholder=" Message ..." {...register("message")} />
      <Input placeholder="image" type="file" {...register("image")} />
      <Button style={{ width: "90%" }} type="submit">
        Send
      </Button>
    </Form>
  );
};

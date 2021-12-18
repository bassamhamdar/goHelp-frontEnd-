import React from "react";
import { Form, Input, Button, TextArea, Error } from "../style/message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { DonateOnPost } from "../redux/actions/user/userActions";
export const Donate = ({ setVisible, post_id }) => {
  const schema = yup.object().shape({
    message: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("post_id", data.post_id);
    formData.append("user_id", data.user_id);
    formData.append("message", data.message);
    DonateOnPost(formData);
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
      <Input type="hidden" value={post_id} {...register("post_id")} />
      <TextArea placeholder=" Message ..." {...register("message")} />
      <Input placeholder="image" type="file" {...register("image")} />
      <Button style={{ width: "90%" }} type="submit">
        Send
      </Button>
    </Form>
  );
};

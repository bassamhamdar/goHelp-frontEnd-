import React from "react";
import { SendReq } from "../redux/actions/user/userActions";
import { Form, Input, Button, TextArea, Error, Select } from "../style/message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "react-toastify/dist/ReactToastify.css";
export const Message = ({ setVisible, org_id }) => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    isDonation: yup.string().required(),
    image: yup.mixed().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log("data", data);
    const message = {
      user_id: data.user_id,
      org_id: data.org_id,
      isDonation: data.isDonation,
      title: data.title,
      description: data.description,
      image: data.image[0].name,
    };
    SendReq(message);
  };

  return (
    <Form
      style={{ backgroundColor: "white" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {console.log("org id", org_id)}
      <Error>{errors.title?.message}</Error>
      <Error>{errors.description?.message}</Error>
      <Error>{errors.image?.message}</Error>
      <Button
        onClick={() => setVisible(false)}
        style={{ float: "right", marginRight: "5%" }}
      >
        x
      </Button>
      <Select {...register("isDonation")} style={{ border: "none" }}>
        <option value="">Select...</option>
        <option value="0">help request</option>
        <option value="1">donation request</option>
      </Select>
      <Input type="hidden" value="1" {...register("user_id")} />
      <Input type="hidden" value={org_id} {...register("org_id")} />

      <Input placeholder="title" {...register("title")} />
      <TextArea placeholder="description" {...register("description")} />
      <Input placeholder="image" type="file" {...register("image")} />
      <Button style={{ width: "90%" }} type="submit">
        Send
      </Button>
    </Form>
  );
};

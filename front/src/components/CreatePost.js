import React from "react";
import {
  CreateButton,
  CreateForm,
  CreateInput,
  CreateText,
} from "../style/createPost";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export const CreatePost = () => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    image: yup.mixed().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("org_id");
    formData.append("title");
    formData.append("description");
  };
  return (
    <CreateForm onSubmit={handleSubmit(onSubmit)}>
      <CreateInput type="hidden" value={1} {...register("org_id")} />
      <CreateInput placeholder="Post title ..." {...register("title")} />
      <CreateText
        placeholder="Write what you need ..."
        {...register("description")}
      />
      <CreateInput placeholder="image" type="file" {...register("image")} />
      <CreateButton type="submit" value="create" />
    </CreateForm>
  );
};

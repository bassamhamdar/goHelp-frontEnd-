import React from "react";
import {
  CreateButton,
  CreateForm,
  CreateInput,
  CreateText,
  Error,
} from "../style/createPost";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createPost } from "../redux/actions/org/orgActions";
export const CreatePost = ({ setVisible }) => {
  let org_id = localStorage.getItem("org_id");
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
    formData.append("org_id", data.org_id);
    formData.append("title", data.title);
    formData.append("description", data.description);
    createPost(formData);
  };
  return (
    <>
      <CreateForm onSubmit={handleSubmit(onSubmit)}>
        <CreateInput type="hidden" value={org_id} {...register("org_id")} />
        <CreateInput placeholder="Post Title ..." {...register("title")} />
        <Error>{errors.title?.message}</Error>
        <CreateText
          placeholder="Write what you need ..."
          {...register("description")}
        />
        <Error>{errors.description?.message}</Error>

        <CreateInput placeholder="image" type="file" {...register("image")} />
        <Error>{errors.image?.message}</Error>

        <CreateButton type="submit" value="Create" />
        <CreateButton
          value="Cancle"
          onClick={() => setVisible(false)}
          style={{ width: "3rem", backgroundColor: "tomato" }}
        />
      </CreateForm>
    </>
  );
};

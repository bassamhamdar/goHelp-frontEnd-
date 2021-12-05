import React from "react";
import {
  LoginForm,
  Input,
  Title,
  Link,
  LoginInput,
  Error,
} from "../style/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";

export default function Login() {
  const schema = yup.object().shape({
    username: yup.string().min(3).required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log("ll", data);
    reset();
  };
  const LoggedUser = useSelector((state) => state);
  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      {console.log(LoggedUser)}
      <Title>Welcome Admin</Title>
      <Input placeholder="Username" {...register("username")} />
      <Error>{errors.username?.message}</Error>
      <Input placeholder="Password" {...register("password")} type="password" />
      <Error>{errors.password?.message}</Error>
      <LoginInput login type="submit" value="login" />
      <Link>forgot your password ?</Link>
    </LoginForm>
  );
}

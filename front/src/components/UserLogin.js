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

export default function Login() {
  const schema = yup.object().shape({
    email: yup.string().min(3).required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Welcome User</Title>
      <Input placeholder="Email" {...register("email")} />
      <Error>{errors.username?.message}</Error>
      <Input placeholder="Password" {...register("password")} type="password" />
      <Error>{errors.password?.message}</Error>
      <LoginInput login type="submit" value="login" />
      <Link>forgot your password ?</Link>
    </LoginForm>
  );
}

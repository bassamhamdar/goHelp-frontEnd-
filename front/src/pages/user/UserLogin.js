import React from "react";
import {
  LoginForm,
  Input,
  Title,
  Link,
  LoginInput,
  Error,
} from "../../style/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../../redux/actions/user/userActions";
import { useDispatch, useSelector } from "react-redux";

export default function UserLogin() {
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
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(loginUser(data));
    reset();
  };
  const user = useSelector((state) => state);
  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      {console.log("userrrr", user)}
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

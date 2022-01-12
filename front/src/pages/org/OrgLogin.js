import React from "react";
import {
  Error,
  Input,
  Link,
  LoginForm,
  LoginInput,
  Title,
} from "../../style/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { loginOrg } from "../../redux/actions/org/orgActions";
import { useDispatch } from "react-redux";
export const OrgLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().min(3).required(),
    password: yup.string().required(),
  });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    await dispatch(loginOrg(data));
    history.push("/org/profile");
    reset();
  };
  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Welcome Organization</Title>
      <Input placeholder="Email" {...register("email")} />
      <Error>{errors.username?.message}</Error>
      <Input placeholder="Password" {...register("password")} type="password" />
      <Error>{errors.password?.message}</Error>
      <LoginInput login type="submit" value="login" />
      <Link>forgot your password ?</Link>
    </LoginForm>
  );
};

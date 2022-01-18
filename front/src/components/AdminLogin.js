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
import { useDispatch } from "react-redux";
import { AdminLogin } from "../redux/actions/admin/adminActions";
import { useHistory } from "react-router-dom";

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
  const Dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = async (data) => {
    console.log(data);
    await Dispatch(AdminLogin(data));
    history.push("/dashboard");
    reset();
  };
  const LoggedAdmin = useSelector((state) => state);
  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      {console.log(LoggedAdmin)}
      <Title>Welcome Admin</Title>
      <Input placeholder="Email" {...register("email")} />
      <Error>{errors.username?.message}</Error>
      <Input placeholder="Password" {...register("password")} type="password" />
      <Error>{errors.password?.message}</Error>
      <LoginInput login type="submit" value="login" />
      <Link>forgot your password ?</Link>
    </LoginForm>
  );
}

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
import { LoginUser } from "../../redux/actions/user/userActions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function UserLogin() {
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
    await dispatch(LoginUser(data));
    history.push("/user/org");
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

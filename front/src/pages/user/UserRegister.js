import React from "react";
import { Button, Error, Input, RegisterForm } from "../../style/register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const UserRegister = () => {
  const schema = yup.object().shape({
    firstname: yup.string().min(3).required(),
    lastname: yup.string().min(3).required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    IDnumber: yup.string().min(12).required(),
    address: yup.string().required(),
    email: yup.string().email("Invalid email format").required(),
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
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="First name" {...register("firstname")} />
      <Error>{errors.firstname?.message}</Error>
      <Input placeholder="Last name" {...register("lastname")} />
      <Error>{errors.lastname?.message}</Error>
      <Input placeholder="Email" {...register("email")} />
      <Error>{errors.email?.message}</Error>
      <Input placeholder="Password" type="password" {...register("password")} />
      <Error>{errors.password?.message}</Error>
      <Input placeholder="ID number" {...register("IDnumber")} />
      <Error>{errors.IDnumber?.message}</Error>
      <Input placeholder="address" {...register("address")} />
      <Error>{errors.address?.message}</Error>
      <Button login type="submit" value="Submit" />
    </RegisterForm>
  );
};

import React from "react";
import { Button, Error, Input, RegisterForm } from "../../style/register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterUser } from "../../redux/actions/user/userActions";
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
    idCard: yup.string().min(12).required(),
    phone: yup.string().min(6).required(),
    address: yup.string().required(),
    email: yup.string().email("Invalid email format").required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    await RegisterUser(data);
  };

  return (
    <div className="signupUser">
      <h1
        style={{
          marginTop: "4rem",
          color: "#353c4e",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Welcome to goHelp
      </h1>
      <div
        className="greeting"
        style={{
          float: "right",
          width: "60%",
          textAlign: "center",
          marginTop: "2rem",
          color: "#353c4e",
          margin: "1rem",
          minHeight: "400px",
        }}
      >
        <h3>Our services is completely free</h3>
        <br />
        <h3>we are here to help you</h3>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          architecto labore quibusdam ad quia consequuntur corrupti deleniti
          laborum dolorum corporis.
        </p>
      </div>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="First name" {...register("firstname")} />
        <Error>{errors.firstname?.message}</Error>
        <Input placeholder="Last name" {...register("lastname")} />
        <Error>{errors.lastname?.message}</Error>
        <Input placeholder="Email" {...register("email")} />
        <Error>{errors.email?.message}</Error>
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        <Error>{errors.password?.message}</Error>
        <Input placeholder="ID number" {...register("idCard")} />
        <Error>{errors.idCard?.message}</Error>
        <Input placeholder="Phone" {...register("phone")} />
        <Error>{errors.phone?.message}</Error>
        <Input placeholder="address" {...register("address")} />
        <Error>{errors.address?.message}</Error>
        <Button login type="submit" value="Submit" />
      </RegisterForm>
    </div>
  );
};

import React from "react";
import { Button, Error, Input, RegisterForm } from "../../style/register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterUser } from "../../redux/actions/user/userActions";
import Background from "../../image/hands.jpg";
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
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
    RegisterUser(data);
    reset();
  };
  return (
    <>
      <div
        className="greeting"
        style={{
          float: "right",
          width: "50%",
          textAlign: "center",
          marginTop: "2rem",
          backgroundImage: ` linear-gradient(
            rgba(37, 41, 88, 0.7),
            rgba(0, 133, 124, 0.7)
          ),url(${Background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          color: "white",
          margin: "1rem",
          minHeight: "400px",
        }}
      >
        <h1 style={{ marginBottom: "2rem" }}>Welcome to goHelp</h1>
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
        <Error>{errors.IDnumber?.message}</Error>
        <Input placeholder="Phone" {...register("phone")} />
        <Error>{errors.phone?.message}</Error>
        <Input placeholder="address" {...register("address")} />
        <Error>{errors.address?.message}</Error>
        <Button login type="submit" value="Submit" />
      </RegisterForm>
    </>
  );
};

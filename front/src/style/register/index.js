import styled from "styled-components";

export const RegisterForm = styled.form`
  margin-top: 5%;
  margin-left: 5%;
`;
export const Input = styled.input`
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  height: 2rem;
  outline: none;
  border-color: #00857c;
  margin-bottom: 1.5rem;
  width: 20rem;
`;
export const Button = styled.input`
  background: #00857c;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  cursor: pointer;
`;
export const Error = styled.p`
  color: tomato;
  margin: auto;
  font-size: small;
`;

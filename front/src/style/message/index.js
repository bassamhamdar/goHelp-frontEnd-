import styled from "styled-components";

export const Form = styled.form`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 40%;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.4);
`;
export const Input = styled.input`
  width: 90%;
  padding: 0.3rem;
  margin: 0.7rem;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.4);
`;
export const Select = styled.select`
  width: 60%;
  background: #fff;
  color: gray;
  padding: 0.3rem;
  margin: 0.7rem;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.4);
`;
export const TextArea = styled.textarea`
  width: 90%;
  padding: 0.3rem;
  margin: 0.7rem;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.4);
`;
export const Button = styled.button`
  background: #00857c;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;

  cursor: pointer;
  border: none;

  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.4);
`;
export const Error = styled.p`
  color: tomato;
  width: 100%;
  text-align: center;
  padding-top: 1rem;
`;

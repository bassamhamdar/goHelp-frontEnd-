import styled from "styled-components";

export const CreateForm = styled.form`
  position: fixed;
  top: 50%;
  right: -10%;
  width: 60%;
  background-color: #fff;
  transform: translate(-50%, -50%);
`;

export const CreateInput = styled.input`
  width: 90%;
  padding: 0.3rem;
  margin: 0.7rem;
  border: none;
  height: 2rem;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.4);
`;
export const CreateText = styled.textarea`
  width: 90%;
  padding: 0.3rem;
  margin: 0.7rem;
  border: none;
  height: 5rem;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.4);
`;
export const CreateButton = styled.input`
  background: #00857c;
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.4);
  cursor: pointer;
`;

export const Error = styled.p`
  color: tomato;
  margin: auto;
  padding-left: 0.7rem;
`;

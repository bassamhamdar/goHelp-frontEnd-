import styled from "styled-components";

export const Form = styled.form`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 40%;
`;
export const Input = styled.input`
  width: 90%;
  padding: 0.3rem;
  margin: 0.7rem;
`;
export const Select = styled.select`
  width: 60%;
  color: gray;
  padding: 0.3rem;
  margin: 0.7rem;
`;
export const TextArea = styled.textarea`
  width: 90%;
  padding: 0.3rem;
  margin: 0.7rem;
`;
export const Button = styled.button`
  background: ${(props) => (props.login ? "#39CCCC" : "#3D9970")};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  border: none;
`;
export const Error = styled.p`
  color: tomato;
  width: 100%;
  text-align: center;
  padding-top: 1rem;
`;

import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  background: white;
  font-family: "Dosis", sans-serif;
`;

export const LoginForm = styled.form`
  left: 50%;
  top: 40%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 25%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.3rem;
  margin: 0.7rem;
`;
export const LoginInput = styled.input`
  background: ${(props) => (props.login ? "#00857c" : "#3D9970")};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;

  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
export const Button = styled.button`
  background: ${(props) => (props.login ? "#00857c" : "#3D9970")};

  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0074d9;
  border-radius: 3px;
  cursor: pointer;
`;
export const Title = styled.h3`
  color: #001f3f;
  text-align: center;
`;

export const Link = styled.a`
  color: red;
  href="#";
  cursor:pointer;
  float:right;
  padding-top:1.5rem;
  
`;
export const Error = styled.p`
  color: tomato;
  margin: auto;
  padding-left: 0.7rem;
`;

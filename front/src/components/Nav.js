import React from "react";
import { useHistory } from "react-router";
import { NavMenu, NavSection, NavSpan } from "../style/nav";
export const Nav = () => {
  const history = useHistory();
  const navigate = (path) => history.push(path);
  return (
    <NavMenu>
      <NavSection style={{ width: "50%" }}>
        <NavSpan onClick={() => navigate("/")}>goHelp</NavSpan>
      </NavSection>
      <NavSection style={{ width: "40%" }}>
        <NavSpan>Login</NavSpan>
      </NavSection>
      <NavSection
        style={{
          width: "10%",
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
          marginRight: "1rem",
        }}
      >
        <NavSpan onClick={() => navigate("/user/login")}>Login</NavSpan>
        <NavSpan onClick={() => navigate("/user/register")}>Sign up</NavSpan>
      </NavSection>
    </NavMenu>
  );
};

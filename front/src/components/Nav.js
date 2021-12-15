import React from "react";
import { useHistory } from "react-router";
import { NavMenu, NavSection, NavSpan } from "../style/nav";
export const Nav = () => {
  const history = useHistory();
  const navigate = (path) => history.push(path);
  return (
    <NavMenu>
      <NavSection
        style={{
          width: "33.33%",
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        <NavSpan onClick={() => navigate("/")}>goHelp</NavSpan>
      </NavSection>
      <NavSection
        style={{
          width: "33.33%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <NavSpan>About</NavSpan>
        <NavSpan>FAQ</NavSpan>
        <NavSpan>Contact us</NavSpan>
      </NavSection>
      <NavSection
        style={{
          width: "33.33%",
          display: "flex",
          justifyContent: "space-evenly",
          gap: "1rem",
          marginRight: "1rem",
        }}
      >
        <NavSpan onClick={() => navigate("/user/register")}>Sign up</NavSpan>
        <NavSpan onClick={() => navigate("/user/login")}>Login</NavSpan>
      </NavSection>
    </NavMenu>
  );
};

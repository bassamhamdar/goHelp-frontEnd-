import React from "react";
import { useHistory } from "react-router";
import { NavMenu, NavSection, NavSpan } from "../style/nav";
export const Nav = () => {
  const history = useHistory();
  const navigate = (path) => history.push(path);
  return (
    <NavMenu>
      <NavSection>
        <NavSpan onClick={() => navigate("/user/login")}>Login</NavSpan>
      </NavSection>
      <NavSection>
        <NavSpan onClick={() => navigate("/user/register")}>Sign up</NavSpan>
      </NavSection>
    </NavMenu>
  );
};

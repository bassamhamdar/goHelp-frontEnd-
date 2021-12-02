import React from "react";
import { useHistory } from "react-router";
import { NavMenu, NavSection, NavSpan } from "../style/nav";
export const Nav = () => {
  const history = useHistory();
  const navigateToLogin = () => history.push("/user/login");
  const navigateToSignUp = () => history.push();
  return (
    <NavMenu>
      <NavSection>
        <NavSpan onClick={() => navigateToLogin()}>Login</NavSpan>
      </NavSection>
      <NavSection>
        <NavSpan>Sign up</NavSpan>
      </NavSection>
    </NavMenu>
  );
};

import React from "react";
import { useHistory } from "react-router";
import { logoutUser } from "../redux/actions/user/userActions";
import { logoutOrg } from "../redux/actions/org/orgActions";
import { Logo, NavMenu, NavSection, NavSpan } from "../style/nav";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch } from "react-redux";

export const Nav = ({ user_token, org_token }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const navigate = (path) => history.push(path);
  const handleClick = async () => {
    await dispatch(logoutUser());
    history.push("/");
  };
  const handleOrgLogout = async () => {
    await dispatch(logoutOrg());
    history.push("/");
  };

  return (
    <NavMenu>
      {console.log("user", user_token)}
      {console.log("org", org_token)}
      <NavSection
        style={{
          width: "33.33%",
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        <Logo onClick={() => navigate("/")}></Logo>
      </NavSection>
      <NavSection
        style={{
          width: "33.33%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {user_token ? (
          <>
            <NavSpan onClick={() => navigate("/user/org")}>
              Organizations
            </NavSpan>
            <NavSpan onClick={() => navigate("/user/posts")}>News Feed</NavSpan>
          </>
        ) : null}
        {org_token ? (
          <NavSpan onClick={() => navigate("/org/profile")}>Profile</NavSpan>
        ) : null}
        {user_token || org_token ? null : (
          <>
            <NavSpan>About</NavSpan>
            <NavSpan>FAQ</NavSpan>
            <NavSpan>Contact us</NavSpan>
          </>
        )}
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
        {user_token || org_token ? null : (
          <NavSpan onClick={() => navigate("/user/register")}>Sign up</NavSpan>
        )}
        {user_token || org_token ? null : (
          <NavSpan onClick={() => navigate("/user/login")}>Log in</NavSpan>
        )}

        {user_token && (
          <>
            <NavSpan onClick={() => handleClick()}>Log out</NavSpan>
            <NavSpan onClick={() => navigate("/user/profile")}>
              <MdAccountCircle size={30} />
            </NavSpan>
          </>
        )}
        {org_token && (
          <NavSpan onClick={() => handleOrgLogout()}>Log out</NavSpan>
        )}
      </NavSection>
    </NavMenu>
  );
};

import React from "react";
import { Route } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { OrgProfile } from "./OrgProfile";

export const Org = () => {
  return (
    <>
      <Nav />
      <Route path="/org/profile" exact component={OrgProfile} />
    </>
  );
};

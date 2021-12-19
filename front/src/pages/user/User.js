import React from "react";
import { Route } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Organization } from "./Organization";
import { OrgTable } from "./OrgTable";
import { Posts } from "./Posts";

import { UserProfile } from "./UserProfile";

export const User = () => {
  return (
    <>
      <Nav />
      <Route path="/user/org" exact component={OrgTable} />
      <Route path="/user/org/profile/:id" component={Organization} />
      <Route path="/user/profile" component={UserProfile} />
      <Route path="/user/posts" component={Posts} />
    </>
  );
};

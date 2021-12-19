import React from "react";
import { Route } from "react-router-dom";
import { Wrapper } from "../../style/login";
import { AboutDashboard } from "./AboutDashboard";
import { FaqDashboard } from "./FaqDashboard";
import { HomeDashboard } from "./HomeDashboard";
import { OrgDashboard } from "./OrgDashboard";
import { UsersDashboard } from "./UsersDashboard";

export const Dashboard = () => {
  return (
    <Wrapper>
      <Route path="/dashboard" exact component={HomeDashboard} />
      <Route path="/dashboard/user" exact component={UsersDashboard} />
      <Route path="/dashboard/org" exact component={OrgDashboard} />
      <Route path="/dashboard/faq" exact component={FaqDashboard} />
      <Route path="/dashboard/about" exact component={AboutDashboard} />
    </Wrapper>
  );
};

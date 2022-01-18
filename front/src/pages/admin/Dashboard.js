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
      <Route path="/dashboard/user" component={UsersDashboard} />
      <Route path="/dashboard/org" component={OrgDashboard} />
      <Route path="/dashboard/faq" component={FaqDashboard} />
      <Route path="/dashboard/about" component={AboutDashboard} />
    </Wrapper>
  );
};

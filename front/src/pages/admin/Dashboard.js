import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SideNav } from "../../components/SideNav";
import { Wrapper } from "../../style/login";

export const Dashboard = () => {
  return (
    <Wrapper>
      <SideNav />
    </Wrapper>
  );
};

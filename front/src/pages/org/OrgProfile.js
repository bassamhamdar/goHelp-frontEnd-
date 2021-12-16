import React from "react";
import { OrgInfo } from "../../components/OrgInfo";
import { UserDonation } from "../../components/UserDonation";
import { UserRequest } from "../../components/UserRequest";

export const OrgProfile = () => {
  return (
    <>
      <OrgInfo />
      <UserDonation />
      <UserDonation />
      <UserRequest />
    </>
  );
};

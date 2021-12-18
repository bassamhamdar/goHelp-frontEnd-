import React from "react";
import { CreatePost } from "../../components/CreatePost";
import { OrgInfo } from "../../components/OrgInfo";
import { UserReqTable } from "../../components/UserReqTable";
// import { UserDonation } from "../../components/UserDonation";
// import { UserRequest } from "../../components/UserRequest";

export const OrgProfile = () => {
  return (
    <>
      <OrgInfo />
      {/* <UserDonation />
      <UserRequest /> */}
      <UserReqTable />
      <CreatePost />
    </>
  );
};

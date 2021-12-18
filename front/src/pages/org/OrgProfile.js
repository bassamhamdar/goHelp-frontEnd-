import React from "react";
import { CreatePost } from "../../components/CreatePost";
import { OrgInfo } from "../../components/OrgInfo";
import { UserDonTable } from "../../components/UserDonTable";
import { UserReqTable } from "../../components/UserReqTable";

export const OrgProfile = () => {
  return (
    <>
      <OrgInfo />
      <UserReqTable />
      <UserDonTable />
      <CreatePost />
    </>
  );
};

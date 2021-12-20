import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreatePost } from "../../components/CreatePost";
import { OrgInfo } from "../../components/OrgInfo";
import { UserDonTable } from "../../components/UserDonTable";
import { UserReqTable } from "../../components/UserReqTable";
import { fetchOrgProfile } from "../../redux/actions/org/orgActions";

export const OrgProfile = () => {
  const info = useSelector((state) => state.orgs.profile);
  const [isVisible, setVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchOrgProfile()), [dispatch]);
  return (
    <>
      {console.log("info", info)}
      <OrgInfo org={info} />
      <UserReqTable />
      <UserDonTable />
    </>
  );
};

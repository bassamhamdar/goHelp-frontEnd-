import React, { useEffect, useState } from "react";
import { TtilePage, Ttile } from "../../style/app";
import { StyledTable } from "../../style/table";
import { SiAdblock } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  ApproveOrganization,
  FetchOrgs,
} from "../../redux/actions/admin/adminActions";
import { OrgProfilePopUp } from "../../components/OrgProfilePopUp";

export const OrgDashboard = () => {
  const orgs = useSelector((state) => state.orgs.org);
  const [Id, setId] = useState();
  const registered = [];
  const unRegistered = [];
  if (orgs) {
    orgs.forEach((item) => {
      if (item.status === 1) {
        registered.push(item);
      } else {
        unRegistered.push(item);
      }
    });
  }
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const Approve = (id) => dispatch(ApproveOrganization(id));
  const DisApprove = (id) => dispatch(ApproveOrganization(id));
  useEffect(() => {
    dispatch(FetchOrgs());
  }, [dispatch, Id]);
  return (
    <>
      {console.log("orgs", registered, unRegistered)}
      <TtilePage style={{ fontSize: "30px" }}>Organizations</TtilePage>
      <StyledTable org>
        <caption>Organizations in goHelp</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Activity</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registered &&
            registered.map((org, i) => (
              <tr key={i}>
                <td>{org.name}</td>
                <td>{org.activity.name}</td>
                <td>{org.email}</td>
                {org.status === 1 ? <td>Approved</td> : <td>Not Approved</td>}
                <td>
                  <SiAdblock
                    style={{ color: "red", padding: "10px", cursor: "pointer" }}
                    onClick={() => {
                      DisApprove(org.id);
                      setId(org.id);
                    }}
                  />
                  <ImProfile
                    style={{ padding: "10px", cursor: "pointer" }}
                    onClick={() => setVisible(true)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
      <Ttile style={{ fontSize: "30px" }}>Register Requests</Ttile>;
      <StyledTable Reg>
        <caption>Organizations in goHelp</caption>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>Name</th>
            <th>Activity</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {unRegistered &&
            unRegistered.map((org, i) => (
              <tr key={i}>
                <td>{org.name}</td>
                <td>{org.activity.name}</td>
                <td>{org.email}</td>
                <td>false</td>
                <td>
                  <AiOutlineCheckCircle
                    style={{ padding: "10px", cursor: "pointer" }}
                    onClick={() => {
                      Approve(org.id);
                      setId(org.id);
                    }}
                  />
                  <ImProfile style={{ padding: "10px", cursor: "pointer" }} />
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
      {visible ? <OrgProfilePopUp setVisible={setVisible} /> : null}
    </>
  );
};

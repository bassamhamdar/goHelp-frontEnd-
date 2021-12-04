import React, { useEffect } from "react";
import { TtilePage, Ttile } from "../../style/app";
import { StyledTable } from "../../style/table";
import { SiAdblock } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { FetchOrgs } from "../../redux/actions/admin/adminActions";

export const OrgDashboard = () => {
  const orgs = useSelector((state) => state.orgs.org);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchOrgs());
  }, [dispatch]);
  return (
    <>
      {console.log("orgs", orgs)}
      <TtilePage>Organizations</TtilePage>
      <StyledTable org>
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
          <tr>
            <td>org 1</td>
            <td>org activity name</td>
            <td>email@gmail.com</td>
            <td>Approved</td>
            <td>
              <SiAdblock style={{ color: "red", padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
          <tr>
            <td>org 2</td>
            <td>org 2 activity name</td>
            <td>email@gmail.com</td>
            <td>Approved</td>
            <td>
              <SiAdblock style={{ color: "red", padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
          <tr>
            <td>org 2</td>
            <td>org 2 activity name</td>
            <td>email@gmail.com</td>
            <td>Approved</td>
            <td>
              <SiAdblock style={{ color: "red", padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
          <tr>
            <td>org 2</td>
            <td>org 2 activity name</td>
            <td>email@gmail.com</td>
            <td>Approved</td>
            <td>
              <SiAdblock style={{ color: "red", padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
          <tr>
            <td>org 2</td>
            <td>org 2 activity name</td>
            <td>email@gmail.com</td>
            <td>Approved</td>
            <td>
              <SiAdblock style={{ color: "red", padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
        </tbody>
      </StyledTable>
      <Ttile>Register Requests</Ttile>;
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
          <tr>
            <td>org 1</td>
            <td>org activity name</td>
            <td>email@gmail.com</td>
            <td>Approved</td>
            <td>
              <SiAdblock style={{ color: "red", padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
          <tr>
            <td>org 2</td>
            <td>org 2 activity name</td>
            <td>email@gmail.com</td>
            <td>Approved</td>
            <td>
              <SiAdblock style={{ color: "red", padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
          <tr>
            <td>org 2</td>
            <td>org 2 activity name</td>
            <td>email@gmail.com</td>
            <td>Approved</td>
            <td>
              <SiAdblock style={{ color: "red", padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
          <tr>
            <td>org 2</td>
            <td>org 2 activity name</td>
            <td>email@gmail.com</td>
            <td>Approved</td>
            <td>
              <SiAdblock style={{ color: "red", padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
          <tr>
            <td>org 2</td>
            <td>org 2 activity name</td>
            <td>email@gmail.com</td>
            <td>Approved</td>
            <td>
              <SiAdblock style={{ color: "red", padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
};

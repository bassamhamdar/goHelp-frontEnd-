import React, { useEffect, useState } from "react";
import { TtilePage, Ttile } from "../../style/app";
import { StyledTable } from "../../style/table";
import { SiAdblock } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FetchOrgs } from "../../redux/actions/admin/adminActions";
import { toast } from "react-toastify";
import { OrgProfilePopUp } from "../../components/OrgProfilePopUp";

export const OrgDashboard = () => {
  const orgs = useSelector((state) => state.orgs.org);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchOrgs());
  }, [dispatch]);
  return (
    <>
      {console.log("orgs", orgs)}
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
          {orgs.map((org, i) => (
            <tr>
              <td>{org.name}</td>
              <td>{org.activity.name}</td>
              <td>{org.email}</td>
              {org.status === 1 ? <td>Approved</td> : <td>Not Approved</td>}
              <td>
                <SiAdblock
                  style={{ color: "red", padding: "10px", cursor: "pointer" }}
                  onClick={() => toast.success("Blocked")}
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
          <tr>
            <td>Restart</td>
            <td>Medical</td>
            <td>Restart@gmail.com</td>
            <td>False</td>
            <td>
              <AiOutlineCheckCircle
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => toast.success("Approved")}
              />
              <ImProfile style={{ padding: "10px", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>Help Lebanon</td>
            <td>Others</td>
            <td>Help@gmail.com</td>
            <td>False</td>
            <td>
              <AiOutlineCheckCircle
                style={{ padding: "10px", cursor: "pointer" }}
                o
              />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>

          <tr>
            <td>Nahnoo</td>
            <td>Others</td>
            <td>Nahno@gmail.com</td>
            <td>False</td>
            <td>
              <AiOutlineCheckCircle style={{ padding: "10px" }} />
              <ImProfile style={{ padding: "10px" }} />
            </td>
          </tr>
        </tbody>
      </StyledTable>
      {visible ? <OrgProfilePopUp setVisible={setVisible} /> : null}
    </>
  );
};

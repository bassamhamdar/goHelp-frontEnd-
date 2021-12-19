import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StyledTable } from "../style/table";
import { fetchDonReq, fetchHelpReq } from "../redux/actions/org/orgActions";
import { ImProfile } from "react-icons/im";

import { RequestPopup } from "./RequestPopup";

export const UserReqTable = () => {
  const helpReq = useSelector((state) => state.req.helpRequests);
  const donReq = useSelector((state) => state.req.donRequests);
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(fetchHelpReq(2));
    dispatch(fetchDonReq(2));
  }, [dispatch]);
  return (
    <>
      <h1
        style={{
          color: "#353c4e",
          padding: "10px 20px 10px 10px",
          borderLeft: "2px solid #00857c",
          marginLeft: "80px",
        }}
      >
        Help Requests
      </h1>
      <StyledTable org>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {helpReq.length > 0 &&
            helpReq.map((data, i) => (
              <tr key={i}>
                <td>{data.user.lastname}</td>
                <td>{data.user.email}</td>
                <td>{data.user.phone}</td>
                <td>
                  <ImProfile
                    style={{ padding: "10px", cursor: "pointer" }}
                    onClick={() => {
                      setVisible(true);
                      setData(helpReq[i]);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
      <h1
        style={{
          color: "#353c4e",
          padding: "10px 20px 10px 10px",
          borderLeft: "2px solid #00857c",
          marginLeft: "80px",
        }}
      >
        Donation Requests
      </h1>
      <StyledTable org>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {donReq.length > 0 &&
            donReq.map((data, i) => (
              <tr key={i}>
                <td>{data.user.lastname}</td>
                <td>{data.user.email}</td>
                <td>{data.user.phone}</td>
                <td>
                  <ImProfile
                    style={{ padding: "10px", cursor: "pointer" }}
                    onClick={() => {
                      setVisible(true);
                      setData(donReq[i]);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
      {isVisible ? <RequestPopup data={data} setVisible={setVisible} /> : null}
    </>
  );
};

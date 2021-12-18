import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StyledTable } from "../style/table";
import { fetchDonReq, fetchHelpReq } from "../redux/actions/org/orgActions";
import { ImProfile } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { RequestPopup } from "./RequestPopup";

export const UserReqTable = () => {
  const helpReq = useSelector((state) => state.req.helpRequests);
  const donReq = useSelector((state) => state.req.donRequests);
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(fetchHelpReq(1));
    dispatch(fetchDonReq(1));
  }, [dispatch]);
  return (
    <>
      <StyledTable org>
        <caption style={{ color: "#353c4e" }}>Help requests</caption>
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
      {isVisible ? <RequestPopup data={data} setVisible={setVisible} /> : null}
    </>
  );
};

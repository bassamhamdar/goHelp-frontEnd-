import React, { useEffect, useState } from "react";
import { ImProfile } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonations } from "../redux/actions/org/orgActions";
import { StyledTable } from "../style/table";
import { RequestPopup } from "./RequestPopup";
export const UserDonTable = () => {
  const dispatch = useDispatch();
  const donations = useSelector((state) => state.req.donations);
  const [isVisible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(fetchDonations(2));
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
        Donations on Posts
      </h1>
      <StyledTable org>
        {console.log("donations", donations)}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {donations.length > 0 &&
            donations.map((data, i) => (
              <tr key={i}>
                <td>{data.user.firstname}</td>
                <td>{data.user.email}</td>
                <td>{data.user.phone}</td>
                <td>
                  <ImProfile
                    style={{ padding: "10px", cursor: "pointer" }}
                    onClick={() => {
                      setVisible(true);
                      setData(donations[i]);
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

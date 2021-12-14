import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchOrgs, SearchOrgs } from "../../redux/actions/user/userActions";
import { StyledTable } from "../../style/table";
import { ImProfile } from "react-icons/im";
export const OrgTable = () => {
  const dispatch = useDispatch();
  const org = useSelector((state) => state.orgs.org);
  const handleSearch = (data) => {
    dispatch(SearchOrgs(data));
  };
  useEffect(() => dispatch(FetchOrgs()), [dispatch]);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder=" Search ..."
          style={{
            display: "block",
            width: "20rem",
            margin: "auto",
            marginTop: "5rem",
            border: "none",
            height: "2rem",
            borderRadius: "6px",
            boxShadow: "1px 1px 1px 1px rgba(128, 128, 128, 0.295)",
          }}
          onChange={(event) => {
            handleSearch(event.target.value);
          }}
        />
      </div>

      <StyledTable org>
        <caption>Organizations in goHelp</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Activity</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {org &&
            org.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.activity.name}</td>
                <td>{data.address[0].city}</td>
                <td>
                  <ImProfile style={{ padding: "10px" }} />
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </>
  );
};

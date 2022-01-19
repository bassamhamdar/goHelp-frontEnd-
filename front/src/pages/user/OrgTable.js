import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchOrgs, SearchOrgs } from "../../redux/actions/user/userActions";
import { StyledTable } from "../../style/table";
import { ImProfile } from "react-icons/im";
import { useHistory } from "react-router-dom";
export const OrgTable = () => {
  const dispatch = useDispatch();
  const { org, searchOrg } = useSelector((state) => state.orgs);
  const handleSearch = (data) => {
    dispatch(SearchOrgs(data));
  };
  const history = useHistory();
  const navigate = (id) => history.push(`/user/org/profile/${id}`);
  useEffect(() => dispatch(FetchOrgs()), [dispatch]);
  return (
    <>
      <div>
        <h1
          style={{
            marginTop: "5rem",
            textAlign: "center",
            color: "#353c4e",
          }}
        >
          Search for Registered Organizations
        </h1>

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
        <caption style={{ color: "#353c4e" }}>Organizations in goHelp</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Activity</th>
            <th>City</th>
            <th>Visit Profile</th>
          </tr>
        </thead>
        <tbody>
          {org.length > 0 &&
            searchOrg.length === 0 &&
            org.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.activity.name}</td>
                <td>{data.address[0].city}</td>
                <td>
                  <ImProfile
                    style={{ padding: "10px", cursor: "pointer" }}
                    onClick={() => navigate(data.id)}
                  />
                </td>
              </tr>
            ))}
          {searchOrg.length > 0 &&
            searchOrg.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.activity.name}</td>
                <td>{data.address[0].city}</td>
                <td>
                  <ImProfile
                    style={{ padding: "10px", cursor: "pointer" }}
                    onClick={() => navigate(data.id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </>
  );
};

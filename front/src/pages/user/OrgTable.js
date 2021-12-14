import React, { useEffect, useState } from "react";
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
      <input
        type="text"
        style={{ marginTop: "4rem" }}
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      />
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

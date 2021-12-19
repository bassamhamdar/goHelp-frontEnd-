import React, { useEffect } from "react";
import { TtilePage } from "../../style/app";
import { StyledTable } from "../../style/table";
import { SiAdblock } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { FetchUsers } from "../../redux/actions/admin/adminActions";
export const UsersDashboard = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);
  return (
    <>
      {console.log("users", users)}
      <TtilePage>users</TtilePage>;
      <StyledTable>
        <caption>Users in goHelp</caption>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>
                <SiAdblock
                  style={{ color: "red", padding: "10px", cursor: "pointer" }}
                />
                <ImProfile style={{ padding: "10px", cursor: "pointer" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

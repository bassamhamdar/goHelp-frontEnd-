import React, { useEffect } from "react";
import { TtilePage } from "../../style/app";
import { StyledTable } from "../../style/table";
import { SiAdblock } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { FetchUsers } from "../../redux/actions/userActions";
export const UsersDashboard = () => {
  const users = useSelector((state) => state.allusers.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUsers());
  }, []);
  return (
    <>
      {console.log("state", users)}
      <TtilePage>users</TtilePage>;
      <StyledTable>
        <caption>Users in goHelp</caption>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
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
                <SiAdblock style={{ color: "red", padding: "10px" }} />
                <ImProfile style={{ padding: "10px" }} />
              </td>
            </tr>
          ))}

          <tr>
            <td>user 2</td>
            <td>user 2 family name</td>
            <td>email@gmail.com</td>
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

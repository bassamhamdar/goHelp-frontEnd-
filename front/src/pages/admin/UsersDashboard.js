import React, { useEffect, useState } from "react";
import { TtilePage } from "../../style/app";
import { StyledTable } from "../../style/table";
import { SiAdblock } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { FetchUsers } from "../../redux/actions/admin/adminActions";
import { ProfilePopUp } from "../../components/ProfilePopUp";
import { toast } from "react-toastify";

export const UsersDashboard = () => {
  const users = useSelector((state) => state.users.users);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);
  return (
    <>
      {console.log("users", users)}
      <TtilePage style={{ fontSize: "30px" }}>Users</TtilePage>;
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
      {visible ? <ProfilePopUp setVisible={setVisible} /> : null}
    </>
  );
};

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Message } from "../../components/Message";
import { FetchOneOrg } from "../../redux/actions/user/userActions";
import "./orgProfile.css";
import { OrgInfo } from "../../components/OrgInfo";

export const Organization = () => {
  const param = useParams();
  const org_id = param.id;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const org = useSelector((state) => state.orgs.org);
  useEffect(() => dispatch(FetchOneOrg(param.id)), [dispatch, param.id]);
  return (
    <div>
      <button
        style={{
          height: "2.5rem",
          width: "8rem",
          background: " #00857c",
          border: "none",
          color: "#fff",
          padding: "0.2rem",
          position: "absolute",
          top: "60%",
          right: "45%",
          cursor: "pointer",
        }}
        onClick={() => setVisible(true)}
      >
        Send request
      </button>
      {console.log("org profile", org)}
      {visible ? <Message setVisible={setVisible} org_id={org_id} /> : null}
      <OrgInfo org={org} />
    </div>
  );
};

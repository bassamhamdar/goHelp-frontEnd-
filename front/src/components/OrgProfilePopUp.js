import React from "react";

export const OrgProfilePopUp = ({ setVisible }) => {
  return (
    <div
      className="Profile__popup"
      style={{
        width: "50%",
        minHeight: "300px",
        borderRadius: "6px",
        padding: "1rem",
      }}
    >
      <div
        style={{ float: "right", cursor: "pointer" }}
        onClick={() => setVisible(false)}
      >
        X
      </div>
      <div
        className="Profile__popup__flex"
        style={{ display: "flex", gap: "5rem", marginTop: "2rem" }}
      >
        <div>
          <div className="name">
            <h3>
              Name: <span style={{ fontWeight: "normal" }}> Basma</span>
            </h3>
          </div>
          <br />
          <div className="email">
            <h3>
              Email:
              <span style={{ fontWeight: "normal" }}> Basma@gmail.com</span>
            </h3>
          </div>
        </div>
        <div>
          <div>
            <h3>
              Phone: <span style={{ fontWeight: "normal" }}>01-664669</span>
            </h3>
          </div>
          <br />
          <div>
            <h3>
              Address:{" "}
              <span style={{ fontWeight: "normal" }}>Beirut-Lebanon</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

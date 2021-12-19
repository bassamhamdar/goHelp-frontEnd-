import React, { useEffect } from "react";

export const RequestPopup = ({ data, setVisible }) => {
  return (
    <div className="PopUp">
      <div
        style={{ float: "right", margin: "1rem", cursor: "pointer" }}
        onClick={() => setVisible(false)}
      >
        X
      </div>
      <div id="PopUp__container">
        <div className="Popup__row">
          <div className="col-md-6 col-sm-6">
            <div className="about__div" style={{ margin: "1rem" }}>
              <h4>
                From: {data.user.firstname} {data.user.lastname}
              </h4>

              <h6>Date: {data.created_at}</h6>
              <br />
              <h6>Title: {data.title}</h6>
              <p>{data.description}</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <img
              src={`http://localhost:8000/${data.image}`}
              className="img-responsive"
              alt="about img"
              style={{ width: "200px", border: "1px solid white" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

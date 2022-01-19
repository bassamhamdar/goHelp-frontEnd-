import React from "react";
import { toast } from "react-toastify";
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
                From:{" "}
                <span style={{ fontWeight: "normal" }}>
                  {data.user.firstname} {data.user.lastname}{" "}
                </span>
              </h4>

              <h6>
                Date: <span style={{ fontWeight: "normal" }}>now</span>
              </h6>
              <br />
              <h6>
                Title:{" "}
                <span style={{ fontWeight: "normal" }}>{data.title}</span>{" "}
              </h6>
              <h6 style={{ paddingBottom: "10px" }}>Descirption: </h6>
              <p style={{ minHeight: "130px" }}>{data.description}</p>
              <button
                style={{
                  width: "5rem",
                  height: "2rem",
                  backgroundColor: "green",
                  border: "none",
                  borderRadius: "6px",
                  marginRight: "0.5rem",
                  cursor: "pointer",
                }}
                onClick={() => toast.success("Accepted")}
              >
                Accept
              </button>
              <button
                style={{
                  width: "5rem",
                  height: "2rem",
                  backgroundColor: "tomato",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Decline
              </button>
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

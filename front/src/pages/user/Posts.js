import React, { useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import photo from "../../image/homepage3.jpg";
import "./slider.css";
import { Donate } from "../../components/Donate.js";
export const Posts = () => {
  const [visible, setVisible] = useState(false);
  const [orgId, setOrgId] = useState("");
  return (
    <div className="postsWrapper">
      {visible ? <Donate setVisible={setVisible} org_id={orgId} /> : null}
      <h2 style={{ textAlign: "center", color: "grey", marginTop: "5rem" }}>
        Posts from Organizations
      </h2>
      <ul className="post-list" style={{ paddingTop: "5rem", margin: "auto" }}>
        <div className="post">
          <div className="img">
            <img src={photo} alt="help" style={{ width: "90%" }} />
          </div>
          <div>
            <h4>From: Org Name</h4>
            <h3 className="post-title" title="title">
              Title
            </h3>

            <h6>2 days ago</h6>
            <hr style={{ height: "1px" }} />
            <p
              title="post content"
              style={{ marginBottom: "10px", marginTop: "20px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              earum provident commodi, unde quidem beatae atque! Nihil aliquam
              sequi nam.
            </p>
            <button
              className="donate__btn"
              onClick={() => {
                setVisible(true);
                setOrgId();
              }}
            >
              Donate
            </button>
          </div>
        </div>
        <div className="post">
          <div className="img">
            <img src={photo} alt="help" style={{ width: "90%" }} />
          </div>
          <div>
            <h4>From: Org Name</h4>
            <h3 className="post-title" title="title">
              Title
            </h3>
            <h6>2 days ago</h6>
            <hr style={{ height: "1px" }} />
            <p
              title="post content"
              style={{ marginBottom: "10px", marginTop: "20px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              earum provident commodi, unde quidem beatae atque! Nihil aliquam
              sequi nam.
            </p>
            <button className="donate__btn">Donate</button>
          </div>
        </div>
      </ul>
    </div>
  );
};

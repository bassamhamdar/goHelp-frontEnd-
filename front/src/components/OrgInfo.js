import React, { useState } from "react";
import aboutImg from "../image/about-img.jpg";
import "../pages/user/orgProfile.css";
import { CreatePost } from "./CreatePost";
export const OrgInfo = ({ org }) => {
  const [isVisible, setVisible] = useState(false);
  let org_token = localStorage.getItem("org_token");
  return (
    <div>
      <div id="home"></div>
      <div className="name">
        {org && (
          <h1
            style={{
              color: "#353c4e",
              textAlign: "center",
              paddingTop: "1rem",
              backgroundSize: "100%",
              textTransform: "capitalize",
              fontSize: "40px",
              marginBottom: "2rem",
            }}
          >
            {org.name}
          </h1>
        )}
        {org_token && (
          <button
            style={{
              height: "2.5rem",
              width: "8rem",
              background: " #00857c",
              border: "none",
              color: "#fff",
              padding: "0.2rem",
              position: "absolute",
              top: "62%",
              right: "45%",
              cursor: "pointer",
            }}
            onClick={() => setVisible(true)}
          >
            Create Post
          </button>
        )}
      </div>
      <div className="orgProfile__wrap" style={{ margin: "0 5rem 5rem 5rem" }}>
        <div id="service">
          <div className="container">
            <div className="header">
              <h2 style={{ textAlign: "center" }}>Our Profile</h2>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <i className="fa fa-cubes"></i>
                <h3>Mission</h3>
                <p style={{ maxWidth: "400px" }}>
                  We connect people around the world in the fight to end
                  poverty. Working together, we invest in the lives of children
                  and youth, build the healthy environments they need to thrive,
                  and empower them to create lasting change in their own lives.
                </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <i className="fa fa-cogs"></i>
                <h3>Achievements</h3>
                <p style={{ maxWidth: "400px" }}>
                  Brought clean and safe drinking water to people in developing
                  countries. feed America’s hungry through a nationwide network
                  of member food banks and engaged our country in the fight to
                  end hunger.
                </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <i className="fa fa-group"></i>
                <h3>Address</h3>
                <p>Badaro-Beirut-Lebanon</p>
              </div>
            </div>
          </div>
        </div>
        <div id="about">
          <div className="container">
            <div className="col-md-12 col-sm-12">
              <h2>Our Story</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <img
                  src={aboutImg}
                  className="img-responsive"
                  alt="about img"
                  style={{ width: "400px" }}
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="about__div" style={{ margin: "1rem" }}>
                  <h4>Talented Designers &amp; Developers</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore
                    magna aliquam erat volutpat. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet.
                  </p>
                  <p>
                    Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet. Dolore magna aliquam erat
                    volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVisible ? <CreatePost setVisible={setVisible} /> : null}
    </div>
  );
};

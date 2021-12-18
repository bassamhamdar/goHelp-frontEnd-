import React from "react";
import aboutImg from "../image/about-img.jpg";
import "../pages/user/orgProfile.css";
export const OrgInfo = ({ org }) => {
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
            }}
          >
            {org.name}
          </h1>
        )}
      </div>
      <div className="orgProfile__wrap" style={{ margin: "0 5rem 5rem 5rem" }}>
        <div id="service">
          <div className="container">
            <div className="header">
              <h2 style={{ textAlign: "center" }}>Our Workflow</h2>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <i className="fa fa-cubes"></i>
                <h3>Mission</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <i className="fa fa-cogs"></i>
                <h3>Design</h3>
                <p>
                  This website template is brought to you by Tooplate. You can
                  modify and use it for any website. You can change icons by
                  looking at
                </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <i className="fa fa-group"></i>
                <h3>Address</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                  aliquam erat volutpat.
                </p>
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
    </div>
  );
};

import React from "react";
import DonationImg from "../image/homepage3.jpg";
import "../pages/user/orgProfile.css";

export const UserDonation = () => {
  return (
    <div className="Donations" style={{ margin: "0 5rem 5rem" }}>
      <div id="about">
        <div className="container">
          <div className="col-md-12 col-sm-12">
            <h2>New Donations</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="about__div" style={{ margin: "1rem" }}>
                <h4>From: Designers &amp; Developers</h4>
                <h6>Date: 12-15-2021</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                  aliquam erat volutpat. Lorem ipsum dolor sit amet,
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
            <div className="col-md-6 col-sm-6">
              <img
                src={DonationImg}
                className="img-responsive"
                alt="about img"
                style={{ width: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import helpImg from "../image/concor.jpg";
import { fetchDonReq, fetchHelpReq } from "../redux/actions/org/orgActions";
export const UserRequest = () => {
  const helpReq = useSelector((state) => state.req);
  const donReq = useSelector((state) => state.req);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHelpReq(1));
    dispatch(fetchDonReq(1));
  }, [dispatch]);
  return (
    <div className="Donations" style={{ margin: "0 5rem 5rem" }}>
      {console.log("Req", donReq)}
      <div id="about">
        <div className="container">
          <div className="col-md-12 col-sm-12">
            <h2>New Requests</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="about__div" style={{ margin: "1rem" }}>
                <h4>From: Designers &amp; Developers</h4>
                <h5>Type: help request</h5>
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
                src={helpImg}
                className="img-responsive"
                alt="about img"
                style={{ width: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

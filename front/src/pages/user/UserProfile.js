import React, { useEffect } from "react";
import { fetchProfile } from "../../redux/actions/user/userActions";
import {
  Data,
  Info,
  InfoData,
  H3,
  H4,
  Left,
  Right,
  Wrapper,
  P,
} from "../../style/profile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
export const UserProfile = () => {
  const info = useSelector((state) => state.prof.profile);
  const dispatch = useDispatch();
  ChartJS.register(ArcElement, Tooltip, Legend);
  let data = {
    labels: ["Donations", "Requests"],
    datasets: [
      {
        label: "# of Votes",
        data: [1, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  return (
    <>
      <Wrapper>
        <Left>
          <H4>
            {info.firstname} {info.lastname}
          </H4>
          <P style={{ color: "#fff" }}>UI Developer</P>
        </Left>
        <Right>
          <Info>
            <H3>Information</H3>
            <InfoData>
              <Data>
                <H4>Email</H4>
                <P>{info.email}</P>
              </Data>
              <Data>
                <H4>ID Card</H4>
                <P>0001-213-998761</P>
              </Data>
            </InfoData>
            <InfoData>
              <Data>
                <H4>Address</H4>
                <P>{info.address}</P>
              </Data>
              <Data>
                <H4>Phone</H4>
                <P>0001-213-998761</P>
              </Data>
            </InfoData>
            <InfoData>
              <Data>
                <H4>Donations</H4>
                <P>{info.donation ? info.donation.length : 0}</P>
              </Data>
              <Data>
                <H4>Requests</H4>
                <P>{info.request ? info.request.length : 0}</P>
              </Data>
            </InfoData>
          </Info>
          <div
            className="chart"
            style={{
              width: "300px",
              height: "300px",
              marginLeft: "8rem",
            }}
          >
            <Pie data={data} />
          </div>
        </Right>
      </Wrapper>
    </>
  );
};

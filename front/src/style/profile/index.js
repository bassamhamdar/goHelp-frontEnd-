import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 3.7rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  height: 100vh;
  margin-bottom: 0;
`;
export const Left = styled.div`
  width: 20%;
  background: linear-gradient(to right, #01a9ac, #3d9970);
  padding: 30px 25px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align: center;
  color: #fff;
`;
export const Right = styled.div`
  width: 80%;
  background: #fff;
  padding: 30px 25px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Info = styled.div`
  margin-bottom: 25px;
`;
export const H3 = styled.h3`
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e0e0e0;
  color: #353c4e;
  text-transform: uppercase;
  letter-spacing: 5px;
`;
export const H4 = styled.h4`
  color: #353c4e;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

export const InfoData = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Data = styled.div`
  width: 45%;
`;
export const P = styled.p`
  font-size: 13px;
  margin-bottom: 10px;
  color: #919aa3;
`;

import styled from "styled-components";

export const StyledTable = styled.table`
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  caption-side: top;
  border: none;
  border-collapse: collapse;
  border-collapse: separate;
  border-spacing: 5px 5px;

  caption-side: bottom;
  empty-cell: show | hide;
  empty-cell is a property of table or the cells themselves 

  vertical-align: baseline | sub | super | text-top | 
              text-bottom | middle | top | bottom | 
              <percentage> | <length> 

  td,
  th {
    border: none;
  }

  td {
    padding: 5px;
    width: 20px;
    text-align: center;
  }

  tbody tr {
    height: 4rem;
    background: -webkit-linear-gradient(left, #25c481, #00857c);
    background: linear-gradient(to right, #25c481, #00857c);
    color: white;
    font-family: "Roboto", sans-serif;
  }
  thead > tr {
    background-color: rgb(0, 133, 124, 0.7);
    background-color: ${(props) =>
      props.org ? "#3d9970" : "rgb(0, 133, 124, 0.7)"};
  }
  thead {
    height: 3rem;
    color: #fff;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
export const ScrollTbody = styled.tbody`
  // ::-webkit-scrollbar {
  //   width: 6px;
  // }
  // ::-webkit-scrollbar-track {
  //   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  // }
  // ::-webkit-scrollbar-thumb {
  //   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  // }
  display: block;
  overflow: scroll;
  margin-top: 5rem;
  height: 100vh;
`;

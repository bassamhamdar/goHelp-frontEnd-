import styled from "styled-components";

export const StyledTable = styled.table`
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 60%;
  margin-left: auto;
  margin-right: auto;

  border-collapse: collapse;
  border-collapse: separate;
  border-spacing: 5px 5px;

  caption-side: none;
  empty-cell: show | hide;
  empty-cell is a property of table or the cells themselves td,
  th {
    border: none;
  }

  td {
    padding: 5px;
    width: 20px;
    text-align: center;
  }
  tbody {
    display: block;
    overflow: scroll;
    height: 320px;
  }
  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
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
    width: calc(100% - 0.7em);
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

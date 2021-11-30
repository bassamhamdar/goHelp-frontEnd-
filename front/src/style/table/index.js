import styled from "styled-components";

export const StyledTable = styled.table`
  left: 50%;
  top: ${(props) => (props.Reg ? "80%" : "20%")};
  position: absolute;
  transform: translate(-50%, -50%);
  width: 50%;

  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
              text-bottom | middle | top | bottom | 
              <percentage> | <length> */

  td,
  th {
    border: none;
  }

  td {
    padding: 10px;
    width: 20px;
    text-align: center;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #3d9970;
    }
  }
  thead > tr {
    background-color: ${(props) => (props.org ? "#3d9970" : "#c2c2c2")};
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

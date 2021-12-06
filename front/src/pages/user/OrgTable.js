import React from "react";
import { ScrollTbody, StyledTable } from "../../style/table";
export const OrgTable = () => {
  return (
    <StyledTable org>
      <caption>Organizations in goHelp</caption>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>Name</th>
          <th>Activity</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>org 1</td>
          <td>org activity name</td>
          <td>email@gmail.com</td>
        </tr>
        <tr>
          <td>org 2</td>
          <td>org 2 activity name</td>
          <td>email@gmail.com</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

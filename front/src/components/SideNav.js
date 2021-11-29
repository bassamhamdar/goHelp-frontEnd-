import React, { useState } from "react";
import { SideBar, Link, Line, Menu, Burger } from "../style/adminSideNav";
export const SideNav = () => {
  const [width, setWidth] = useState("5%");
  const [display, setDisplay] = useState("none");
  const closeNav = () => {
    if (width === "5%") {
      setDisplay("");
      return setWidth("15%");
    }
    setDisplay("none");
    setWidth("5%");
  };
  return (
    <Menu width={width}>
      <Burger onClick={() => closeNav()}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Burger>
      <SideBar>
        <Link href="/admin/about" display={display}>
          About
        </Link>
        <Link href="/admin/faq" display={display}>
          FAQ
        </Link>
        <Link href="/admin/user" display={display}>
          Users
        </Link>
        <Link href="/admin/org" display={display}>
          Organizations
        </Link>
      </SideBar>
    </Menu>
  );
};

import React from "react";
import { Outlet } from "react-router-dom";
import Auth from "../components/context-api/Auth";

export default function Layout() {
  return (
    <>
        <Outlet />
    </>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="bg-slate-100 flex h-screen w-screen overflow-hidden">
      <SideBar />

      <div className="flex flex-col flex-1">
        <Header />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}

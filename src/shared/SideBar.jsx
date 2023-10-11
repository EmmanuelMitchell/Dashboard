import React from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/Index";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../lib/Index";
import { FcBullish } from "react-icons/fc";

import SideLinks from "./SideLinks";

export default function SideBar() {
  return (
    <aside className="bg-gray-700 flex flex-col w-52 h-screen text-white">
      <div className="flex justify-center items-center py-4  ">
        {/* <h4 className="font-mono"> B2B TestDashBoard</h4> */}
        <FcBullish fontSize={24} />
        <span className="text-neutral-200 text-lg p-2">B2B Test</span>
      </div>
      <div className="flex-1 ml-2">
        {DASHBOARD_SIDEBAR_LINKS.map((side) => (
          <SideLinks side={side} />
        ))}
      </div>

      <div>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((side) => (
          <SideLinks side={side} />
        ))}
      </div>
    </aside>
  );
}

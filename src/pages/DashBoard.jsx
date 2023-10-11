import React from "react";
import DashBoardCard from "../component/DashBoardCard";
import TractionChart from "../component/TractionChart";
import CustomerChart from "../component/CustomerChart";

export default function DashBoard() {
  return (
    <div className="flex flex-col gap-4">
      <DashBoardCard />
      <div className="flex mx-2 ">
        <TractionChart />
        {/* <CustomerChart /> */}
      </div>
    </div>
  );
}

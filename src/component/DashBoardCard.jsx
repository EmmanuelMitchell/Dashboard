import React from "react";
import WrapperCard from "./WrapperCard";

export default function DashBoardCard() {
  return (
    <div className="flex gap-4 w-full mt-2">
      <WrapperCard>
        <div className="flex flex-col items-center">
          <h4 className="font-mono text-xl">Total Pending</h4>
          <p>100</p>
        </div>
      </WrapperCard>
      <WrapperCard>
        <div className="flex flex-col items-center">
          <h4 className="font-mono text-xl">Total Pending</h4>
          <p>100</p>
        </div>
      </WrapperCard>
      <WrapperCard>
        <div className="flex flex-col items-center">
          <h4 className="font-mono text-xl">Total Pending</h4>
          <p>100</p>
        </div>
      </WrapperCard>
    </div>
  );
}

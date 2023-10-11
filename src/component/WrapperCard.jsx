import React from "react";

export default function WrapperCard({ children }) {
  return (
    <div className="bg-white rounded-sm flex-1 shadow-sm items-center py-10 mx-2 ">
      {children}
    </div>
  );
}

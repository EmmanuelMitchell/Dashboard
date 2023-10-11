import React from "react";
import { Link } from "react-router-dom";

export default function SideLinks({ side }) {
  return (
    <Link
      to={side.path}
      key={side.key}
      className="flex items-center gap-2 font-light text-white py-3 hover:bg-slate-500 hover:no-underline rounded-sm"
    >
      <spa className="flex flex-col items-center justify-center px-2">
        {side.icon}
      </spa>
      {side.label}
    </Link>
  );
}

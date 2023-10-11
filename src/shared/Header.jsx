import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-white h-16 rounded-sm shadow p-2">
      <div className="relative">
        <form>
          <input
            type="text"
            placeholder="searching..."
            className="text-sm focus:outline-none active:outline-none h-10 w-[15rem] border border-gray-900 rounded-md pl-3"
          />
        </form>
      </div>
      <div>
        <span>example@gmail.com</span>
        <span className="bg-gray-500 text-white rounded-full w-20 px-4 py-5 m-2">
          Image
        </span>
      </div>
    </div>
  );
}

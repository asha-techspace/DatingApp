import React from "react";
import { LeftBar, RightBar } from "../Components";
import { Outlet } from "react-router-dom";
import { HomePage } from "../pages";

const DesktopLayout = () => {
  return (
    <div className="flex">
      <aside className="w-1/5 hidden sm:block bg-deep-plum ">
        <LeftBar />
      </aside>

      <main className="w-full relative sm:w-3/5 sm:px-10 lg:px-40 bg-white">
        <HomePage />
      </main>

      <aside className="w-1/5 hidden sm:block bg-deep-plum">
        <RightBar />
      </aside>
    </div>
  );
};
export default DesktopLayout;

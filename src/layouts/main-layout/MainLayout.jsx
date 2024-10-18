import React, { useState } from "react";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <TopNav setShowMenu={setShowMenu} showMenu={showMenu} />
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <Sidebar showMenu={showMenu} />
          <Outlet />
        </div>
      </div>
    </>
  );
}

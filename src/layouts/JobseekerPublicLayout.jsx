import React from "react";
import Topbar from "../components/Employer/Topbar";
import { Outlet } from "react-router-dom";

const JobseekerPublicLayout = () => {
  return (
    <div className="w-screen  flex flex-col overflow-hidden bg-gray-50">
      {/* Fixed Topbar */}
      <div className="fixed top-0 left-0 w-screen z-10 bg-white shadow-sm">
        <Topbar />
      </div>

      {/* Main area fills below Topbar */}
      <main className="flex-1 mt-20 overflow-hidden pb-8">
        <Outlet />
      </main>
    </div>
  );
};

export default JobseekerPublicLayout;

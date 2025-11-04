import React from "react";
import Topbar from "../components/Employer/Topbar";
import { Outlet } from "react-router-dom";

const JobseekerLayout = () => {
  return (
    <div className="w-screen max-w-screen  overflow-x-hidden">
      <Topbar></Topbar>
      <main className="overscroll-auto grow">
         <Outlet></Outlet>
      </main>
    </div>
  );
};

export default JobseekerLayout;

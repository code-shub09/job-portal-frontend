import React from "react";
import Topbar from "../components/Employer/Topbar";
import { Outlet } from "react-router-dom";
import JobseekerNavbar from "../components/JobSeekar.jsx/JobseekerNavbar";

const JobseekerLayout = () => {
  return (
    <div className="w-screen max-w-screen  overflow-x-hidden">
      <JobseekerNavbar></JobseekerNavbar>
      <main className="overscroll-auto grow">
         <Outlet></Outlet>
      </main>
    </div>
  );
};

export default JobseekerLayout;




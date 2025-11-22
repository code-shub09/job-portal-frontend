import React, { useState } from "react";
import Login from "../pages/public/Login";
import Navbar2 from "../components/public/Navbar2";
import JobseekarRegister from "../pages/public/JobseekarRegister";
import Register from "../pages/Employer/Register";
// import Signup from "../pages/public/Signup"; // optional if you have one

const PublicLayout = () => {
  const [activeRole, setActiveRole] = useState("jobseeker");
  const [authOption, setAuthOption] = useState("");

  return (
    <div>
      {/* Navbar */}
      <Navbar2
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        setAuthOption={setAuthOption}
      />

      {/* Conditionally Render Login / Signup */}
      <div className="mt-10">
        {authOption === "login" && <Login activeRole={activeRole} />}

        {authOption === "signup" && (
          <>
            {activeRole === "jobSeeker" ? (
               <JobseekarRegister></JobseekarRegister>
            ) : (
              <Register></Register>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PublicLayout;

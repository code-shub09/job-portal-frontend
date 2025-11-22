import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import ForgotPass1 from "./components/ForgotPass1";
import ResetPass from "./pages/public/ResetPass";
import EmployerLayout from "./layouts/EmployerLayout";
import Dashboard from "./pages/Employer/Dashboard";
import Jobpost from "./pages/Employer/Jobpost";
import ManageJobs from "./pages/Employer/ManageJobs";
import JobDetails from "./pages/Employer/JobDetails";
import SingleJobDetails from "./pages/Employer/SingleJobDetails";
import EditPage from "./pages/Employer/EditPage";
import Package from "./pages/Employer/Package";
import Register from "./pages/Employer/Register";
import SkillsInput from "./components/Employer/SkillsInput";
import SkillsInput2 from "./components/Employer/SkillsInput2";
import JobseekerLayout from "./layouts/JobseekerLayout";
import Home from "./pages/Jobseekar/Home";
import JobSearchBar from "./components/JobSeekar.jsx/JobSearchBar";
import JobSearch from "./pages/Jobseekar/JobSearch";
import JobDetail from "./pages/Jobseekar/JobDetail";

import "react-quill-new/dist/quill.snow.css";
import RegisterPage from "./pages/Jobseekar/Register";
import JobseekarRegister from "./pages/public/JobseekarRegister";
import JobseekerPublicLayout from "./layouts/JobseekerPublicLayout";
import Profile from "./pages/Jobseekar/Profile";

import { ProtectedRoute } from "./context/ProtectedRoute";
import InterviewScheduler from "./components/Employer/InterviewScheduler";
import JobDetailsPage1 from "./components/Employer/JobDetailsPage1";
import InterviewDateManager from "./components/Employer/InterviewDateManager";
import OnetooneSlotBook from "./pages/Employer/OnetooneSlotBook";
import AplplySucess1 from "./pages/Jobseekar/AplplySucess1";
import SingleApplicationDetails from "./pages/Jobseekar/SingleApplicationDetails";
import AllApplication from "./pages/Employer/AllApplication";
// import { ProtectedRoute } from "./context/AuthContext";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/public" element={<PublicLayout></PublicLayout>}></Route>
          <Route path="/all-application" element={<AllApplication></AllApplication>}></Route>
          <Route element={<EmployerLayout></EmployerLayout>}>
            <Route path="/" element={<JobDetailsPage1></JobDetailsPage1>}></Route>
            
            <Route path="/post-job" element={<Jobpost></Jobpost>}></Route>
            <Route
              path="/jobs/manage"
              element={<ManageJobs></ManageJobs>}
            ></Route>
            <Route
              path="/jobs/details"
              element={<JobDetails></JobDetails>}
            ></Route>
            <Route path="/jobs/edit/:jobId" element={<EditPage></EditPage>} />
            <Route
              path="/jobs/:jobId"
              element={<SingleJobDetails></SingleJobDetails>}
            ></Route>
            <Route path="/jobs/schedule-interview" element={<OnetooneSlotBook></OnetooneSlotBook>}></Route>
            <Route path="/packages" element={<SkillsInput></SkillsInput>}>
              {" "}
            </Route>
          </Route>
          <Route path="registerx" element={<Register></Register>}></Route>
          {/* jobseekar */}

          <Route element={<JobseekerLayout></JobseekerLayout>}>
            <Route path="/jobseekar" element={<Home></Home>}></Route>
             <Route path="/jobseekar/application-details" element={<SingleApplicationDetails></SingleApplicationDetails>}></Route>
            <Route path="/jobseekar/application-success" element={<AplplySucess1></AplplySucess1>}></Route>
            <Route
              path="/jobseekar/job-search"
              element={<JobSearch></JobSearch>}
            ></Route>
            <Route
              path="/jobseekar/profile"
              element={<Profile></Profile>}
            ></Route>
            <Route
              path="/jobseekar/job-search/:id"
              element={<JobDetail></JobDetail>}
            ></Route>
            <Route
              path="/jobseekar/register"
              element={<JobseekarRegister></JobseekarRegister>}
            ></Route>
          </Route>
          <Route element={<JobseekerPublicLayout></JobseekerPublicLayout>}>
            <Route
              path="/registerz"
              element={<JobseekarRegister></JobseekarRegister>}
            ></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

{
  /* <Route path='/' element={<PublicLayout></PublicLayout>}></Route>
          <Route path='/reset-password/:token' element={<ResetPass></ResetPass>} ></Route>
           <Route path='/forgotPassword' element={<ForgotPass1></ForgotPass1>} ></Route> */
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import PublicLayout from './layouts/PublicLayout'
import ForgotPass1 from './components/ForgotPass1';
import ResetPass from './pages/public/ResetPass';
import EmployerLayout from './layouts/EmployerLayout';
import Dashboard from './pages/Employer/Dashboard';
import Jobpost from './pages/Employer/Jobpost';
import ManageJobs from './pages/Employer/ManageJobs';
import JobDetails from './pages/Employer/JobDetails';
import SingleJobDetails from './pages/Employer/SingleJobDetails';
import EditPage from './pages/Employer/EditPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HashRouter>
        <Routes>
         
          <Route  element={<EmployerLayout></EmployerLayout>}>
               <Route path='/' element={<Dashboard></Dashboard>}></Route>
               <Route path='/post-job' element={<Jobpost></Jobpost>}></Route>
               <Route path='/jobs/manage' element={<ManageJobs></ManageJobs>}></Route>
               <Route path='/jobs/details' element={<JobDetails></JobDetails>} ></Route>
               <Route path='/jobs/edit/:jobId' element={<EditPage></EditPage>} />
               <Route path='/jobs/:jobId' element={<SingleJobDetails></SingleJobDetails>} ></Route>
               <Route path="/package" element={}>

          </Route>
          
        </Routes>
     
     </HashRouter>
    </>
  )
}

export default App


{/* <Route path='/' element={<PublicLayout></PublicLayout>}></Route>
          <Route path='/reset-password/:token' element={<ResetPass></ResetPass>} ></Route>
           <Route path='/forgotPassword' element={<ForgotPass1></ForgotPass1>} ></Route> */}
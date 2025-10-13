import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import PublicLayout from './layouts/PublicLayout'
import ForgotPass1 from './components/ForgotPass1';
import ResetPass from './pages/public/ResetPass';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HashRouter>
        <Routes>
          <Route path='/' element={<PublicLayout></PublicLayout>}></Route>
          <Route path='/reset-password/:token' element={<ResetPass></ResetPass>} ></Route>
           <Route path='/forgotPassword' element={<ForgotPass1></ForgotPass1>} ></Route>
          <Route path='/dashboard'></Route>
          
        </Routes>
     
     </HashRouter>
    </>
  )
}

export default App

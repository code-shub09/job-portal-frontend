import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from './layouts/PublicLayout'
import ForgotPass1 from './components/ForgotPass1';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicLayout></PublicLayout>}></Route>
           <Route path='/forgotPassword' element={<ForgotPass1></ForgotPass1>} ></Route>
          <Route path='/dashboard' ></Route>
          
        </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App

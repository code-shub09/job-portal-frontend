import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountSetup = ({FormData,setFormData,setStepNum}) => {
    const [errors, setErrors] = useState({});
    const navigate= useNavigate();
    function handleChange(e){
        console.log(e.target.value);
        setFormData({...FormData,[e.target.name]:e.target.value})
        console.log('form data:',FormData);

    }

    function validate(){
        let newError={};
        if(!(FormData.password ?? "").trim()){
            newError.password='Enter password with atleast 8 digit'
        }
        if(!(FormData.confirmPassword ?? "").trim()){
            newError.confirmPassword='Enter confirm password'
        }
        if((FormData.confirmPassword.trim()!= FormData.password.trim())){
            newError.confirmPassword='confirm password do not match'
        }
        setErrors(newError);
        return Object.keys(newError).length === 0;        
    }
   async function createAccount(){
        if(validate()){
          try {
             const res=await axios.post('https://job-portal-server-lr93.onrender.com/employer/register',FormData,{withCredentials:true,headers:{"Content-Type":"application/json"}});
             console.log(res);
            console.log('account created',FormData);
            navigate('/post-job');
            return;
            
          } catch (error) {
            console.log(error);
          }
           
        }

        console.log('error',errors);
    }

    function handleBack(){
        setStepNum(2);
        
        return;
    }
  return (
    <div className="flex w-[80%] rounded-lg m-auto shadow-sm flex-col gap-2 border contact-container border-gray-200">
      {/* title */}
      <div>
        <p className="text-lg font-semibold">Account Setup</p>
        <p className="text-sm font-normal text-gray-500">Create your account credentials</p>
      </div>
      {/* password */}
      <div>
        <label htmlFor="">Password*</label>
        <input type="password"  name="password" value={FormData.password} onChange={(e)=>{handleChange(e)}}/>
          {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>
      {/* confirm password */}
      <div>
        <label htmlFor="">Confirm password</label>
        <input type="text"  name="confirmPassword" value={FormData.confirmPassword} onChange={(e)=>{handleChange(e)}} />
          {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>
      <div>
        <div className="flex gap-3 ">
          <div className="rounded-full w-4 h-4 border"></div>
          <div>
            <p className="font-semibold text-lg/3">I accept the terms and conditions*</p>
            <p className="text-sm/8  font-normal text-gray-500">
              By resgistering, you agree to our Terms of service and Privacy
              Policy{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <button className="flex-1 border border-gray-300 p-3 rounded-xl cursor-pointer" onClick={handleBack}>
            back
          </button>
          <button className="flex-1 border border-gray-500 p-3 rounded-xl bg-blue-500 text-white cursor-pointer" onClick={createAccount}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;

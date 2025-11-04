import React, { useState } from "react";

const ContactDetails = ({FormData,setFormData,setStepNum}) => {
  const [errors, setErrors] = useState({});
  function handleChange(e){
    setFormData({...FormData,[e.target.name]:e.target.value});
  }

   function validate() {
    let newError = {};
    if (!(FormData.contactName ?? "").trim()) {
      newError.contactName = "Contact name is required";
    }
    if (!(FormData.designation ?? "").trim()) {
      newError.designation = "Designation is required";
    }

   if (!(FormData.email ?? "").trim()) {
      newError.email = "Email is required";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(FormData.email)) {
        newError.email = "Enter a valid email address";
      }
    }
    if (!(FormData.phone ?? "").trim()) {
      newError.phone = "Phone Number is required";
    }

    

    setErrors(newError);
    //   chechking whether the newError is empty or not  , so that we can continue to next form if newerror is empty
    return Object.keys(newError).length === 0;
  }
   function handleOnContinue() {
     if (validate()) {
      setStepNum(2);
      return;
    }
  }
  return (
    <div className="flex w-[80%] rounded-lg m-auto shadow-sm flex-col gap-2 border contact-container border-gray-200">
      <div>
        <p className="font-semibold text-xl">Contact Details</p>
        <p>Provide your contact information</p>
      </div>
      <div>
        <label>Contact Person Name *</label>

        <input type="text" className="rounded-sm w-full" name="contactName" value={FormData.contactName} onChange={handleChange} />
         {errors.contactName && (
          <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>
        )}
      </div>
      <div>
        <label htmlFor="">Designation*</label>
        <input type="text" className="rounded-sm w-full" name="designation" value={FormData.designation} onChange={handleChange}/>
         {errors.designation && (
          <p className="text-red-500 text-sm mt-1">{errors.designation}</p>
        )}
      </div>
      <div>
        <label>Email *</label>
        <input
          type="email"
          placeholder="abc@company.com"
          className="border border-gray-200 bg-gray-200 rounded-sm w-full"
          name="email"
          value={FormData.email}
          onChange={handleChange}
        />
           {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <div>
        <label>Phone Number *</label>
        <input type="number" name="phone"  value={FormData.phone} id="" onChange={handleChange} />
         {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <button
          className="bg-blue-400 p-2 rounded-lg cursor-pointer"
          onClick={handleOnContinue}
        >
          continue
        </button>
      </div>
      
    </div>
  );
};

export default ContactDetails;

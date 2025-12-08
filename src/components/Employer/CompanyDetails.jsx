import React, { use, useState } from "react";
import UploadLogo from "./UploadLogo";

const industries = [
  "Information Technology",
  "Finance & Banking",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Retail & E-commerce",
  "Hospitality & Tourism",
  "Construction",
  "Transportation & Logistics",
  "Marketing & Advertising",
  "Consulting",
  "Telecommunications",
  "Energy & Utilities",
  "Government & Public Sector",
  "Real Estate",
  "Other",
];

const CompanyDetails = ({ FormData, setFormData, setStepNum ,setLogoFile}) => {
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    // console.log("form value:", e.target.value);
    setFormData({ ...FormData, [e.target.name]: e.target.value });
    // console.log("data:", FormData);
  }

  function validate() {
    let newError = {};
    if (!(FormData.companyName ?? "").trim()) {
      newError.companyName = "Company name is required";
    }
    if (!(FormData.companyDescription ?? "").trim()) {
      newError.companyDescription = "Company description is required";
    }

    if (!(FormData.address ?? "").trim()) {
      newError.address = "Company address is required";
    }
    if (!(FormData.city ?? "").trim()) {
      newError.city = "Company city is required";
    }

    // ✅ Website validation
    if (FormData.website) {
      const websitePattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;
      if (!websitePattern.test(FormData.website.trim())) {
        newError.website =
          "Enter a valid website URL (e.g. https://example.com)";
      }
    }

    setErrors(newError);
    //   chechking whether the newError is empty or not  , so that we can continue to next form if newerror is empty
    return Object.keys(newError).length === 0;
  }
  function handleOnContinue() {
    if (validate()) {
      setStepNum(3);
      return;
    }
  }
  return (
    <div className="flex w-full rounded-lg m-auto shadow-sm flex-col gap-2 border contact-container border-gray-200">
      {/* tilte */}
      <div>
        <p className="text-lg font-semibold">Company Information</p>
        <p className="text-sm font-normal text-gray-500">
          Tell us about Your company
        </p>
      </div>
      {/* company  name */}
      <div>
        <label>Company Name*</label>
        <input
          type="text"
          name="companyName"
          value={FormData.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
          required
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
        )}
      </div>
      {/* company description */}
      <div>
        <label htmlFor="">Company Description*</label>
        <input
          type="text"
          name="companyDescription"
          value={FormData.companyDescription}
          onChange={handleChange}
          placeholder="Enter your company description"
          required
        />
        {errors.companyDescription && (
          <p className="text-red-500 text-sm mt-1">
            {errors.companyDescription}
          </p>
        )}
      </div>
      {/* industry */}
      <div>
        <label htmlFor=""> Industry *</label>
        <select
          name="industry"
          value={FormData.industry}
          onChange={handleChange}
          required
        >
          <option value="">select Industry</option>
          {industries.map((industry, index) => {
            return (
              <option value={industry} key={index}>
                {industry}
              </option>
            );
          })}
        </select>
      </div>
      {/* company website */}
      <div>
        <label htmlFor="">Company website</label>
        <input
          type="url"
          name="website"
          value={FormData.website}
          onChange={handleChange}
          placeholder="https://www.example.com"
        />
        {errors.website && (
          <p className="text-red-500 text-sm mt-1">{errors.website}</p>
        )}
      </div>
      {/* address */}
      <div>
        <label>Address *</label>
        <input
          type="text"
          name="address"
          value={FormData.address}
          onChange={handleChange}
          required
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>
      <div className="flex justify-between">
        <div>
          <label>City *</label>
          <input
            type="text"
            name="city"
            value={FormData.city}
            onChange={handleChange}
            required
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>
      </div>
      {/* company logo */}
      <UploadLogo setLogoFile={setLogoFile}></UploadLogo>

      {/* continue button  */}

      
      <div>
        <div className="flex justify-content gap-5">
          <button className="border border-gray-300 flex-1 p-2 rounded-lg cursor-pointer">back</button>
          <button className=" flex-1 bg-blue-400 p-2 rounded-lg cursor-pointer" onClick={handleOnContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;

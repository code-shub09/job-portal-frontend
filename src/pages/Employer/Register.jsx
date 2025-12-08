import React, { useState } from "react";
import Steps from "../../components/Employer/Steps";
import ContactDetails from "../../components/Employer/ContactDetails";
import CompanyDetails from "../../components/Employer/CompanyDetails";
import AccountSetup from "../../components/Employer/AccountSetup";
import NavPublic from "../../components/Employer/NavPublic";

let stepsList = [
  { stepNum: "1", stepDetail: "Contact Details", iscompleted: true },
  { stepNum: "2", stepDetail: "Company Info", iscompleted: false },
  { stepNum: "3", stepDetail: "Account Setup", iscompleted: false },
];

const Register = () => {
  const [StepNum, setStepNum] = useState(1);
  console.log("register:", StepNum);
  const [FormData, setFormData] = useState({
    companyName: "",
    companyDescription: "",
    website: "",
    contactName: "",
    industry: "",
    designation: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [logoFile, setLogoFile] = useState(null);

  // const [companyName, setCompanyName] = useState("");
  // const [description, setDescription] = useState("");
  // const [logoFile, setLogoFile] = useState(null);
  // const [industry, setIndustry] = useState("");
  // const [website, setWebsite] = useState("");
  // const [contactName,setContactName]=useState("");
  // const [designation,setDesignation] =useState("");
  // const [email,setEmail]=useState("");
  // const [phone,setPhone]=useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [password,setPassword]=useState('');
  // const [confirmPassword,setConfirmPassword] =useState('');

  return (
    <>
      <div className="w-full ">
        
      <div className="mt-8 w-[60%] m-auto  ">
        {/* title */}
        <div className="text-center">
          <p className="text-3xl font-bold">Employer Registration</p>
          <p className="text-base/9 font-normal text-gray-500">
            Join our team and connect with talented professionals
          </p>
        </div>
        <div className="">
         <div className="w-[60%] m-auto rounded-3xl">
           <Steps
            stepsList={stepsList}
            StepNum={StepNum}
            setStepNum={setStepNum}
          ></Steps>
          <div className="mt-8">
            {StepNum == 1 && (
              <ContactDetails
                FormData={FormData}
                setFormData={setFormData}
                setStepNum={setStepNum}
              ></ContactDetails>
            )}
            {StepNum == 2 && (
              <CompanyDetails
                FormData={FormData}
                setFormData={setFormData}
                setStepNum={setStepNum}
                setLogoFile={setLogoFile}
              ></CompanyDetails>
            )}
            {StepNum == 3 && (
              <AccountSetup
                FormDataDetails={FormData}
                setFormData={setFormData}
                setStepNum={setStepNum}
                logoFile={logoFile}
              ></AccountSetup>
            )}
          </div>
         </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default Register;

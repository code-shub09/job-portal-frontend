import React, { useState } from "react";
import RegistrationProgress from "../../components/JobSeekar.jsx/RegistrationProgres";
import ProfileTypeStep from "../../components/JobSeekar.jsx/ProfileTypeStep";
import PreferencesStep from "../../components/JobSeekar.jsx/PreferencesStep";
import JobPreferencesStep from "../../components/JobSeekar.jsx/JobPreferencesStep";
import JobSeekerRegisterStep1 from "../../components/JobSeekar.jsx/JobSeekerRegisterStep1";
import CreateAccountForm from "../../components/JobSeekar.jsx/CreateAccountForm";
import VerifyEmailModal from "../../components/JobSeekar.jsx/VerifyEmailModal";

const JobseekarRegister = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const [IsverifyEmailClicked, setIsverifyEmailClicked] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <div className="h-full flex w-[88%] mx-auto mt-6 gap-x-4 overflow-hidden">
      {/* Left progress bar (fixed column) */}
      <div className="w-1/4 h-full overflow-y-auto">
        <RegistrationProgress currentStep={currentStep} />
      </div>

      {/* Right form area — scrolls internally */}
      <div className="flex-1 h-full overflow-y-auto pr-2">
        {currentStep == 1 && (
          <CreateAccountForm
            setIsverifyEmailClicked={setIsverifyEmailClicked}
            form={form} 
            setForm={setForm}
          
          ></CreateAccountForm>
        )}
        {IsverifyEmailClicked && (
          <VerifyEmailModal
            
            data={form}
            setcurrentStep={setcurrentStep}
            setIsverifyEmailClicked={setIsverifyEmailClicked}
            
          ></VerifyEmailModal>
        )}
        {currentStep == 2 && <ProfileTypeStep></ProfileTypeStep>}
        {currentStep == 3 && <JobPreferencesStep></JobPreferencesStep>}
      </div>
    </div>
  );
};

export default JobseekarRegister;

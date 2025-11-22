import React, { useState } from "react";
import InterviewStyleSelector from "./InterviewStyleSelector";
import AvailabilityWindow from "./AvailabilityWindow";
import { Form } from "react-router-dom";

const InterviewScheduler = () => {
  const [interviewType, setInterviewType] = useState("fixed");
  const [interviewMode, setInterviewMode] = useState("online");
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    interviewDate: "",
    interviewTime: "",
    startDate: "",
    endDate: "",
    timeFrom: "",
    timeTo: "",
    maxSlots: "",
    meetingLink: "",
    location: "",
    notes: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveSettings = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">

      {/* ✅ Header */}
     {/* <InterviewStyleSelector></InterviewStyleSelector>
     <AvailabilityWindow></AvailabilityWindow> */}

     
    </div>
  );
};

export default InterviewScheduler;



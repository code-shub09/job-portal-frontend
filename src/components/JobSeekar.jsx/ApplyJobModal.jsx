

// import React, { useState } from "react";
// import { X, UploadCloud } from "lucide-react";
// import axios from "axios";
// import useApplyJob from "../../hooks/useApplyJob";
// import { useNavigate } from "react-router-dom";
// import { ApplicationSuccess } from "./ApplicationSuccess";

// export default function ApplyJobModal({
//   job,
//   resumePdf = null,
//   setIsApplyClicked,
// }) {
//   console.log("apply:", resumePdf);
//   const [selectedResume, setSelectedResume] = useState(null);
//   const [uploadResume, setUploadResume] = useState(null);

//   const [isFresher, setIsFresher] = useState(false);

//   const [coverLetter, setCoverLetter] = useState("");
//   const [phone, setPhone] = useState("");
//   const [experience, setExperience] = useState(""); // years
//   const [ctc, setCtc] = useState(""); // number only
//   const [ctcType, setCtcType] = useState("yearly"); // yearly or monthly
//   const [noticePeriod, setNoticePeriod] = useState("");
//   const [alreadyApplied] = useState(false);
//   const [IsApplysucess, setIsApplysucess] = useState(false);
//   // ────────────────────────────────────────────────
//   // HANDLE NEW RESUME UPLOAD
//   // ────────────────────────────────────────────────
//   function handleFileUpload(e) {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploadResume(file);
//     setSelectedResume({ type: "new", data: file });
//   }
//   console.log("job id", job._id);
//   const navigate = useNavigate();
//   function afterSucess(data) {
//     // close modal
//     setIsApplyClicked(false);
//     navigate("/jobseekar/application-success");
//   }
//   const { mutate, isSuccess } = useApplyJob(afterSucess);

//   // ────────────────────────────────────────────────
//   // SUBMIT APPLICATION
//   // ────────────────────────────────────────────────
//   async function submitHandler() {
//     if (!selectedResume) {
//       alert("Please select or upload a resume");
//       return;
//     }

//     let form = new FormData();
//     form.append("jobId", job._id);
//     form.append("coverLetter", coverLetter);
//     form.append("phone", phone);

//     form.append("isFresher", isFresher);
//     form.append("noticePeriod", isFresher ? 0 : noticePeriod);

//     // EXPERIENCE + CTC ONLY IF NOT FRESHER
//     if (!isFresher) {
//       form.append("experience", experience);

//       let formattedCTC = ctcType === "monthly" ? `${ctc}K/month` : `${ctc} LPA`;

//       form.append("ctc", formattedCTC);
//     } else {
//       form.append("experience", 0);
//       form.append("ctc", "0");
//     }

//     // CASE 1: Upload new resume
//     if (selectedResume.type === "new") {
//       form.append("resume_type", "upload");
//       form.append("resume", selectedResume.data);
//     }

//     // CASE 2: Use existing stored resume
//     if (selectedResume.type === "stored") {
//       form.append("resume_type", "existing");
//       form.append("resume_name", selectedResume.data.name);
//       form.append("resume_url", selectedResume.data.url);
//     }
//     console.log("application1-submit modalapply");
//     mutate(form);
   
//   }

//   // Helpers
//   const isSelected = (r) => selectedResume?.data?.name === r?.name;
//   const formatKB = (b) => `${(b / 1024).toFixed(1)} KB`;
//   const formatMB = (b) => `${(b / 1024 / 1024).toFixed(2)} MB`;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
//       <div className="bg-white w-full max-w-lg rounded-xl shadow-xl overflow-hidden border">
//         {/* HEADER */}

//         <div className="flex justify-between items-center mb-4 p-6 pb-0">
//           <h2 className="text-lg font-semibold">Apply for this Job</h2>
//           <button onClick={() => setIsApplyClicked(false)}>
//             <X className="text-gray-500 hover:text-gray-700" />
//           </button>
//         </div>

//         {/* BODY */}
//         <div className="max-h-[70vh] overflow-y-scroll scrollbar-hide p-6 pt-4">
//           {/* JOB INFO */}
//           <div className="p-4 border rounded-lg mb-5 bg-gray-50">
//             <p className="font-semibold">{job?.title}</p>
//             <p className="text-sm text-gray-600">{job?.postedBy.companyName}</p>
//             <p className="text-sm text-gray-600">{job?.postedBy.companyCity}</p>
//           </div>

//           {/* RESUME SECTION */}
//           <h3 className="font-medium mb-2">Select Resume</h3>

//           <div className="space-y-3 mb-4">
//             {/* STORED RESUME */}
//             {resumePdf && (
//               <div
//                 onClick={() =>
//                   setSelectedResume({ type: "stored", data: resumePdf })
//                 }
//                 className={`border p-4 rounded-lg cursor-pointer flex justify-between items-center relative ${
//                   isSelected(resumePdf)
//                     ? "border-blue-500 bg-blue-50"
//                     : "border-gray-300 bg-gray-50 hover:bg-gray-100"
//                 }`}
//               >
//                 <span className="absolute top-1 left-2 text-[10px] font-semibold text-gray-600">
//                   Stored Resume
//                 </span>

//                 <div className="mt-3">
//                   <p className="font-medium">{resumePdf.name}</p>
//                   <p className="text-xs text-gray-500">
//                     {formatKB(resumePdf.size)}
//                   </p>
//                 </div>

//                 {isSelected(resumePdf) && (
//                   <span className="text-blue-600 font-semibold text-sm">
//                     Selected
//                   </span>
//                 )}
//               </div>
//             )}

//             {/* NEW UPLOADED RESUME */}
//             {uploadResume && (
//               <div
//                 onClick={() =>
//                   setSelectedResume({ type: "new", data: uploadResume })
//                 }
//                 className={`border p-4 rounded-lg cursor-pointer flex justify-between items-center relative ${
//                   isSelected(uploadResume)
//                     ? "border-blue-500 bg-blue-50"
//                     : "border-green-500 bg-green-50 hover:bg-green-100"
//                 }`}
//               >
//                 <span className="absolute top-1 left-2 text-[10px] font-semibold text-green-700">
//                   New Upload
//                 </span>

//                 <div className="mt-3">
//                   <p className="font-medium">{uploadResume.name}</p>
//                   <p className="text-xs text-gray-600">
//                     {formatMB(uploadResume.size)}
//                   </p>
//                 </div>

//                 {isSelected(uploadResume) && (
//                   <span className="text-blue-600 font-semibold text-sm">
//                     Selected
//                   </span>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* UPLOAD NEW RESUME */}
//           <div className="p-5 border-2 border-dashed rounded-lg text-center mb-5 cursor-pointer hover:bg-gray-50">
//             <label htmlFor="resume1" className="cursor-pointer">
//               <UploadCloud className="mx-auto text-gray-500 mb-2" />
//               <p className="text-sm text-gray-600">Upload New Resume</p>
//               <p className="text-xs text-gray-400">PDF, DOC, DOCX up to 10MB</p>
//             </label>
//             <input
//               type="file"
//               id="resume1"
//               accept=".pdf,.doc,.docx"
//               className="hidden"
//               onChange={handleFileUpload}
//             />
//           </div>

//           {/* COVER LETTER */}
//           <label className="block font-medium mb-1">
//             Cover Letter (Optional)
//           </label>
//           <textarea
//             value={coverLetter}
//             onChange={(e) => setCoverLetter(e.target.value)}
//             className="w-full border rounded-lg p-3 mb-5 h-28 resize-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Write a short cover letter..."
//           />

//           {/* ADDITIONAL DETAILS */}
//           <h3 className="font-medium mb-2">Additional Details</h3>

//           <div className="space-y-3 mb-4">
//             {/* PHONE */}
//             <input
//               type="text"
//               placeholder="Phone Number *"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full border rounded-lg p-3"
//             />

//             {/* ✔️ NEW: FRESHER CHECKBOX */}
//             <label className="flex items-center gap-2 text-sm font-medium">
//               <input
//                 type="checkbox"
//                 checked={isFresher}
//                 onChange={() => setIsFresher(!isFresher)}
//               />
//               I am a Fresher
//             </label>

//             {/* EXPERIENCE — Option 2 (shows "4+ years") */}
//             {!isFresher && (
//               <>
//                 <div className="relative">
//                   <input
//                     type="number"
//                     min="0"
//                     placeholder="e.g. 2+ years"
//                     value={experience}
//                     onChange={(e) => setExperience(e.target.value)}
//                     className="w-full border rounded-lg p-3 pr-24"
//                   />
//                   {experience && (
//                     <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm">
//                       {experience}+ years
//                     </span>
//                   )}
//                 </div>

//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Notice Period (e.g., 30 Days)"
//                     value={noticePeriod}
//                     onChange={(e) => setNoticePeriod(e.target.value)}
//                     className="w-full border rounded-lg p-3"
//                   />
//                 </div>
//               </>
//             )}

//             {/* CTC */}
//             {!isFresher && (
//               <div className="flex gap-3">
//                 {/* CTC INPUT → K or LPA */}
//                 <div className="relative w-full">
//                   <input
//                     type="number"
//                     placeholder={
//                       ctcType === "monthly"
//                         ? "e.g. 25 (in K)"
//                         : "e.g. 6 (in Lakhs)"
//                     }
//                     value={ctc}
//                     onChange={(e) => setCtc(e.target.value)}
//                     className="w-full border rounded-lg p-3 pr-24"
//                   />

//                   <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 text-sm">
//                     {ctcType === "monthly" ? "K" : "LPA"}
//                   </span>
//                 </div>

//                 {/* CTC TYPE DROPDOWN */}
//                 <select
//                   value={ctcType}
//                   onChange={(e) => setCtcType(e.target.value)}
//                   className="border rounded-lg p-3"
//                 >
//                   <option value="yearly">Per Year (LPA)</option>
//                   <option value="monthly">Per Month (K)</option>
//                 </select>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="p-4 border-t bg-gray-50">
//           <button
//             disabled={alreadyApplied}
//             onClick={submitHandler}
//             className={`w-full py-2 rounded-lg font-medium text-white ${
//               alreadyApplied
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             Submit Application
//           </button>

//           <button
//             onClick={() => setIsApplyClicked(false)}
//             className="mt-2 w-full text-center text-gray-600 hover:text-gray-800"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { X, UploadCloud } from "lucide-react";
import useApplyJob from "../../hooks/useApplyJob";
import { useNavigate } from "react-router-dom";

export default function ApplyJobModal({
  job,
  resumePdf = null,
  setIsApplyClicked,
  profile, // <-- IMPORTANT: pass jobseeker profile from parent
}) {
  const [selectedResume, setSelectedResume] = useState(null);
  const [uploadResume, setUploadResume] = useState(null);

  const [isFresher, setIsFresher] = useState(false);

  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");

  // Experience Fields
  const [experience, setExperience] = useState("");
  const [ctc, setCtc] = useState("");
  const [ctcType, setCtcType] = useState("yearly");
  const [noticePeriod, setNoticePeriod] = useState("");

  // Fresher → Education Snapshot Fields
  const [educationForm, setEducationForm] = useState({
    courseName: "",
    specialization: "",
    collegeName: "",
    graduationYear: "",
  });

  const navigate = useNavigate();

  // Prefill education for fresher from profile
  useEffect(() => {
    if (!profile) return;

    setPhone(profile.phoneNo || "");

    const edu = profile.education || {};
    const pg = edu.postgraduation;
    const grad = edu.graduation;
    const hsc = edu.class12th;

    if (pg?.courseName) {
      setEducationForm({
        courseName: pg.courseName || "",
        specialization: pg.specailaisation || "",
        collegeName: pg.collegeName || "",
        graduationYear: pg.courseDuration?.endYear || "",
      });
    } else if (grad?.courseName) {
      setEducationForm({
        courseName: grad.courseName || "",
        specialization: grad.specialization || "",
        collegeName: grad.collegeName || "",
        graduationYear: grad.courseDuration?.endYear || "",
      });
    } else if (hsc?.boardName) {
      setEducationForm({
        courseName: "12th",
        specialization: "",
        collegeName: hsc.boardName || "",
        graduationYear: hsc.passingYear || "",
      });
    }
  }, [profile]);

  const afterSuccess = () => {
    setIsApplyClicked(false);
    navigate("/jobseekar/application-success");
  };

  const { mutate } = useApplyJob(afterSuccess);

  // Upload resume
  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setUploadResume(file);
    setSelectedResume({ type: "new", data: file });
  }

  // Submit Handler
  async function submitHandler() {
    if (!selectedResume) {
      alert("Please select or upload a resume");
      return;
    }

    let form = new FormData();
    form.append("jobId", job._id);
    form.append("coverLetter", coverLetter);
    form.append("phone", phone);
    form.append("isFresher", isFresher);

    // If fresher → include education snapshot
    if (isFresher) {
      form.append("education_courseName", educationForm.courseName);
      form.append("education_specialization", educationForm.specialization);
      form.append("education_collegeName", educationForm.collegeName);
      form.append("education_graduationYear", educationForm.graduationYear);

      form.append("experience", 0);
      form.append("ctc", "0");
      form.append("noticePeriod", 0);
    } else {
      form.append("experience", experience);
      form.append(
        "ctc",
        ctcType === "monthly" ? `${ctc}K/month` : `${ctc} LPA`
      );
      form.append("noticePeriod", noticePeriod);
    }

    // Resume upload
    if (selectedResume.type === "new") {
      form.append("resume_type", "upload");
      form.append("resume", selectedResume.data);
    }

    if (selectedResume.type === "stored") {
      form.append("resume_type", "existing");
      form.append("resume_name", selectedResume.data.name);
      form.append("resume_url", selectedResume.data.url);
    }

    mutate(form);
  }

  const isSelected = (r) => selectedResume?.data?.name === r?.name;
  const formatKB = (b) => `${(b / 1024).toFixed(1)} KB`;
  const formatMB = (b) => `${(b / 1024 / 1024).toFixed(2)} MB`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl overflow-hidden border">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4 p-6 pb-0">
          <h2 className="text-lg font-semibold">Apply for this Job</h2>
          <button onClick={() => setIsApplyClicked(false)}>
            <X className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* BODY */}
        <div className="max-h-[70vh] overflow-y-scroll scrollbar-hide p-6 pt-4">

          {/* Job Info */}
          <div className="p-4 border rounded-lg mb-5 bg-gray-50">
            <p className="font-semibold">{job?.title}</p>
            <p className="text-sm text-gray-600">{job?.postedBy.companyName}</p>
            <p className="text-sm text-gray-600">{job?.postedBy.companyCity}</p>
          </div>

          {/* Resume Section */}
          <h3 className="font-medium mb-2">Select Resume</h3>

          <div className="space-y-3 mb-4">
            {resumePdf && (
              <div
                onClick={() =>
                  setSelectedResume({ type: "stored", data: resumePdf })
                }
                className={`border p-4 rounded-lg cursor-pointer flex justify-between items-center relative ${
                  isSelected(resumePdf)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <span className="absolute top-1 left-2 text-[10px] font-semibold text-gray-600">
                  Stored Resume
                </span>

                <div className="mt-3">
                  <p className="font-medium">{resumePdf.name}</p>
                  <p className="text-xs text-gray-500">
                    {formatKB(resumePdf.size)}
                  </p>
                </div>

                {isSelected(resumePdf) && (
                  <span className="text-blue-600 font-semibold text-sm">
                    Selected
                  </span>
                )}
              </div>
            )}

            {uploadResume && (
              <div
                onClick={() =>
                  setSelectedResume({ type: "new", data: uploadResume })
                }
                className={`border p-4 rounded-lg cursor-pointer flex justify-between items-center relative ${
                  isSelected(uploadResume)
                    ? "border-blue-500 bg-blue-50"
                    : "border-green-500 bg-green-50 hover:bg-green-100"
                }`}
              >
                <span className="absolute top-1 left-2 text-[10px] font-semibold text-green-700">
                  New Upload
                </span>

                <div className="mt-3">
                  <p className="font-medium">{uploadResume.name}</p>
                  <p className="text-xs text-gray-600">
                    {formatMB(uploadResume.size)}
                  </p>
                </div>

                {isSelected(uploadResume) && (
                  <span className="text-blue-600 font-semibold text-sm">
                    Selected
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Upload New Resume */}
          <div className="p-5 border-2 border-dashed rounded-lg text-center mb-5 cursor-pointer hover:bg-gray-50">
            <label htmlFor="resume1" className="cursor-pointer">
              <UploadCloud className="mx-auto text-gray-500 mb-2" />
              <p className="text-sm text-gray-600">Upload New Resume</p>
              <p className="text-xs text-gray-400">PDF, DOC, DOCX up to 10MB</p>
            </label>
            <input
              type="file"
              id="resume1"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>

          {/* Cover Letter */}
          <label className="block font-medium mb-1">Cover Letter (Optional)</label>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            className="w-full border rounded-lg p-3 mb-5 h-28 resize-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a short cover letter..."
          />

          {/* Additional Details */}
          <h3 className="font-medium mb-2">Additional Details</h3>

          <div className="space-y-3 mb-4">
            <input
              type="text"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-lg p-3"
            />

            {/* Fresher Checkbox */}
            <label className="flex items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                checked={isFresher}
                onChange={() => setIsFresher(!isFresher)}
              />
              I am a Fresher
            </label>

            {/* Fresher → Education Form */}
            {isFresher && (
              <div className="rounded-lg p-4 bg-gray-50 space-y-3">
                <h4 className="font-medium">Education Details</h4>

                <input
                  type="text"
                  placeholder="Course Name"
                  value={educationForm.courseName}
                  onChange={(e) =>
                    setEducationForm({
                      ...educationForm,
                      courseName: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3"
                />

                <input
                  type="text"
                  placeholder="Specialisation"
                  value={educationForm.specialization}
                  onChange={(e) =>
                    setEducationForm({
                      ...educationForm,
                      specialization: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3"
                />

                <input
                  type="text"
                  placeholder="College / Board Name"
                  value={educationForm.collegeName}
                  onChange={(e) =>
                    setEducationForm({
                      ...educationForm,
                      collegeName: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3"
                />

                <input
                  type="number"
                  placeholder="Graduation Year"
                  value={educationForm.graduationYear}
                  onChange={(e) =>
                    setEducationForm({
                      ...educationForm,
                      graduationYear: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
              </div>
            )}

            {/* Experienced Fields */}
            {!isFresher && (
              <>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 2+ years"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full border rounded-lg p-3 pr-24"
                  />
                  {experience && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm">
                      {experience}+ years
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Notice Period (e.g., 30 Days)"
                    value={noticePeriod}
                    onChange={(e) => setNoticePeriod(e.target.value)}
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                {/* CTC */}
                <div className="flex gap-3">
                  <div className="relative w-full">
                    <input
                      type="number"
                      placeholder={
                        ctcType === "monthly"
                          ? "e.g. 25 (in K)"
                          : "e.g. 6 (in Lakhs)"
                      }
                      value={ctc}
                      onChange={(e) => setCtc(e.target.value)}
                      className="w-full border rounded-lg p-3 pr-24"
                    />

                    <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 text-sm">
                      {ctcType === "monthly" ? "K" : "LPA"}
                    </span>
                  </div>

                  <select
                    value={ctcType}
                    onChange={(e) => setCtcType(e.target.value)}
                    className="border rounded-lg p-3"
                  >
                    <option value="yearly">Per Year (LPA)</option>
                    <option value="monthly">Per Month (K)</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t bg-gray-50">
          <button
            onClick={submitHandler}
            className="w-full py-2 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Submit Application
          </button>

          <button
            onClick={() => setIsApplyClicked(false)}
            className="mt-2 w-full text-center text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

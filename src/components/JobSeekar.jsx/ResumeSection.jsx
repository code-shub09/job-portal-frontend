// import { useState } from "react";
// import { Upload, FileText, Download, RefreshCw } from "lucide-react";

// export default function ResumeSection() {
//   const [resume, setResume] = useState(null);

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) setResume(file);
//   };

//   return (
//     <div className="bg-white p-5 rounded-2xl shadow-md border">
//       <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-3">
//         Resume
//       </h3>

//       {/* WHEN NO RESUME — SMALL + MINIMAL UPLOAD BOX */}
//       {!resume ? (
//         <label
//           htmlFor="resume"
//           className="block cursor-pointer rounded-xl border border-dashed border-gray-300 p-5 text-center hover:bg-gray-50 transition"
//         >
//           <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
//           <p className="text-sm font-medium text-gray-700">Upload Resume</p>
//           <p className="text-xs text-gray-500">PDF · DOC · DOCX</p>

//           <input
//             type="file"
//             id="resume"
//             accept=".pdf,.doc,.docx"
//             className="hidden"
//             onChange={handleUpload}
//           />
//         </label>
//       ) : (
//         /* WHEN RESUME EXISTS — FULL CARD */
//         <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border">
//           <div className="flex items-center gap-3">
//             <FileText className="w-6 h-6 text-blue-600" />
//             <span className="font-medium">{resume.name}</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <button className="text-blue-600 flex items-center hover:underline">
//               <Download className="w-4 h-4 mr-1" />
//               Download
//             </button>

//             <label className="cursor-pointer text-blue-600 flex items-center gap-1 hover:underline">
//               <RefreshCw className="w-4 h-4" />
//               Replace
//               <input
//                 type="file"
//                 className="hidden"
//                 accept=".pdf,.doc,.docx"
//                 onChange={handleUpload}
//               />
//             </label>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import { UploadCloud, FileText, Download, RefreshCw } from "lucide-react";

// export default function ResumeSection() {
//   const [resume, setResume] = useState(null);

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) setResume(file);

//   };

//   return (
//     <div className="bg-white p-5 rounded-2xl shadow-md ">
//       {/* Title */}
//       <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-3">
//         Resume
//       </h3>

//       {/* FIXED HEIGHT CONTAINER */}
//       <div className="h-[120px] flex items-center justify-center">
//         {/* EMPTY STATE */}
//         {!resume ? (
//           <label
//             htmlFor="resumeUpload"
//             className="w-full h-full flex flex-col items-center justify-center
//             border-2 border-dashed border-gray-300 rounded-xl cursor-pointer
//             bg-gray-50 hover:bg-gray-100 transition"
//           >
//             <UploadCloud className="w-10 h-10 text-blue-500 mb-2" />

//             <p className="font-medium text-gray-700">Upload Resume</p>
//             <p className="text-xs text-gray-500">PDF • DOC • DOCX</p>

//             <input
//               type="file"
//               id="resumeUpload"
//               accept=".pdf,.doc,.docx"
//               className="hidden"
//               onChange={handleUpload}
//             />
//           </label>
//         ) : (
//           /* UPLOADED STATE */
//           <div className="w-full h-full flex flex-col justify-between rounded-xl bg-gray-50 p-4">
//             {/* File Info */}
//             <div className="flex items-center gap-3">
//               <FileText className="w-6 h-6 text-blue-600" />
//               <div>
//                 <p className="font-medium">{resume.name}</p>
//                 <p className="text-xs text-gray-500">Uploaded just now</p>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex items-center gap-3 mt-3">
//               <button className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//                 <Download className="w-4 h-4" />
//                 Download
//               </button>

//               <label className="flex-1 cursor-pointer flex items-center justify-center gap-1 border py-2 rounded-lg hover:bg-gray-100 transition">
//                 <RefreshCw className="w-4 h-4" />
//                 Replace
//                 <input
//                   type="file"
//                   className="hidden"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleUpload}
//                 />
//               </label>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { UploadCloud, FileText, Download, RefreshCw, X } from "lucide-react";
// import axios from "axios";
// import { FaChampagneGlasses } from "react-icons/fa6";
// import useUploadResume from "../../hooks/useUploadResume";

// export default function ResumeSection() {
//   const [resume, setResume] = useState(null);       // local preview
//   const [uploadedResume, setUploadedResume] = useState(null); // saved on backend

//   const [loading, setLoading] = useState(false);

//   // Local preview only
//   const handleSelect = (e) => {

//     const file = e.target.files[0];
//     console.log('file resume:',file);
//     if (file) setResume(file);
//   };
//   function updatePath(filePath){
//     console.log('filepath succes:',filePath);
//     setUploadedResume(filePath);
//     setResume(null); // remove preview after upload
//   }
//   const {mutate,isPending,error} =useUploadResume(updatePath);

//   // Upload to backend
//   const handleUpload = async () => {
//     console.log('handle upload');
//     mutate(resume);

//      // clear preview
//   };

//   const handleCancel = () => setResume(null);

//   return (
//     <div className="bg-white p-5 rounded-2xl shadow-md ">
//       <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-3">
//         Resume
//       </h3>

//       {/* FIXED HEIGHT */}
//       <div className="h-[120px] flex flex-col justify-center">

//         {/* EMPTY STATE */}
//         {!resume && !uploadedResume && (
//           <label
//             htmlFor="resume"
//             className="flex flex-col items-center justify-center h-full border-2
//             border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
//           >
//             <UploadCloud className="w-10 h-10 text-blue-500 mb-2" />
//             <p className="font-medium text-gray-700">Upload Resume</p>
//             <p className="text-xs text-gray-500">PDF • DOC • DOCX</p>
//             <input
//               id="resume"
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={handleSelect}
//               className="hidden"
//             />
//           </label>
//         )}

//         {/* PREVIEW STATE (before uploading) */}
//         {resume && !uploadedResume && (
//           <div className="flex flex-col h-full justify-between border rounded-xl bg-gray-50 p-4">
//             <div className="flex items-center gap-3">
//               <FileText className="w-6 h-6 text-blue-600" />
//               <span className="font-medium">{resume.name}</span>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={handleUpload}
//                 className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 {loading ? "Uploading..." : "Upload"}
//               </button>

//               <button
//                 onClick={handleCancel}
//                 className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-1"
//               >
//                 <X className="w-4 h-4" />
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {/* UPLOADED STATE */}
//         {uploadedResume && !resume && (
//           <div className="flex flex-col h-full justify-between border rounded-xl bg-gray-50 p-4">
//             <div className="flex items-center gap-3">
//               <FileText className="w-6 h-6 text-blue-600" />
//               <span className="font-medium">Resume Uploaded</span>
//             </div>

//             <div className="flex gap-3">
//               <a
//                 href={`http://localhost:5000/${uploadedResume}`}
//                 download
//                 className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 <Download className="w-4 h-4" />
//                 Download
//               </a>

//               <label
//                 className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition
//                 flex items-center justify-center gap-1 cursor-pointer"
//               >
//                 <RefreshCw className="w-4 h-4" />
//                 Replace
//                 <input
//                   type="file"
//                   className="hidden"
//                   onChange={handleSelect}
//                   accept=".pdf,.doc,.docx"
//                 />
//               </label>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { UploadCloud, FileText, Download, RefreshCw, X } from "lucide-react";
// import useUploadResume from "../../hooks/useUploadResume";

// export default function ResumeSection() {
//   const [resume, setResume] = useState(null); // Local preview before upload
//   const [uploadedResume, setUploadedResume] = useState(null); // URL from backend

//   // Local file selection
//   const handleSelect = (e) => {
//     const file = e.target.files[0];
//     if (!file) {
//       return;
//     }
//     const validTypes = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     ];

//     if (!validTypes.includes(file.type)) {
//       alert("Invalid file. Only PDF/DOC/DOCX allowed.");
//       return;
//     }

//     // IMPORTANT: check extension
//     if (!file.name.includes(".")) {
//       alert(
//         "This file has no extension (.pdf / .doc / .docx). Please rename it correctly."
//       );
//       return;
//     }

//     setResume(file);
//   };

//   // Runs when backend upload succeeds
//   function updatePath(filePath) {
//     console.log("✅ Upload Success! File path:", filePath);
//     setUploadedResume(filePath);
//     setResume(null); // clear preview after upload
//   }

//   const { mutate, isPending, error } = useUploadResume(updatePath);

//   // Upload to backend
//   const handleUpload = () => {
//     if (!resume) return;
//     console.log("🚀 Uploading...");
//     mutate(resume);
//   };

//   // Cancel selected file
//   const handleCancel = () => setResume(null);

//   return (
//     <div className="bg-white p-5 rounded-2xl shadow-md">
//       <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-3">
//         Resume
//       </h3>

//       {/* FIXED HEIGHT BOX */}
//       <div className="h-[120px] flex flex-col justify-center">
//         {/* NO RESUME UPLOADED YET */}
//         {!resume && !uploadedResume && (
//           <label
//             htmlFor="resume"
//             className="flex flex-col items-center justify-center h-full border-2
//             border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
//           >
//             <UploadCloud className="w-10 h-10 text-blue-500 mb-2" />
//             <p className="font-medium text-gray-700">Upload Resume</p>
//             <p className="text-xs text-gray-500">PDF • DOC • DOCX</p>

//             <input
//               id="resume"
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={handleSelect}
//               className="hidden"
//             />
//           </label>
//         )}

//         {/* PREVIEW BEFORE UPLOADING */}
//         {resume && !uploadedResume && (
//           <div className="flex flex-col h-full justify-between border rounded-xl bg-gray-50 p-4">
//             <div className="flex items-center gap-3">
//               <FileText className="w-6 h-6 text-blue-600" />
//               <span className="font-medium">{resume.name}</span>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={handleUpload}
//                 disabled={isPending}
//                 className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
//               >
//                 {isPending ? "Uploading..." : "Upload"}
//               </button>

//               <button
//                 onClick={handleCancel}
//                 disabled={isPending}
//                 className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-1 disabled:opacity-60"
//               >
//                 <X className="w-4 h-4" />
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {/* AFTER UPLOAD */}
//         {uploadedResume && !resume && (
//           <div className="flex flex-col h-full justify-between border rounded-xl bg-gray-50 p-4">
//             <div className="flex items-center gap-3">
//               <FileText className="w-6 h-6 text-blue-600" />
//               <span className="font-medium">Resume Uploaded</span>
//             </div>

//             <div className="flex gap-3">
//               {/* CORRECT DOWNLOAD URL */}
//               <a
//                 href={uploadedResume}
//                 download
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 <Download className="w-4 h-4" />
//                 Download
//               </a>

//               {/* ALLOW REPLACE */}
//               <label className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-1 cursor-pointer">
//                 <RefreshCw className="w-4 h-4" />
//                 Replace
//                 <input
//                   type="file"
//                   className="hidden"
//                   onChange={handleSelect}
//                   accept=".pdf,.doc,.docx"
//                 />
//               </label>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { FaFile } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import { useState } from "react";
import { UploadCloud, FileText, Download, RefreshCw, X } from "lucide-react";
import useUploadResume from "../../hooks/useUploadResume";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { FaUpload } from "react-icons/fa6";
import { GrDocumentUpload } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";

export default function ResumeSection({ existingResume }) {
  const getDownloadUrl = (url) => {
    console.log("download");
    return url.replace("/upload/", "/upload/fl_attachment/");
  };

  console.log("exist:", existingResume);
  const [resume, setResume] = useState(null); // Local preview

  const [uploadedResume, setUploadedResume] = useState(existingResume || null);

  // Validate and select file
  const handleSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Allowed MIME types
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(file.type)) {
      alert("Invalid file. Only PDF, DOC, and DOCX allowed.");
      return;
    }

    // Validate correct extension (fix for your issue)
    if (!file.name.includes(".")) {
      alert(
        "This file has no extension (.pdf / .doc / .docx). Please rename it properly before uploading."
      );
      return;
    }
    console.log("file:", file);

    setResume(file);
  };

  // Called when backend upload succeeds
  function updatePath(resumeFile) {
    console.log("Upload Success →", resumeFile);
    setUploadedResume(resumeFile);
    setResume(null);
  }

  const { mutate, isPending } = useUploadResume(updatePath);

  // Trigger upload to backend
  const handleUpload = () => {
    if (!resume) return;
    mutate(resume);
  };
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " bytes";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  // Cancel preview
  const handleCancel = () => setResume(null);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-3">
        Resume
      </h3>

      <div className="h-[140px] flex flex-col justify-center">
        {/* EMPTY STATE */}
        {!resume && !uploadedResume && (
          <label
            htmlFor="resume"
            className="flex flex-col items-center justify-center h-full border-2 
            border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          >
            <UploadCloud className="w-10 h-10 text-blue-500 mb-2" />
            <p className="font-medium text-gray-700">Upload Resume</p>
            <p className="text-xs text-gray-500">PDF • DOC • DOCX</p>

            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleSelect}
              className="hidden"
            />
          </label>
        )}

        {/* PREVIEW BEFORE UPLOAD */}
        {resume && (
          <div className="flex flex-col gap-6 h-full justify-between  rounded-xl bg-gray-50 p-4">
            <div className="flex  gap-3">
              {/* <FileText className="w-6 h-6 text-blue-600" /> */}
              <div className="w-15 h-15 bg-red-100 flex justify-around items-center rounded-xl">
                {" "}
                <FaFilePdf className="w-8 h-8 text-red-600"></FaFilePdf>
              </div>

              <div>
                <span className="font-semibold text-lg">{resume.fileName}</span>
                <p className="flex items-center">
                  {" "}
                  <FaFile className="text-gray-700"></FaFile>{" "}
                  {formatFileSize(resume.fileSize)}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleUpload}
                disabled={isPending}
                className="flex-1 flex justify-around  bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
              >
                <div className="flex gap-4 items-center">
                  <span>{isPending ? "Uploading..." : "Upload"}</span>{" "}
                  <FaUpload></FaUpload>{" "}
                </div>
              </button>

              <button
                onClick={handleCancel}
                disabled={isPending}
                className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-1 disabled:opacity-60"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* AFTER SUCCESSFUL UPLOAD */}
        {uploadedResume && !resume && (
          <div className="flex flex-col gap-6 h-full justify-between  rounded-xl bg-gray-50 p-4">
            <div className="flex gap-3">
              {/* <FileText className="w-6 h-6 text-blue-600" /> */}
              <div className="w-15 h-15 bg-red-100 flex justify-around items-center rounded-xl">
                <FaFilePdf className="w-8 h-8 text-red-600"></FaFilePdf>
              </div>
              <div>
                <span className="font-semibold text-lg/1">
                  {uploadedResume.fileName}
                </span>

                <p className="text-xs text-gray-400">
                  Uploaded {dayjs(uploadedResume.uploadedAt).fromNow()}
                </p>
                <p className="font-light text-[10px] text-gray-400">
                  {formatFileSize(uploadedResume.fileSize)}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={getDownloadUrl(uploadedResume.url)}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Download className="w-4 h-4" />
                Download
              </a>

              <label
                className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition 
                flex items-center justify-center gap-1 cursor-pointer"
              >
                <MdChangeCircle size={24}></MdChangeCircle>
                Replace
                <input
                  type="file"
                  className="hidden"
                  onChange={handleSelect}
                  accept=".pdf,.doc,.docx"
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

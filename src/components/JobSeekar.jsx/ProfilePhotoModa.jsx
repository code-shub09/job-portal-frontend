// import axios from "axios";
// import React, { useContext, useState } from "react";
// import useUploadPic from "../../hooks/useUploadPic";
// // import { ProfileContext } from "../../context/ProfileContext";

// export default function ProfilePhotoModal({ setShowModal }) {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const { mutate, isPending, error } = useUploadPic();

//   if (error) {
//     console.log("error,:", error);
//   }

  

//   //   const {ProfileFetch,Profile}= useContext(ProfileContext);
//   function closeModal() {
//     setShowModal(false);
//   }

//   function handleFileChange(e) {
//     const selected = e.target.files[0];
//     if (!selected) return;

//     setFile(selected);
//     setPreview(URL.createObjectURL(selected)); // ✅ Live preview
//   }

//   function handleDeleteCurrentPic() {
//     setFile(null);
//     setPreview(null);
//   }

//   async function handleSave() {
//     if (!file) return alert("Please upload a photo first!");

//     const formData = new FormData();

//     formData.append("profilePic", file);
//     // ✅ MUST MATCH backend
//     mutate(formData, {
//       onSuccess: () => {
//         closeModal();
//       },
//       onError: (err) => {
//         console.error("UPLOAD ERROR:", err);
//       },
//     });
//   }

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="bg-white w-[420px] rounded-2xl shadow-xl p-6 relative">
//         {/* Close Button */}
//         <button
//           onClick={closeModal}
//           className="absolute top-4 right-4 text-slate-500 hover:text-black text-xl"
//         >
//           ✕
//         </button>

//         {/* Title */}
//         <h2 className="text-lg font-semibold text-slate-900">Profile Photo</h2>
//         <p className="text-sm text-slate-500 mb-5">
//           Upload a new photo or remove your current one
//         </p>

//         {/* ✅ Upload Area */}
//         <div
//           className="
//             w-full flex flex-col items-center justify-center gap-3
//             rounded-xl border border-slate-200 bg-slate-50 p-6
//             hover:bg-slate-100 transition relative
//           "
//         >
//           {/* ✅ Circular Preview */}
//           <div className="w-28 h-28 rounded-full overflow-hidden border border-slate-300 bg-white shadow">
//             {preview ? (
//               <img
//                 src={preview}
//                 alt="Preview"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm">
//                 <span className="text-3xl">📤</span>
//               </div>
//             )}
//           </div>

//           {/* ✅ Change Photo button (only if preview exists) */}
//           {preview && (
//             <label
//               htmlFor="hiddenInput"
//               className="text-blue-600 text-sm font-medium cursor-pointer hover:underline"
//             >
//               Change Photo
//             </label>
//           )}

//           {/* ✅ THIS IS THE FIX — Always active input */}
//           <input
//             id="hiddenInput"
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="absolute inset-0 opacity-0 cursor-pointer"
//             style={{ zIndex: 20 }}
//           />

//           {!preview && (
//             <>
//               <p className="text-slate-600 text-sm">
//                 Drag & drop or click to upload
//               </p>
//               <p className="text-[12px] text-slate-400">JPG, PNG, JPEG</p>
//             </>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="mt-5 flex flex-col gap-3">
//           {file && (
//             <button
//               className="w-full py-3 rounded-full border border-red-400 text-red-500 font-medium hover:bg-red-50"
//               onClick={handleDeleteCurrentPic}
//             >
//               Delete Current Photo
//             </button>
//           )}

//           <p className="text-[12px] text-slate-400 px-2">
//             Recommended: clear, professional headshot.
//           </p>
//         </div>

//         {/* Badges */}
//         <div className="mt-4 bg-slate-100 p-3 rounded-xl flex items-center justify-center gap-3 text-[11px] text-slate-600">
//           <span className="px-2 py-1 rounded-lg bg-white shadow">
//             400×400px
//           </span>
//           <span className="px-2 py-1 rounded-lg bg-white shadow">
//             Good lighting
//           </span>
//           <span className="px-2 py-1 rounded-lg bg-white shadow">
//             Visible to recruiters
//           </span>
//         </div>

//         {/* Footer Buttons */}
//         <div className="mt-6 flex flex-col gap-2">
//           <button
//             onClick={handleSave}
//             className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 cursor-pointer"
//           >
//             Save Changes
//           </button>

//           <button
//             onClick={closeModal}
//             className="text-slate-500 text-sm hover:underline"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import useUploadPic from "../../hooks/useUploadPic";

const MAX_SIZE_MB = 5;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

export default function ProfilePhotoModal({ setShowModal }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [localError, setLocalError] = useState("");

  // react-query mutation (v5 uses isPending; v4 uses isLoading)
  const { mutate, isPending, error } = useUploadPic();

  function closeModal() {
    setShowModal(false);
  }

  function handleFileChange(e) {
    const selected = e.target.files?.[0];
    if (!selected) return;

    // basic validation
    if (!ALLOWED_TYPES.includes(selected.type)) {
      setLocalError("Only JPG/PNG/WEBP images are allowed.");
      return;
    }
    if (selected.size > MAX_SIZE_MB * 1024 * 1024) {
      setLocalError(`File must be under ${MAX_SIZE_MB}MB.`);
      return;
    }

    setLocalError("");
    setFile(selected);
    // create preview URL
    const url = URL.createObjectURL(selected);
    setPreview(url);
  }

  function handleDeleteCurrentPic() {
    setFile(null);
    setLocalError("");
    if (preview) {
      URL.revokeObjectURL(preview);
      setPreview(null);
    }
  }

  function handleSave() {
    if (!file) {
      setLocalError("Please upload a photo first.");
      return;
    }

    const formData = new FormData();
    // IMPORTANT: this key must match your backend field name
    formData.append("profilePic", file);
    mutate(file, { onSuccess: closeModal });
  }

  // cleanup preview URL on unmount or when preview changes
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[420px] rounded-2xl shadow-xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={closeModal}
          disabled={isPending}
          className="absolute top-4 right-4 text-slate-500 hover:text-black text-xl disabled:opacity-50"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold text-slate-900">Profile Photo</h2>
        <p className="text-sm text-slate-500 mb-5">
          Upload a new photo or remove your current one.
        </p>

        {/* Upload Area */}
        <div className="relative w-full flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-6 hover:bg-slate-100 transition">
          <div className="w-28 h-28 rounded-full overflow-hidden border border-slate-300 bg-white shadow">
            {preview ? (
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm">
                <span className="text-3xl">📤</span>
              </div>
            )}
          </div>

          {preview && (
            <label
              htmlFor="hiddenInput"
              className="text-blue-600 text-sm font-medium cursor-pointer hover:underline"
            >
              Change Photo
            </label>
          )}

          {/* Click area */}
          <input
            id="hiddenInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
            style={{ zIndex: 20 }}
            disabled={isPending}
          />

          {!preview && (
            <>
              <p className="text-slate-600 text-sm">Drag & drop or click to upload</p>
              <p className="text-[12px] text-slate-400">JPG, PNG, WEBP • Max {MAX_SIZE_MB}MB</p>
            </>
          )}
        </div>

        {/* Errors */}
        {(localError || error) && (
          <p className="mt-3 text-sm text-red-600">
            {localError || "Upload failed. Please try again."}
          </p>
        )}

        {/* Actions */}
        <div className="mt-5 flex flex-col gap-3">
          {file && (
            <button
              className="w-full py-3 rounded-full border border-red-400 text-red-500 font-medium hover:bg-red-50 disabled:opacity-60"
              onClick={handleDeleteCurrentPic}
              disabled={isPending}
            >
              Remove Selected Photo
            </button>
          )}

          <div className="mt-2 flex flex-col gap-2">
            <button
              onClick={handleSave}
              disabled={!file || isPending}
              className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
            >
              {isPending ? "Uploading..." : "Save Changes"}
            </button>

            <button
              onClick={closeModal}
              disabled={isPending}
              className="text-slate-500 text-sm hover:underline disabled:opacity-60"
            >
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

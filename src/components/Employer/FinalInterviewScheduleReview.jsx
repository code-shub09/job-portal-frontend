// import React, { useState } from "react";
// import {
//   AlertTriangle,
//   Calendar,
//   CheckCircle,
//   Users,
//   Bell,
//   StickyNote,
// } from "lucide-react";

// export default function FinalInterviewScheduleReview({dateX,
//   shortlistedCount = 95,
//   totalDates = 2,
//   totalSlots = 3,
//   totalCapacity = 83,
//   scheduleData = [
//     {
//       date: "Thursday, Nov 27",
//       slots: [
//         { time: "09:00 AM", capacity: 40, interviewer: "" },
//         { time: "01:00 PM", capacity: 40, interviewer: "John Doe" },
//       ],
//     },
//     {
//       date: "Friday, Nov 28",
//       slots: [{ time: "12:00 PM", capacity: 3, interviewer: "Kate" }],
//     },
//   ],
//   onSubmit,
//   onCancel,
// }) {
//   const remaining = shortlistedCount - totalCapacity;
//   const insufficient = remaining > 0;

//   const missingInterviewer = scheduleData.some((day) =>
//     day.slots.some((slot) => !slot.interviewer)
//   );

//   const [notifyCandidates, setNotifyCandidates] = useState(true);
//   const [notifyInterviewers, setNotifyInterviewers] = useState(true);
//   const [internalNote, setInternalNote] = useState("");

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-6 z-50">
//       <div className="bg-white max-w-lg w-full rounded-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">

//         {/* Header */}
//         <h2 className="text-xl font-bold text-gray-900">
//           Schedule Interviews for All Shortlisted Candidates?
//         </h2>
//         <p className="text-gray-500 text-sm mt-1">
//           This will finalize your interview schedule and assign candidates to time slots.
//         </p>

//         {/* SUMMARY GRID */}
//         <div className="grid grid-cols-2 gap-4 mt-5 p-4 border rounded-xl bg-gray-50">
//           <div>
//             <p className="text-xs text-gray-500">Total Interview Dates</p>
//             <p className="text-lg font-semibold">{totalDates}</p>
//           </div>
//           <div>
//             <p className="text-xs text-gray-500">Total Time Slots</p>
//             <p className="text-lg font-semibold">{totalSlots}</p>
//           </div>
//           <div>
//             <p className="text-xs text-gray-500">Shortlisted Candidates</p>
//             <p className="text-lg font-semibold">{shortlistedCount}</p>
//           </div>
//           <div>
//             <p className="text-xs text-gray-500">Total Slot Capacity</p>
//             <p className="text-lg font-semibold">{totalCapacity}</p>
//           </div>
//         </div>

//         {/* CAPACITY ERROR */}
//         {insufficient && (
//           <div className="mt-4 bg-orange-50 border border-orange-300 p-3 rounded-lg flex items-start gap-2 text-orange-700 text-sm">
//             <AlertTriangle size={18} /> 
//             <span>
//               <strong>Insufficient slot capacity.</strong> Some candidates may not be assigned.
//             </span>
//           </div>
//         )}

//         {/* Notification Settings */}
//         <h3 className="text-md font-semibold mt-6 mb-2">Notification Settings</h3>

//         <div className="space-y-4">
//           {/* Notify Candidates */}
//           <div className="flex items-center justify-between p-3 border rounded-lg">
//             <div>
//               <p className="font-medium text-sm">Notify Candidates</p>
//               <p className="text-xs text-gray-500">
//                 Send interview details to shortlisted candidates.
//               </p>
//             </div>

//             <label className="cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={notifyCandidates}
//                 onChange={(e) => setNotifyCandidates(e.target.checked)}
//                 className="hidden"
//               />
//               <div
//                 className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
//                   notifyCandidates ? "bg-blue-600" : "bg-gray-300"
//                 }`}
//               >
//                 <div
//                   className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
//                     notifyCandidates ? "translate-x-5" : "translate-x-0"
//                   }`}
//                 />
//               </div>
//             </label>
//           </div>

//           {/* Notify Interviewers */}
//           <div className="flex items-center justify-between p-3 border rounded-lg">
//             <div>
//               <p className="font-medium text-sm">Notify Interviewers</p>
//               <p className="text-xs text-gray-500">
//                 Send assigned candidate list & instructions to interviewers.
//               </p>
//             </div>

//             <label className="cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={notifyInterviewers}
//                 onChange={(e) => setNotifyInterviewers(e.target.checked)}
//                 className="hidden"
//               />
//               <div
//                 className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
//                   notifyInterviewers ? "bg-blue-600" : "bg-gray-300"
//                 }`}
//               >
//                 <div
//                   className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
//                     notifyInterviewers ? "translate-x-5" : "translate-x-0"
//                   }`}
//                 />
//               </div>
//             </label>
//           </div>
//         </div>

//         {/* Internal Note */}
//         <div className="mt-4">
//           <label className="flex items-center gap-2 text-sm font-medium mb-1">
//             <StickyNote size={16} /> Add internal scheduling note
//           </label>
//           <textarea
//             value={internalNote}
//             onChange={(e) => setInternalNote(e.target.value)}
//             placeholder="Only visible to the hiring team..."
//             className="w-full border rounded-lg p-3 text-sm resize-none"
//             rows={3}
//           ></textarea>
//         </div>

//         {/* Schedule Preview */}
//         <h3 className="text-md font-semibold mt-6 mb-3">Schedule Preview</h3>

//         <div className="space-y-4">
//           {scheduleData.map((day, i) => (
//             <div key={i} className="border rounded-xl p-4 bg-gray-50 space-y-2">
//               <p className="font-semibold">{day.date}</p>

//               {day.slots.map((slot, j) => (
//                 <div
//                   key={j}
//                   className="flex items-center justify-between bg-white border rounded-lg px-3 py-2"
//                 >
//                   <div className="flex items-center gap-2 text-gray-700">
//                     <Calendar size={16} />
//                     <span>{slot.time}</span>
//                   </div>
//                   <span className="font-medium">{slot.capacity} candidates</span>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Warnings */}
//         <div className="mt-4 space-y-2">
//           {missingInterviewer && (
//             <div className="bg-red-50 p-3 border border-red-200 rounded-lg text-sm text-red-700 flex gap-2">
//               <AlertTriangle size={18} /> Missing interviewer in one or more slots
//             </div>
//           )}

//           {insufficient && (
//             <div className="bg-orange-50 p-3 border border-orange-300 rounded-lg text-sm text-orange-700 flex gap-2">
//               <AlertTriangle size={18} />
//               {remaining} candidates will not be assigned due to capacity shortage
//             </div>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end gap-3 mt-6">
//           <button
//             className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
//             onClick={onCancel}
//           >
//             Cancel
//           </button>

//           <button
//             className="px-5 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600"
//             onClick={() =>
//               onSubmit({
//                 notifyCandidates,
//                 notifyInterviewers,
//                 internalNote,
//               })
//             }
//           >
//             Proceed Anyway (Some Candidates Will Not Be Assigned)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { AlertTriangle, Calendar, StickyNote } from "lucide-react";

// export default function FinalInterviewScheduleReview({
//   dateX,
//   shortlistedCount,
//   totalDates,
//   totalSlots,
//   totalCapacity,
//   onSubmit,
//   onCancel
// }) {
//   console.log('to',totalCapacity,shortlistedCount)
//   const remaining = shortlistedCount - totalCapacity;
//   const insufficient = remaining > 0;
//   console.log('insufficent',insufficient,remaining);

//   // 🔥 Convert REAL dateX into UI schedule format  
//   const scheduleData = dateX.map((item) => ({
//     date: item.date.toLocaleDateString("en-US", {
//       weekday: "long",
//       month: "short",
//       day: "numeric",
//     }),
//     slots: item.slots
//   }));

//   // 🔥 Detect missing interviewer
// //   const missingInterviewer = scheduleData.some((day) =>
// //     day.slots.some((slot) => !slot.interviewer)
// //   );

//   const [notifyCandidates, setNotifyCandidates] = useState(true);
//   const [notifyInterviewers, setNotifyInterviewers] = useState(true);
//   const [internalNote, setInternalNote] = useState("");

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-6 z-50">
//       <div className="bg-white max-w-lg w-full rounded-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">

//         <h2 className="text-xl font-bold text-gray-900">
//           Schedule Interviews for All Shortlisted Candidates?
//         </h2>
//         <p className="text-gray-500 text-sm mt-1">
//           This will finalize your interview schedule and assign candidates to selected time slots.
//         </p>

//         {/* SUMMARY GRID */}
//         <div className="grid grid-cols-2 gap-4 mt-5 p-4 border rounded-xl bg-gray-50">
//           <div>
//             <p className="text-xs text-gray-500">Total Interview Dates</p>
//             <p className="text-lg font-semibold">{totalDates}</p>
//           </div>

//           <div>
//             <p className="text-xs text-gray-500">Total Time Slots</p>
//             <p className="text-lg font-semibold">{totalSlots}</p>
//           </div>

//           <div>
//             <p className="text-xs text-gray-500">Shortlisted Candidates</p>
//             <p className="text-lg font-semibold">{shortlistedCount}</p>
//           </div>

//           <div>
//             <p className="text-xs text-gray-500">Total Slot Capacity</p>
//             <p className="text-lg font-semibold">{totalCapacity}</p>
//           </div>
//         </div>

//         {insufficient && (
//           <div className="mt-4 bg-orange-50 border border-orange-300 p-3 rounded-lg flex items-start gap-2 text-orange-700 text-sm">
//             <AlertTriangle size={18} />
//             <span><strong>Insufficient slot capacity.</strong> Some candidates may not be assigned.</span>
//           </div>
//         )}

//         {/* SCHEDULE PREVIEW */}
//         <h3 className="text-md font-semibold mt-6 mb-3">Schedule Preview</h3>

//         <div className="space-y-4">
//           {scheduleData.map((day, idx) => (
//             <div key={idx} className="border rounded-xl p-4 bg-gray-50">
//               <p className="font-semibold">{day.date}</p>

//               {day.slots.map((slot, sIdx) => (
//                 <div
//                   key={sIdx}
//                   className="flex items-center justify-between bg-white border rounded-lg px-3 py-2 mt-2"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Calendar size={16} />
//                     <span>{slot.time || "Not selected"}</span>
//                   </div>

//                   <span className="font-medium">{slot.capacity} candidates</span>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* WARNINGS */}
//         <div className="mt-4 space-y-2">
//           {/* {missingInterviewer && (
//             <div className="bg-red-50 p-3 border border-red-200 rounded-lg text-sm text-red-700 flex gap-2">
//               <AlertTriangle size={18} />
//               Missing interviewer in one or more slots.
//             </div>
//           )} */}

//           {insufficient && (
//             <div className="bg-orange-50 p-3 border border-orange-300 rounded-lg text-sm text-orange-700 flex gap-2">
//               <AlertTriangle size={18} />
//               {remaining} candidates will not be assigned due to shortage.
//             </div>
//           )}
//         </div>

//         {/* FOOTER BUTTONS */}
//         <div className="flex justify-end gap-3 mt-6">
//           <button
//             className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
//             onClick={onCancel}
//           >
//             Cancel
//           </button>

//           <button
//             className="px-5 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600"
//             onClick={() =>
//               onSubmit({
//                 notifyCandidates,
//                 notifyInterviewers,
//                 internalNote,
//                 schedule: scheduleData,
//               })
//             }
//           >
//             Proceed Anyway (Some May Not Be Assigned)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { AlertTriangle, Calendar, StickyNote } from "lucide-react";

export default function FinalInterviewScheduleReview({
  dateX,
  shortlistedCount,
  totalDates,
  totalSlots,
  totalCapacity,
  onSubmit,
  onCancel
}) {
  const remaining = shortlistedCount - totalCapacity;
  const insufficient = remaining > 0;

  // Convert REAL data → Preview format
  const scheduleData = dateX.map((item) => ({
    date: item.date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    }),
    slots: item.slots,
  }));

  // Form States  
  const [notifyCandidates, setNotifyCandidates] = useState(true);

  const [addNote, setAddNote] = useState(false);
  const [internalNote, setInternalNote] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-6 z-50">
      <div className="bg-white max-w-lg w-full rounded-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <h2 className="text-xl font-bold text-gray-900">
          Schedule Interviews for All Shortlisted Candidates?
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          This will finalize your interview schedule and assign candidates to time slots.
        </p>

        {/* SUMMARY GRID */}
        <div className="grid grid-cols-2 gap-4 mt-5 p-4 border rounded-xl bg-gray-50">
          <div>
            <p className="text-xs text-gray-500">Total Interview Dates</p>
            <p className="text-lg font-semibold">{totalDates}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Total Time Slots</p>
            <p className="text-lg font-semibold">{totalSlots}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Shortlisted Candidates</p>
            <p className="text-lg font-semibold">{shortlistedCount}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Total Slot Capacity</p>
            <p className="text-lg font-semibold">{totalCapacity}</p>
          </div>
        </div>

        {/* WARNING: INSUFFICIENT CAPACITY */}
        {insufficient && (
          <div className="mt-4 bg-orange-50 border border-orange-300 p-3 rounded-lg flex items-start gap-2 text-orange-700 text-sm">
            <AlertTriangle size={18} />
            <span>
              <strong>Insufficient slot capacity.</strong> Some candidates may not be assigned.
            </span>
          </div>
        )}

        {/* 🔥 NOTIFICATION SETTINGS */}
        <h3 className="text-md font-semibold mt-6 mb-2">Notification</h3>

        {/* Notify Candidates */}
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <p className="font-medium text-sm">Notify Candidates</p>
            <p className="text-xs text-gray-500">
              Send interview time & instructions to shortlisted candidates.
            </p>
          </div>

          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={notifyCandidates}
              onChange={(e) => setNotifyCandidates(e.target.checked)}
              className="hidden"
            />
            <div
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                notifyCandidates ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                  notifyCandidates ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </div>
          </label>
        </div>

        {/* Add Note Checkbox */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            checked={addNote}
            onChange={() => setAddNote(!addNote)}
            className="w-4 h-4 accent-blue-600"
          />
          <label className="text-sm font-medium flex items-center gap-1">
            <StickyNote size={16} className="text-gray-600" />
            Add internal scheduling note
          </label>
        </div>

        {/* Show Note Textarea Only If Checked */}
        {addNote && (
          <textarea
            value={internalNote}
            onChange={(e) => setInternalNote(e.target.value)}
            placeholder="Only visible to the hiring team..."
            className="w-full border rounded-lg p-3 text-sm resize-none mt-2"
            rows={3}
          ></textarea>
        )}

        {/* SCHEDULE PREVIEW */}
        <h3 className="text-md font-semibold mt-6 mb-3">Schedule Preview</h3>

        <div className="space-y-4">
          {scheduleData.map((day, idx) => (
            <div key={idx} className="border rounded-xl p-4 bg-gray-50">
              <p className="font-semibold">{day.date}</p>

              {day.slots.map((slot, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center justify-between bg-white border rounded-lg px-3 py-2 mt-2"
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{slot.time || "Not selected"}</span>
                  </div>

                  <span className="font-medium">{slot.capacity} candidates</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* WARNINGS */}
        {insufficient && (
          <div className="mt-4 bg-orange-50 border border-orange-300 p-3 rounded-lg text-sm text-orange-700 flex gap-2">
            <AlertTriangle size={18} />
            {remaining} candidates will not be assigned due to shortage.
          </div>
        )}

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="px-5 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600"
            onClick={() =>
              onSubmit({
                notifyCandidates,
                note: addNote ? internalNote : null,
                schedule: scheduleData,
              })
            }
          >
            Proceed Anyway (Some May Not Be Assigned)
          </button>
        </div>
      </div>
    </div>
  );
}

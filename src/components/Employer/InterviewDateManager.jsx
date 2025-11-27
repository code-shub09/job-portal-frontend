// // InterviewDateManager.jsx
// import React, { useState } from "react";
// import { Calendar, Clock, Trash2 } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import StyledReactDatePicker from "./StyledReactDatePicker";
// import { DateCard } from "./DateCard";
// import SlideOver from "./SlideOver";
// import EmptySlotsPanel from "./EmptySlotsPanel";
// import SlideFromRight from "./SlideFromRight";

// export default function InterviewDateManager() {
//   const [dates, setDates] = useState([]);
//   const [showPicker, setShowPicker] = useState(false);
//   const [activeDate, setActiveDate] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleToggle = (dateObj) => {
//     setActiveDate(dateObj);
//     setDrawerOpen(true);
//   };

//   // Delete whole date
//   const removeDate = (id) => {
//     setDates(dates.filter((d) => d.id !== id));
//   };

//   // Add slot
//   const addSlot = (dateId) => {
//     setDates(
//       dates.map((d) =>
//         d.id === dateId
//           ? {
//               ...d,
//               slots: [
//                 ...d.slots,
//                 {
//                   id: Date.now(),
//                   time: null,
//                   capacity: "",
//                   interviewer: "",
//                   instructions: "",
//                 },
//               ],
//             }
//           : d
//       )
//     );
//   };

//   // Update slot
//   const updateSlot = (dateId, slotId, field, value) => {
//     setDates(
//       dates.map((d) =>
//         d.id === dateId
//           ? {
//               ...d,
//               slots: d.slots.map((s) =>
//                 s.id === slotId ? { ...s, [field]: value } : s
//               ),
//             }
//           : d
//       )
//     );
//   };

//   const removeSlot = (dateId, slotId) => {
//     setDates(
//       dates.map((d) =>
//         d.id === dateId
//           ? { ...d, slots: d.slots.filter((s) => s.id !== slotId) }
//           : d
//       )
//     );
//   };

//   return (
//     <div className="w-full p-6 bg-white border rounded-xl shadow-sm space-y-6">
//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Select Interview Dates
//         </h2>

//         <div className="mt-3 flex flex-row-reverse">
//           <StyledReactDatePicker
//             showPicker={showPicker}
//             setShowPicker={setShowPicker}
//             onDateSelected={(d) => {
//               setDates([...dates, { id: Date.now(), date: d, slots: [] }]);
//               setShowPicker(false);
//             }}
//           />
//         </div>
//       </div>

//       {/* ✅ BLUE DATE PICKER BELOW BUTTON */}

//       {/* EMPTY STATE */}
//       {dates.length === 0 && (
//         <div className="p-10 text-center text-gray-500">
//           <Calendar className="mx-auto mb-3 text-gray-400" size={28} />
//           Click “Add Date” to select interview dates
//         </div>
//       )}

//       {/* DATE BLOCKS */}
//       {dates.map((d) => (
//         <div key={d.id} className=" p-5 bg-gray-50 space-y-4">
//           {/* DATE HEADER */}
//           {/* <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <Calendar className="text-blue-600" size={22} />
//               <div>
//                 <p className="text-lg font-semibold text-gray-800">
//                   {d.date.toLocaleDateString("en-GB", {
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   {d.date.toLocaleDateString("en-US", { weekday: "long" })}
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={() => removeDate(d.id)}
//               className="text-gray-400 hover:text-red-500"
//             >
//               <Trash2 size={18} />
//             </button>
//           </div> */}

//           {/* TIME SLOTS */}
//           {/* {d.slots.map((slot) => (
//             <div key={slot.id} className="border rounded-lg bg-white p-4 space-y-3">

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="relative">
//                   <label className="text-sm font-medium">Time Slot</label>
//                   <Clock className="absolute left-3 top-[38px] h-4 w-4 text-gray-500" />
//                   <DatePicker
//                     selected={slot.time}
//                     onChange={(val) => updateSlot(d.id, slot.id, "time", val)}
//                     showTimeSelect
//                     showTimeSelectOnly
//                     timeIntervals={15}
//                     dateFormat="h:mm aa"
//                     className="w-full pl-10 pr-3 py-2 border rounded-lg mt-1"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium">Capacity</label>
//                   <input
//                     type="number"
//                     className="w-full border rounded-lg px-3 py-2 mt-1"
//                     value={slot.capacity}
//                     onChange={(e) =>
//                       updateSlot(d.id, slot.id, "capacity", e.target.value)
//                     }
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Interviewer Name"
//                   value={slot.interviewer}
//                   onChange={(e) =>
//                     updateSlot(d.id, slot.id, "interviewer", e.target.value)
//                   }
//                   className="w-full border rounded-lg px-3 py-2"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Instructions"
//                   value={slot.instructions}
//                   onChange={(e) =>
//                     updateSlot(d.id, slot.id, "instructions", e.target.value)
//                   }
//                   className="w-full border rounded-lg px-3 py-2"
//                 />
//               </div>

//               <button
//                 onClick={() => removeSlot(d.id, slot.id)}
//                 className="text-red-500 text-sm hover:underline"
//               >
//                 Remove Slot
//               </button>
//             </div>
//           ))} */}

//           {/* <button
//             onClick={() => addSlot(d.id)}
//             className="w-full mt-2 py-2 text-sm text-gray-600 border rounded-lg bg-white hover:bg-gray-100"
//           >
//             + Add Time Slot
//           </button> */}
//           <DateCard d={d} onToggle={() => handleToggle(d)}></DateCard>

//           <SlideFromRight
//             open={drawerOpen && activeDate?.id === d.id}
//             className="mt-2 h-fit min-h-[220px]"
//           >
//             <EmptySlotsPanel
//               dateLabel={d.date.toLocaleDateString("en-US", {
//                 month: "long",
//                 day: "numeric",
//                 year: "numeric",
//               })}
//               onAddSlot={() => addSlot(d.id)}
//             />
//           </SlideFromRight>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Calendar } from "lucide-react";
// import StyledReactDatePicker from "./StyledReactDatePicker";
// import { DateCard } from "./DateCard";
// import EmptySlotsPanel from "./EmptySlotsPanel";
// import SlideFromRight from "./SlideFromRight";

// export default function InterviewDateManager() {
//   const [dates, setDates] = useState([]);
//   const [showPicker, setShowPicker] = useState(false);
//   const [activeDate, setActiveDate] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleToggle = (dateObj) => {
//     console.log('toggle')
//     if (activeDate?.id === dateObj.id) {
//       setDrawerOpen((prev) => !prev); // toggle close if already open
//     } else {
//       setActiveDate(dateObj);
//       setDrawerOpen(true);
//     }
//   };

//   const addSlot = (dateId) => {
//     console.log("Add slot for dateId:", dateId);
//   };

//   return (
//     <div className="w-full p-6 bg-white border rounded-xl shadow-sm space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Select Interview Dates
//         </h2>
//         <div className="mt-3 flex flex-row-reverse">
//           <StyledReactDatePicker
//             showPicker={showPicker}
//             setShowPicker={setShowPicker}
//             onDateSelected={(d) => {
//               setDates([...dates, { id: Date.now(), date: d, slots: [] }]);
//               setShowPicker(false);
//             }}
//           />
//         </div>
//       </div>

//       {/* Empty state */}
//       {dates.length === 0 && (
//         <div className="p-10 text-center text-gray-500">
//           <Calendar className="mx-auto mb-3 text-gray-400" size={28} />
//           Click “Add Date” to select interview dates
//         </div>
//       )}

//       {/* Date blocks */}
//       {dates.map((d) => (
//         <div
//           key={d.id}
//           className="relative p-5 bg-gray-50 space-y-4 rounded-xl border"
//         >
//           {/* The DateCard */}
//           <DateCard d={d} onToggle={() => handleToggle(d)} />

//           {/* The sliding panel anchored INSIDE this card */}
//           <div className="relative w-full overflow-hidden">
//             <SlideFromRight
//               open={drawerOpen && activeDate?.id === d.id}
//               className="mt-2"
//             >
//               <EmptySlotsPanel
//                 dateLabel={d.date.toLocaleDateString("en-US", {
//                   month: "long",
//                   day: "numeric",
//                   year: "numeric",
//                 })}
//                 onAddSlot={() => addSlot(d.id)}
//               />
//             </SlideFromRight>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import StyledReactDatePicker from "./StyledReactDatePicker";
import { DateCard } from "./DateCard";
import EmptySlotsPanel from "./EmptySlotsPanel";
import SlideFromRight from "./SlideFromRight";

export default function InterviewDateManager({ setTotalSlotCapicity ,dates, setDates}) {
  
  useEffect(() => {
    capcityHandler();
  }, [dates]);

  function capcityHandler() {
    let totalCapacityX = 0;

    dates.map((item, index) => {
      totalCapacityX += item.totalCapacity;
      console.log("item:", totalCapacityX);
    });
    setTotalSlotCapicity(totalCapacityX);
  }
  console.log("dates:slot", dates);

  console.log("interview date mana");

  const [showPicker, setShowPicker] = useState(false);
  const [activeDate, setActiveDate] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggle = (dateObj) => {
    if (activeDate?.id === dateObj.id) {
      setDrawerOpen((prev) => !prev); // toggle open/close
    } else {
      setActiveDate(dateObj);
      setDrawerOpen(true);
    }
  };

  return (
    <div className="w-full p-6 bg-white border rounded-xl shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Select Interview Dates
        </h2>

        <div className="mt-3 flex flex-row-reverse">
          <StyledReactDatePicker
            showPicker={showPicker}
            setShowPicker={setShowPicker}
            onDateSelected={(d) => {
              console.log(dates);
              setDates([
                ...dates,
                { id: Date.now(), date: d, slots: [], totalCapacity: 0 },
              ]);
              setShowPicker(false);
            }}
          />
        </div>
      </div>

      {/* Empty state */}
      {dates.length === 0 && (
        <div className="p-10 text-center text-gray-500">
          <Calendar className="mx-auto mb-3 text-gray-400" size={28} />
          Click “Add Date” to select interview dates
        </div>
      )}

      {/* Date blocks */}

      {/* Date blocks */}
      {dates.map((d) => (
        <div key={d.id} className="p-5 bg-gray-50 space-y-4 rounded-xl border">
          {/* Date Card */}
          <DateCard d={d} onToggle={() => handleToggle(d)} />

          {/* No animation — directly visible when active */}
          {activeDate?.id === d.id && (
            <div className="mt-3">
              <EmptySlotsPanel
                dateLabel={d.date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                onAddSlot={() => addSlot(d.id)}
                setDates={setDates}
                dateId={d.id}
                capcityHandler={capcityHandler}
                dates={dates}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

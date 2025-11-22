

// import React, { useState } from "react";
// import { CalendarPlus } from "lucide-react";
// import SlotCard from "./SlotCard";
// import DateSlotPreview from "./DateSlotPreview";

// export default function EmptySlotsPanel({
//   dateLabel = "November 18, 2025",
//   setDates,
//   dates,
//   dateId,
// }) {
  
//    const dateIndex = dates.findIndex((d) => d.id === dateId);
 

//   const [slots, setSlots] = useState([]);
 

//   function changeSlots(slotNo, field, value) {
  
//     setSlots((prev) =>
//       prev.map((slot, index) =>
//         index + 1 === slotNo ? { ...slot, [field]: field === "capacity" ? Number(value) || 0 : value } : slot
//       )
//     );
//     const newSlots = slots.map((slot, index) =>
//       index + 1 === slotNo ? { ...slot, [field]: value } : slot
//     );
//     let intitialCpacity=0;
//     if(field=='capacity'){
//        for (let index = 0; index < dates[dateIndex].slots.length; index++) {
//           intitialCpacity +=Number(dates[dateIndex].slots[index].capacity);
//       }
//     }
//     console.log('intial',intitialCpacity);
//     updateSlots(newSlots,intitialCpacity);

//   }


//   const updateSlots = (newSlots,capacity) => {

   

//     const updated = [...dates];
//     updated[dateIndex] = { ...updated[dateIndex], slots: newSlots ,totalCapacity:capacity};
//     console.log('updated:',updated);
//     setDates(updated);
//   };

//   function addSlot() {
//     if (slots.length > 0) {
//       const last = slots[slots.length - 1];
//       if (!last.time || !last.capacity) {
//         alert("Please complete the previous slot first.");
//         return;
//       }
//     }
//     const newSlot = {
//       slotNo: slots.length + 1,
//       time: "",
//       capacity: "",
//       instructions: "",
//     };
//     setSlots([...slots, newSlot]);
//     updateSlots([...slots, newSlot],dates[dateIndex].totalCapacity);

//     // setDates([...dates, {}]);
//   }

//   return (
//     <div className="bg-white border rounded-xl p-5 shadow-sm">
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-base font-semibold text-gray-800">
//           Slots for {dateLabel}
//         </h3>
//         <button
//           onClick={addSlot}
//           className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
//         >
//           + Add Time Slot
//         </button>
//       </div>

//       {dates[dateIndex].slots.length === 0 ? (
//         <div className="flex flex-col items-center justify-center text-center py-16 text-gray-500">
//           <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-3">
//             <CalendarPlus size={26} className="text-gray-400" />
//           </div>
//           <p className="text-sm font-medium">No time slots added yet.</p>
//           <p className="text-sm opacity-70">
//             Click "Add Time Slot" to create your first slot.
//           </p>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-4">
//           {dates[dateIndex].slots.map((slot, i) => (
//             <SlotCard
//               key={i}
//               slotNumber={i + 1}
//               time={slot.time}
//               capacity={slot.capacity}
//               interviewer={slot.interviewer}
//               instructions={slot.instructions}
//               changeSlots={changeSlots}
//             />
//           ))}
//           <DateSlotPreview totalSlots={dates[dateIndex].slots.length} totalCapacity={dates[dateIndex].totalCapacity}></DateSlotPreview>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import { CalendarPlus } from "lucide-react";
import SlotCard from "./SlotCard";
import DateSlotPreview from "./DateSlotPreview";

export default function EmptySlotsPanel({
  dateLabel = "November 18, 2025",
  setDates,
  dates,
  dateId,
}) {
  const dateIndex = dates.findIndex((d) => d.id === dateId);
  const currentDate = dates[dateIndex];
  const slots = currentDate?.slots || [];

  // ✅ Helper — updates the `dates` array in the parent state
  const updateSlots = (newSlots) => {
    const totalCapacity = newSlots.reduce(
      (sum, s) => sum + Number(s.capacity || 0),
      0
    );

    const updatedDates = [...dates];
    updatedDates[dateIndex] = {
      ...updatedDates[dateIndex],
      slots: newSlots,
      totalCapacity,
    };

    setDates(updatedDates);
  };

  // ✅ Handles changes in slot inputs
  const changeSlots = (slotNo, field, value) => {
    const newSlots = slots.map((slot, index) =>
      index + 1 === slotNo
        ? {
            ...slot,
            [field]:
              field === "capacity" ? Number(value) || 0 : value, // ✅ convert string "300" → 300
          }
        : slot
    );

    updateSlots(newSlots);
  };

  // ✅ Adds a new empty slot
  const addSlot = () => {
    if (slots.length > 0) {
      const last = slots[slots.length - 1];
      if (!last.time || !last.capacity) {
        alert("Please complete the previous slot first.");
        return;
      }
    }

    const newSlot = {
      slotNo: slots.length + 1,
      time: "",
      capacity: 0,
      interviewer: "",
      instructions: "",
    };

    updateSlots([...slots, newSlot]);
  };

  // ✅ Deletes a slot
  const deleteSlot = (slotNo) => {
    const newSlots = slots.filter((_, i) => i + 1 !== slotNo);
    updateSlots(newSlots);
  };

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold text-gray-800">
          Slots for {dateLabel}
        </h3>
        <button
          onClick={addSlot}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          + Add Time Slot
        </button>
      </div>

      {/* Empty State */}
      {slots.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16 text-gray-500">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-3">
            <CalendarPlus size={26} className="text-gray-400" />
          </div>
          <p className="text-sm font-medium">No time slots added yet.</p>
          <p className="text-sm opacity-70">
            Click "Add Time Slot" to create your first slot.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {slots.map((slot, i) => (
            <SlotCard
              key={i}
              slotNumber={i + 1}
              time={slot.time}
              capacity={slot.capacity}
              interviewer={slot.interviewer}
              instructions={slot.instructions}
              changeSlots={changeSlots}
              onDelete={() => deleteSlot(i + 1)}
            />
          ))}
          <DateSlotPreview
            totalSlots={slots.length}
            totalCapacity={currentDate.totalCapacity || 0}
          />
        </div>
      )}
    </div>
  );
}

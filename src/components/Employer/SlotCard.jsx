import React from "react";
import {
  Clock,
  Users,
  User,
  Info,
  Trash2,
} from "lucide-react";
import DateSlotPreview from "./DateSlotPreview";

export default function SlotCard({
  slotNumber = 1,
  time = "",
  capacity = "",
  interviewer = "",
  instructions = "",
  changeSlots,
  onDelete = () => {},
}) {
  return (
    <div className="w-full bg-blue-50  rounded-xl p-5 shadow-sm relative flex flex-col gap-4">
      {/* Delete Button (top-right) */}
      <button
        onClick={onDelete}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center 
                   bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
      >
        <Trash2 size={16} />
      </button>

      {/* Slot Header */}
      <p className="text-sm font-semibold text-gray-700 mb-4">
        Slot {slotNumber}
      </p>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Time */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <Clock size={14} className="text-blue-600" />
            Time
          </label>
          <select
            value={time}
            onChange={(e) => changeSlots(slotNumber,'time',e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:outline-none"
          >
            <option value="">Select time</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
          </select>
        </div>

        {/* Capacity */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <Users size={14} className="text-blue-600" />
            Capacity
          </label>
          <input
            type="number"
            placeholder="e.g., 10"
            value={capacity}
            onChange={(e) => changeSlots(slotNumber,'capacity',e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none"
          />
        </div>

        {/* Interviewer */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <User size={14} className="text-blue-600" />
            Interviewer (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g., John Smith"
            value={interviewer}
            
            className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none"
          />
        </div>

        {/* Instructions */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <Info size={14} className="text-blue-600" />
            Instructions (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g., Bring resume"
            value={instructions}
            onChange={(e) => changeSlots(slotNumber,'instructions',e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none"
          />
        </div>

      </div>
     
    </div>
  );
}

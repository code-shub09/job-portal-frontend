import React from "react";
import { Clock, Users, User, Info, Trash2 } from "lucide-react";
const DateSlotPreview = ({ totalSlots = 0, totalCapacity = 0 }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-6 text-sm text-gray-700 shadow-sm">
      {/* Total Slots */}
      <div className="flex items-center gap-2">
        <Clock size={15} className="text-blue-600" />
        <span>
          {totalSlots} {totalSlots === 1 ? "slot" : "slots"}
        </span>
      </div>

      {/* Divider */}
      <div className="h-4 w-px bg-gray-300"></div>

      {/* Total Capacity */}
      <div className="flex items-center gap-2">
        <Users size={15} className="text-green-600" />
        <span>
          Total capacity: <span className="font-medium">{totalCapacity}</span>
        </span>
      </div>
    </div>
  );
};

export default DateSlotPreview;

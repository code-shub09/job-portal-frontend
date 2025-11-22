import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Clock, MapPin, Video, Building2 } from "lucide-react";
import "./datepicker.css";

export default function AvailabilityWindow() {
  const [form, setForm] = useState({
    startDate: null,
    endDate: null,
    from: null,
    to: null,
    interval: "30m",
    notice: "1d",
    mode: "online",
    address: "",
    notes: "",
  });

  const update = (key, value) => setForm({ ...form, [key]: value });

  return (
    <div className="w-full bg-white rounded-xl border p-6 shadow-sm space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Set Up Availability Window</h3>
      <p className="text-sm text-gray-600">Define the period and times for candidate selection.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* ✅ Date Window */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Date Window</label>

          <div className="flex space-x-3">

            {/* Start Date */}
            <div className="relative w-1/2">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <CustomMonthPicker
                selected={form.startDate}
                onChange={(d) => update("startDate", d)}
                placeholder="Start"
              />
            </div>

            {/* End Date */}
            <div className="relative w-1/2">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <CustomMonthPicker
                selected={form.endDate}
                onChange={(d) => update("endDate", d)}
                placeholder="End"
              />
            </div>

          </div>
        </div>

        {/* ✅ Interview Mode */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Interview Mode</label>
          <div className="flex border rounded-lg overflow-hidden">
            <button
              onClick={() => update("mode", "online")}
              className={`w-1/2 py-2 flex items-center justify-center gap-2 ${
                form.mode === "online" ? "bg-blue-600 text-white" : "bg-white text-gray-700"
              }`}
            >
              <Video size={16} /> Online
            </button>

            <button
              onClick={() => update("mode", "offline")}
              className={`w-1/2 py-2 flex items-center justify-center gap-2 ${
                form.mode === "offline" ? "bg-blue-600 text-white" : "bg-white text-gray-700"
              }`}
            >
              <Building2 size={16} /> In-Person
            </button>
          </div>
        </div>

        {/* ✅ Daily Time Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Daily Availability</label>
          <div className="flex space-x-3">

            {/* Start Time */}
            <div className="relative w-1/2">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <DatePicker
                selected={form.from}
                onChange={(t) => update("from", t)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                placeholderText="Start"
                className="w-full pl-10 pr-3 py-2 border rounded-lg"
              />
            </div>

            {/* End Time */}
            <div className="relative w-1/2">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <DatePicker
                selected={form.to}
                onChange={(t) => update("to", t)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                placeholderText="End"
                className="w-full pl-10 pr-3 py-2 border rounded-lg"
              />
            </div>

          </div>
        </div>

        {/* ✅ Office Address */}
        {form.mode === "offline" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Office Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <input
                type="text"
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                placeholder="123 Main Street, SF, CA"
                className="w-full pl-10 pr-3 py-2 border rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Slot Interval */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Slot Interval</label>
          <select
            value={form.interval}
            onChange={(e) => update("interval", e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="30m">30 minutes</option>
            <option value="1h">1 hour</option>
            <option value="2h">2 hours</option>
          </select>
        </div>

        {/* Notice */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Min. Notice</label>
          <select
            value={form.notice}
            onChange={(e) => update("notice", e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="1d">1 day</option>
            <option value="2d">2 days</option>
            <option value="3d">3 days</option>
          </select>
        </div>

        {/* Notes */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium text-gray-700">Special Notes</label>
          <textarea
            rows={3}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Extra instructions for candidates..."
          />
        </div>

      </div>
    </div>
  );
}

/* ✅ Sub-component: Custom Month Picker with Blue Header */
function CustomMonthPicker({ selected, onChange, placeholder }) {
  const [openMonths, setOpenMonths] = useState(false);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0–11
  const nextMonth = (currentMonth + 1) % 12; // Allow next month also

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  return (
    <DatePicker
      selected={selected}
      onChange={(date) => onChange(date)}
      placeholderText={placeholder}
      dateFormat="dd MMM yyyy"
      className="w-full pl-10 pr-3 py-2 border rounded-lg"

      renderCustomHeader={({ date, decreaseMonth, increaseMonth, changeMonth }) => {
        const year = date.getFullYear();

        return (
          <div className="relative bg-blue-600 text-white px-3 py-2 flex items-center justify-between rounded-t-lg">

            {/* Prev button */}
            <button
              onClick={decreaseMonth}
              className="px-2 py-1 rounded hover:bg-blue-500"
            >
              ◀
            </button>

            {/* Month + Year clickable */}
            <div
              className="font-medium cursor-pointer"
              onClick={() => setOpenMonths(!openMonths)}
            >
              {months[date.getMonth()]} {year}
            </div>

            {/* Next button */}
            <button
              onClick={increaseMonth}
              className="px-2 py-1 rounded hover:bg-blue-500"
            >
              ▶
            </button>

            {/* ✅ Month List Popup */}
            {openMonths && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
                           w-44 bg-gray-50 border shadow-xl rounded-xl z-50 overflow-hidden"
              >
                {months.map((m, index) => {
                  
                  // ✅ Allow only current month & next month
                  const isDisabled =
                    index !== currentMonth && index !== nextMonth;

                  return (
                    <div
                      key={m}
                      onClick={() => {
                        if (!isDisabled) {
                          changeMonth(index);
                          setOpenMonths(false);
                        }
                      }}
                      className={`
                        px-3 py-2 cursor-pointer text-gray-800
                        ${index === date.getMonth() ? "bg-blue-600 text-white" : ""}
                        ${isDisabled 
                           ? "opacity-40 cursor-not-allowed"
                           : "hover:bg-blue-100"}
                      `}
                    >
                      {m}
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        );
      }}
    />
  );
}

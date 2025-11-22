import { useState } from "react";
import { Bell, MessageSquare, ChevronDown } from "lucide-react";

export default function JobseekerNavbar() {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "Browse Jobs", "Saved Jobs", "Applications", "Profile"];

  return (
    <nav className="w-full bg-white rounded-xl shadow-sm border border-gray-200 py-3 px-5 flex items-center justify-between">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-blue-600 rounded-md flex items-center justify-center text-white text-xl">
          📘
        </div>
        <span className="font-semibold text-lg text-gray-800">JobSeeker</span>
      </div>

      {/* CENTER MENU */}
      <ul className="flex items-center gap-6">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`cursor-pointer px-3 py-1 rounded-lg transition ${
              active === item
                ? "bg-blue-100 text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell size={22} className="text-gray-700" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
            3
          </span>
        </div>

        {/* Messages */}
        <div className="relative cursor-pointer">
          <MessageSquare size={22} className="text-gray-700" />
        </div>

        {/* User Avatar */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/40"
              className="w-9 h-9 rounded-full border"
              alt="profile"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <ChevronDown size={18} className="text-gray-600" />
        </div>
      </div>
    </nav>
  );
}

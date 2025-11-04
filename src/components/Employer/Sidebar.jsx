import React, { useState } from "react";
import {
  Home,
  User2,
  Briefcase,
  Users,
  Bookmark,
  Package,
  Mail,
  Bell,
  Trash2,
  LogOut,
  ChevronRight,
  ChevronDown,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import jobZillaLogo from "../../assets/logo2.png"; // ✅ update path if needed

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const menuItems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/" },
    { name: "Company Profile", icon: <User2 size={18} />, path: "/company-profile" },
    {
      name: "Jobs",
      icon: <Briefcase size={18} />,
      submenu: [
        { name: "Post a New Job", path: "/post-job" },
        { name: "Manage Jobs", path: "/jobs/manage" },
      ],
    },
    { name: "Candidates", icon: <Users size={18} />, path: "/candidates" },
    { name: "Bookmark Resumes", icon: <Bookmark size={18} />, path: "/bookmarks" },
    { name: "Packages", icon: <Package size={18} />, path: "/packages" },
    { name: "Messages", icon: <Mail size={18} />, path: "/messages", badge: 5 },
    { name: "Resume Alerts", icon: <Bell size={18} />, path: "/alerts" },

    { name: "Logout", icon: <LogOut size={18} />, path: "/logout" },
  ];

  return (
    <aside className="w-full min-h-screen bg-blue-50 text-gray-800 flex flex-col border-r border-gray-200 relative">
      {/* ✅ Logo */}
      

      {/* ✅ Menu */}
      <nav className="flex-1 p-3 space-y-1">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item.submenu ? (
              <>
                {/* Parent menu (with dropdown) */}
                <button
                  onClick={() => toggleMenu(item.name)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-md text-sm font-medium transition ${
                    openMenu === item.name
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  {openMenu === item.name ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>

                {/* Dropdown submenu */}
                {openMenu === item.name && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.submenu.map((sub, i) => (
                      <NavLink
                        key={i}
                        to={sub.path}
                        className={({ isActive }) =>
                          `block text-sm px-2 py-1.5 rounded-md ${
                            isActive
                              ? "text-blue-600 font-medium"
                              : "text-gray-600 hover:text-blue-600"
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Normal (non-dropdown) menu item
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between p-2.5 rounded-md text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* ✅ Settings Button */}
      <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-2 cursor-pointer hover:bg-gray-100">
        <Settings size={20} />
      </div>
    </aside>
  );
};

export default Sidebar;

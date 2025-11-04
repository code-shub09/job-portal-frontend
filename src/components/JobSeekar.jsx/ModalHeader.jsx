import React, { useState, useEffect } from "react";
import { FiX, FiArrowLeft } from "react-icons/fi";

/**
 * Responsive Modal Header Component
 *
 * Props:
 * - title: string → modal title text
 * - onClose: function → called when icon is clicked
 * - showBorder: boolean (optional) → adds subtle bottom border
 */
export default function ModalHeader({ title, onClose, showBorder = false }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      className={`w-full mb-4 ${showBorder ? "border-b border-slate-200 pb-3" : ""}`}
    >
      {/* 📱 Mobile Layout */}
      {isMobile ? (
        <div className="flex flex-col  gap-2">
          {/* Back icon on top */}
          <div className="w-full flex">
            <button
              onClick={onClose}
              className="text-slate-600 hover:text-slate-800 text-xl"
            >
              <FiArrowLeft />
            </button>
          </div>

          {/* Title below, centered */}
          
           <h3 className="text-lg font-semibold text-slate-900">
            {title}
           </h3>
        </div>
      ) : (
        // 🖥️ Desktop Layout
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-800 text-xl transition"
          >
            <FiX />
          </button>
        </div>
      )}
    </div>
  );
}

import React from "react";

export default function SlideFromRight({ open, children, className = "" }) {
  return (
    <div className={`relative w-full h-auto overflow-visible ${className}`}>
      {/* This div will slide from right INSIDE this relative container */}
      <div
        className={`absolute top-0 right-0 w-full transition-transform duration-300 ease-out transform-gpu
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
        style={{ position: "absolute" }}
      >
        {children}
      </div>
    </div>
  );
}

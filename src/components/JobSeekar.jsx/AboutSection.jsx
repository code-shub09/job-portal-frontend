import React, { useState } from "react";
import { Pencil } from "lucide-react"; // optional icon, remove if not using lucide-react

export default function AboutSection({ initialAbout = "", onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState(initialAbout);

  const handleSave = () => {
    if (!aboutText.trim()) return;
    setIsEditing(false);
    onSave && onSave(aboutText.trim());
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 text-lg">👤</span>
          <h2 className="text-base font-semibold text-slate-800">About</h2>
        </div>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 text-sm font-medium flex items-center gap-1 hover:text-blue-600"
          >
            <Pencil size={14} /> Edit
          </button>
        )}
      </div>

      {/* Display Mode */}
      {!isEditing ? (
        <p className="text-slate-700 leading-relaxed border-l-4 border-blue-500 pl-4 text-sm">
          {aboutText || (
            <span className="text-slate-400 italic">
              Add something about yourself…
            </span>
          )}
        </p>
      ) : (
        // Edit Mode
        <div className="space-y-3">
          <textarea
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            rows={5}
            placeholder="Write a short professional summary…"
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none resize-none"
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

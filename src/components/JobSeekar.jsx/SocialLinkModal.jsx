import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const icons = {
  linkedin: <FaLinkedin className="text-blue-600" />,
  github: <FaGithub className="text-slate-800" />,
  portfolio: <FaGlobe className="text-purple-600" />,
};

export default function SocialLinkModal({
  action = "add", // or "edit"
  social = "linkedin", // "linkedin" | "github" | "portfolio"
  currentLink = "",
  onSave = () => {},
  onClose = () => {},
   setShowmodal
}) {
  const [link, setLink] = useState(currentLink || "");
  const [error, setError] = useState("");
  function onClose(){
    setShowmodal(false);
  }

  useEffect(() => {
    setLink(currentLink || "");
  }, [currentLink]);

  const validateUrl = (url) => {
    const pattern = /^(https?:\/\/)[\w.-]+(\.[\w.-]+)+[/#?]?.*$/;
    return pattern.test(url);
  };

  const handleSave = () => {
    if (!validateUrl(link)) {
      setError("Please enter a valid URL starting with http or https.");
      return;
    }
    onSave(link);
    onClose();
  };

  const platformName =
    social.charAt(0).toUpperCase() + social.slice(1).toLowerCase();
  const title =
    action === "edit" ? `Edit ${platformName} Link` : `Add ${platformName} Link`;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg p-6 animate-fade-up relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {icons[social]}
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl">
            <FiX />
          </button>
        </div>
        <p className="text-sm text-slate-500 mb-5">
          {action === "edit"
            ? `Update your ${platformName} profile link below.`
            : `Add your ${platformName} profile link below.`}
        </p>

        {/* Input Field */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Profile URL <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="url"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
                setError("");
              }}
              placeholder={`https://${social}.com/in/username`}
              className={`w-full border ${
                error ? "border-red-400" : "border-slate-200"
              } rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none pr-16`}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
              <button
                type="button"
                onClick={() => navigator.clipboard.readText().then(setLink)}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                Paste
              </button>
              <button
                type="button"
                onClick={() => setLink("")}
                className="text-xs text-slate-400 hover:text-red-500"
              >
                Clear
              </button>
            </div>
          </div>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!link}
            className="px-5 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {action === "edit" ? "Save Changes" : "Add Link"}
          </button>
        </div>
      </div>
    </div>
  );
}

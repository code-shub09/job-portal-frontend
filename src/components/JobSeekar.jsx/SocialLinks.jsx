import React, { useState } from "react";
import { Linkedin, Github, Globe } from "lucide-react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import SocialLinkModal from "./SocialLinkModal";

import { BiEdit } from "react-icons/bi";
export function SocialLinks({ links = {} }) {
  const [action, setAction] = useState("add");
  const [social, setSocial] = useState("linkedin");
  const [ShowModal, setShowmodal] = useState(false);

  // ✅ fallback in case backend returns undefined
  const safeLinks = {
    linkedin: links.linkedin || "",
    github: links.github || "",
    portfolio: links.portfolio || "",
  };

  function handleLinkAdd(social_link) {
    setSocial(social_link);
    setShowmodal(true);
  }
  function handleLinkEdit(social_link,currentLink){
      setSocial(social_link,currentLink);
    setShowmodal(true);

  }

  return (
    <>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
            Links & Socials
          </h3>
        </div>

        {/* ✅ Always show all items: existing links OR Add buttons */}
        <div className="space-y-3">
          {/* ✅ LinkedIn */}
          {safeLinks.linkedin ? (
            <div className="flex  justify-between bg-blue-50 hover:bg-blue-100 px-4 py-3 rounded-lg text-slate-700 text-sm transition">
              <a
                href={safeLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row justify-between"
              >
                <div className="flex gap-1">
                  <FaLinkedin className="text-blue-600 w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </div>
                  {/* <span className="text-xs text-slate-500 truncate">
                  {safeLinks.linkedin}
                </span> */}
              </a>
              <BiEdit className="cursor-pointer"></BiEdit>
            </div>
          ) : (
            <button
              className="w-full flex items-center gap-2 border border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-sm transition"
              onClick={() => handleLinkAdd("linkedin")}
            >
              <FaLinkedin className="w-4 h-4" />
              Add LinkedIn
            </button>
          )}

          {/* ✅ GitHub */}
          {safeLinks.github ? (
            <div className="flex  justify-between bg-blue-50 hover:bg-blue-100 px-4 py-3 rounded-lg text-slate-700 text-sm transition">
              <a
                href={safeLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row justify-between"
              >
                <div className="flex gap-1">
                  <FaGithub className="text-black-600 w-5 h-5" />
                  <span>Github Profile</span>
                </div>
                  {/* <span className="text-xs text-slate-500 truncate">
                  {safeLinks.linkedin}
                </span> */}
              </a>
              <BiEdit className="cursor-pointer" onClick={()=>{handleLinkEdit("github",safeLinks.github)}}></BiEdit>
            </div>
          ) : (
            <button
              className="w-full flex items-center gap-2 border border-slate-500 text-slate-700 hover:bg-slate-100 px-4 py-3 rounded-lg text-sm transition"
              onClick={() => handleLinkAdd("github")}
            >
              <FaGithub className="w-4 h-4" />
              Add GitHub
            </button>
          )}

          {/* ✅ Portfolio */}
          {safeLinks.portfolio ? (
            <a
              href={safeLinks.portfolio}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between bg-purple-50 hover:bg-purple-100 px-4 py-3 rounded-lg text-slate-700 text-sm transition"
            >
              <div className="flex items-center gap-2">
                <FaGlobe className="text-purple-600 w-5 h-5" />
                <span>Portfolio Website</span>
              </div>
              <span className="text-xs text-slate-500 truncate">
                {safeLinks.portfolio}
              </span>
            </a>
          ) : (
            <button
              className="w-full flex items-center gap-2 border border-purple-500 text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-sm transition"
              onClick={() => handleLinkAdd("portfolio")}
            >
              <FaGlobe className="w-4 h-4" />
              + Add Portfolio
            </button>
          )}
        </div>
      </div>

      {/* ✅ Modal */}
      {ShowModal && (
        <SocialLinkModal
          action={action}
          social={social}
          currentLink={safeLinks[social]}
          setShowmodal={setShowmodal}
        />
      )}
    </>
  );
}

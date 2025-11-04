import React, { useState } from "react";
import { Linkedin, Github, Globe } from "lucide-react";
import SocialLinkModal from "./SocialLinkModal";
import { FaGithub } from "react-icons/fa";
export function SocialLinks({ links = {}, onAdd }) {
  const hasLinks = links.linkedin || links.github || links.portfolio;
  const [action, setAction] = useState("add");
  const [social, setSocial] = useState("linkedin");
  const [ShowModal, setShowmodal] = useState(false);
  function handleLinkAdd(social_link) {
    setSocial(social_link);
    setShowmodal(true);
  }

  const [link, setLinks] = useState({
    linkedin: "",
    github: "",
    portfolio: "",
  });
  return (
    <>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
            Links & Socials
          </h3>
          <button
            onClick={onAdd}
            className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg transition"
          >
            + Add
          </button>
        </div>

        {/* If Links Exist */}
        {hasLinks ? (
          <div className="space-y-3">
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 px-4 py-3 rounded-lg text-slate-700 text-sm transition"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="text-blue-600 w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-xs text-slate-500 truncate">
                  {links.linkedin}
                </span>
              </a>
            )}

            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-slate-100 hover:bg-slate-200 px-4 py-3 rounded-lg text-slate-700 text-sm transition"
              >
                <div className="flex items-center gap-2">
                  <Github className="text-slate-700 w-5 h-5" />
                  <span>GitHub Profile</span>
                </div>
                <span className="text-xs text-slate-500 truncate">
                  {links.github}
                </span>
              </a>
            )}

            {links.portfolio && (
              <a
                href={links.portfolio}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-purple-50 hover:bg-purple-100 px-4 py-3 rounded-lg text-slate-700 text-sm transition"
              >
                <div className="flex items-center gap-2">
                  <Globe className="text-purple-600 w-5 h-5" />
                  <span>Portfolio Website</span>
                </div>
                <span className="text-xs text-slate-500 truncate">
                  {links.portfolio}
                </span>
              </a>
            )}
          </div>
        ) : (
          // 🧩 Empty State
          <div className="space-y-3">
            <button
              className="w-full flex items-center gap-2 border border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-sm transition"
              onClick={() => {
                handleLinkAdd("linkedin");
              }}
            >
              <Linkedin className="w-4 h-4" />
              Add LinkedIn
            </button>

            <button
              className="w-full flex items-center gap-2 border border-slate-500 text-slate-700 hover:bg-slate-100 px-4 py-3 rounded-lg text-sm transition"
              onClick={() => {
                handleLinkAdd("github");
              }}
            >
              <Github className="w-4 h-4" />
              Add GitHub
            </button>

            <button
              className="w-full flex items-center gap-2 border border-purple-500 text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-sm transition"
              onClick={() => {
                handleLinkAdd("portfolio");
              }}
            >
              <Globe className="w-4 h-4" />
              Add Portfolio
            </button>
          </div>
        )}
      </div>

      {ShowModal && (
        <SocialLinkModal
          action={action}
          social={social}
          currentLink={link[social]}
          setShowmodal={setShowmodal}
        />
      )}
    </>
  );
}

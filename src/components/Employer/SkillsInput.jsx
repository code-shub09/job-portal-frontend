import React, { useState } from "react";

const SkillsInput = () => {
    const [FormData, setFormData]=useState({skills:[]});
  const [skill, setSkill] = useState("");

  const handleAddSkill = (e) => {
    e.preventDefault();
    const trimmedSkill = skill.trim();
    if (trimmedSkill && !FormData.skills.includes(trimmedSkill)) {
      setFormData({
        ...FormData,
        skills: [...FormData.skills, trimmedSkill],
      });
      setSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData({
      ...FormData,
      skills: FormData.skills.filter((s) => s !== skillToRemove),
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">Skills Required*</label>

      {/* Skills display */}
      <div className="flex flex-wrap gap-2 border rounded-lg p-2 min-h-[50px]">
        {FormData.skills.map((s, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {s}
            <button
              type="button"
              onClick={() => handleRemoveSkill(s)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </span>
        ))}

        {/* Input box */}
        <input
          type="text"
          placeholder="Type a skill and press Enter"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddSkill(e)}
          className="flex-1 outline-none p-1"
        />
      </div>

      {/* Add button (optional) */}
      <button
        onClick={handleAddSkill}
        className="mt-2 bg-blue-500 text-white rounded-lg px-3 py-1 w-fit hover:bg-blue-600"
      >
        Add Skill
      </button>
    </div>
  );
};

export default SkillsInput;

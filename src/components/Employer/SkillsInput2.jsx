import React, { useRef, useState } from "react";

const SkillsInput2 = ({formData, setFormData}) => {
  const [Skills, setSkills] = useState([]);

  const inputRef = useRef(null);

  function handleEnterSkill() {
    const value = inputRef.current.value.trim();
    console.log("clicked", value);
    if (value) {
      const newSkill =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      console.log("all skills: ", Skills);
      let skillsZ=[...formData.skillsRequired,newSkill];
      setFormData({...formData,skillsRequired:skillsZ});

      setSkills([...Skills, newSkill]);
      console.log("all skills: ", formData);
      inputRef.current.value = ""; // clear the input
      inputRef.current.focus(); // focus again for convenience
    }
  }

  return (
    <div>
      <div className="">
        {/* input button  */}
        <div className="flex flex-wrap border rounded-lg p-2 w-full">
          {/* skills entered div */}
          <div className="max-w-fit  mr-1 flex flex-wrap items-center gap-2">
            {Skills.map((skill, index) => {
              return (
                <div className="rounded-lg  bg-teal-500 text-white max-h-[30px] px-1" key={index}>
                  <span className="text-basic/4 font-normal pr-1">{skill}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(s)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex-1  min-w-fit mt-2">
            <label htmlFor="enter-skill">
              <input
                type="text"
                id="enter-skill"
                ref={inputRef}
                className="w-full h-full min-h-[42px] outline-none"
                placeholder="Type a skill and press enter ..."
              />
            </label>
          </div>
        </div>
        {/* add skill button */}
        <div className="">
          <button
          type="button"
            className="text-teal-500 text-lg p-2 rounded  cursor-pointer mt-2 "
            onClick={handleEnterSkill}
          >
            + Add Skill
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsInput2;

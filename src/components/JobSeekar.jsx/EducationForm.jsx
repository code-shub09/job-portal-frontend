import { useState } from "react";

export default function EducationForm() {
  const [profileType, setProfileType] = useState(""); // student, fresher, working
  const [educationLevel, setEducationLevel] = useState("");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Jobseeker Registration
      </h2>

      {/* Step 1 — Profile Type */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          What best describes you?
        </label>
        <select
          value={profileType}
          onChange={(e) => setProfileType(e.target.value)}
          className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
        >
          <option value="">-- Select --</option>
          <option value="student">🎓 Student (Currently Studying)</option>
          <option value="fresher">🆕 Fresher (Recently Graduated)</option>
          <option value="working">💼 Working Professional</option>
        </select>
      </div>

      {/* Step 2 — Education (For Student/Fresher) */}
      {(profileType === "student" || profileType === "fresher") && (
        <div className="space-y-3 border-t pt-4">
          <label className="block text-gray-700 font-medium">
            Highest Education Level
          </label>
          <select
            name="educationLevel"
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            className="w-full border rounded-lg p-2"
          >
            <option value="">-- Select Education --</option>
            <option value="12th">12th Pass</option>
            <option value="diploma">Diploma</option>
            <option value="graduation">Graduation</option>
            <option value="postgraduation">Post Graduation</option>
          </select>

          {educationLevel === "graduation" && (
            <>
              <div>
                <label className="block text-gray-700 mb-1">Course</label>
                <input
                  type="text"
                  name="course"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="e.g. B.Tech, BBA, B.Sc"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="e.g. Computer Science"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  College / University
                </label>
                <input
                  type="text"
                  name="college"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="e.g. Delhi University"
                />
              </div>
              {profileType === "student" && (
                <div>
                  <label className="block text-gray-700 mb-1">
                    Current Year of Study
                  </label>
                  <select
                    name="currentYear"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="">-- Select Year --</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="final">Final Year</option>
                  </select>
                </div>
              )}
              {profileType === "fresher" && (
                <div>
                  <label className="block text-gray-700 mb-1">
                    Year of Graduation
                  </label>
                  <input
                    type="number"
                    name="graduationYear"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                    placeholder="e.g. 2024"
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Step 3 — Experience (For Working Professionals) */}
      {profileType === "working" && (
        <div className="space-y-3 border-t pt-4">
          <label className="block text-gray-700 font-medium">
            Current Job Details
          </label>

          <div>
            <label className="block text-gray-700 mb-1">Current Company</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="e.g. Infosys, TCS"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Designation</label>
            <input
              type="text"
              name="designation"
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="e.g. Software Engineer"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              Experience (in years)
            </label>
            <input
              type="number"
              name="experience"
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="e.g. 2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Current CTC (₹)</label>
            <input
              type="number"
              name="ctc"
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="e.g. 500000"
            />
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => console.log("Final Data:", { profileType, ...formData })}
      >
        Save & Continue
      </button>
    </div>
  );
}

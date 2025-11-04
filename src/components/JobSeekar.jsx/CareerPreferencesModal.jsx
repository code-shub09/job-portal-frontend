
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import ModalHeader from "./ModalHeader";

export default function CareerPreferencesModal({ onClose, onSave, initialData = {} }) {
  const [formData, setFormData] = useState({
    roles: initialData.roles || [""],
    location: initialData.location || "",
    minctc: initialData.minctc || "",
    maxctc:initialData.maxctc || "",
    noticePeriod: initialData.noticePeriod || "",
  });

  // Handle changes in roles
  const handleRoleChange = (index, value) => {
    const updatedRoles = [...formData.roles];
    updatedRoles[index] = value;
    setFormData({ ...formData, roles: updatedRoles });
  };

  // Add new role (max 3)
  const addRole = () => {
    if (formData.roles.length < 3) {
      setFormData({ ...formData, roles: [...formData.roles, ""] });
    } else {
      alert("You can add a maximum of 3 preferred roles.");
    }
  };

  // Remove a role
  const removeRole = (index) => {
    const updatedRoles = formData.roles.filter((_, i) => i !== index);
    setFormData({ ...formData, roles: updatedRoles });
  };

  // Handle other field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate and submit
  const handleSubmit = () => {
    const { roles, location, ctc, noticePeriod } = formData;
    const filteredRoles = roles.filter((r) => r.trim() !== "");

    if (filteredRoles.length === 0 || !location || !ctc || !noticePeriod) {
      alert("Please fill all fields before saving.");
      return;
    }

    onSave({ ...formData, roles: filteredRoles });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full h-screen md:h-fit md::w-[90%] max-w-lg rounded-2xl shadow-lg p-6 relative">
        {/* Header */}
      <ModalHeader title={'Career Preferences'} onClose={onClose}></ModalHeader>


        <p className="text-sm text-slate-500 mb-5">
          Set up to 3 preferred job roles, along with your location, expected CTC, and notice period.
        </p>

        {/* Roles Section */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Preferred Job Roles <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {formData.roles.map((role, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={role}
                  onChange={(e) => handleRoleChange(idx, e.target.value)}
                  placeholder={`Role ${idx + 1}`}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
                />
                {formData.roles.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRole(idx)}
                    className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
                  >
                    <AiOutlineDelete size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add New Role Button */}
          {formData.roles.length < 3 && (
            <button
              type="button"
              onClick={addRole}
              className="flex items-center gap-1 text-blue-600 mt-2 text-sm font-medium"
            >
              <AiOutlinePlus size={16} /> Add another role
            </button>
          )}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Preferred Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Bangalore, Remote"
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
  
         <div >
           
            <div className="flex gap-4">
              
              <div className="flex-1">
                 <label className="block text-sm font-medium text-slate-700 mb-1">
                Minium CTC (in LPA) <span className="text-red-500">*</span>
              </label>
                <input
                type="number"
                name="minctc"
                value={formData.minctc}
                onChange={handleChange}
                placeholder="e.g. 10"
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
              />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                Maximum CTC (in LPA) <span className="text-red-500">*</span>
              </label>
                

                <input
                type="number"
                name="maxctc"
                value={formData.maxctc}
                onChange={handleChange}
                placeholder="e.g. 10"
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
              />
              </div>
            </div>

           
          </div>
        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

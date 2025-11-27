import React, { useState } from "react";
import { X } from "lucide-react";
import useShortlist from "../../../hooks/useShortlist";

export default function ShortlistModal({applicationId ,candidate,jobId ,setOpen}) {
  console.log('aid',jobId);
  function afterSucess(){

  }
  const [addNote, setAddNote] = useState(false);
  const [note, setNote] = useState("");
  const [notify, setNotify] = useState(false);
  const{mutate}=useShortlist(setOpen,jobId);

  function shortlistHandler(){
    mutate({applicationId,note,notify})
  } 
   
  return (
    <div className="bg-white w-full max-w-fit rounded-2xl shadow-xl p-6 animate-slideUp border">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold">Shortlist Candidate?</h2>
          <p className="text-sm text-gray-500">
            This action updates the candidate's status and timeline.
          </p>
        </div>
        <button onClick={()=>{setOpen(false)}}>
          <X className="text-gray-500 hover:text-gray-700" />
        </button>
      </div>

      {/* Candidate Info */}
      <div className="flex items-center gap-3 mb-5  p-3 rounded-lg">
        <img
          src={candidate.profilePic}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <p className="font-medium">
            {candidate.firstName.charAt(0).toUpperCase() +
              candidate.firstName.slice(1)}{" "}
            {candidate.lastName.charAt(0).toUpperCase() +
              candidate.lastName.slice(1)}
          </p>

          <p className="text-sm text-gray-500">{candidate.role}</p>
        </div>

        <span className="ml-auto px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
          {candidate.status}
        </span>
      </div>
       
       <hr className="border-spacing-0.5 border-gray-200"/>
      {/* Add Note Checkbox */}
      <div className="flex items-center gap-4 my-6 ">
        <input
          type="checkbox"
          checked={addNote}
          onChange={() => setAddNote(!addNote)}
          id="note"
          className="h-4 w-4 
    accent-blue-600 
    border-2 border-gray-400 
    rounded "
        />
        <div>
          <label className="text-sm/1 font-medium" htmlFor="note">
            Add a note
          </label>
          <p className="text-gray-500 text-sm/snug">
            Optional message for your team
          </p>
        </div>
      </div>

      {addNote && (
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full 
                 h-20 
                 resize-none 
                 border border-gray-300 
                 rounded-lg 
                 p-3 
                focus:border-blue-500"
          placeholder="Optional message for your team"
        />
      )}

      {/* Notify Candidate */}
     
        <div className="flex items-start justify-between gap-7 mb-6 mt-4">
          <div className="">
            <p className="text-sm font-medium ">Notify the candidate</p>
            <p className="text-sm text-gray-500">
              send an email letting them know they have been shortlisted
            </p>
          </div>

          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={notify}
              onChange={() => setNotify(!notify)}
            />
            <div
              className={`w-10 h-5 flex items-center rounded-full p-1 transition-all ${
                notify ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all ${
                  notify ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </label>
        </div>
  
      {/* Buttons */}
      <button
        onClick={shortlistHandler}
        className="w-full bg-blue-600 text-white py-2 rounded-3xl mt-4 font-semibold hover:bg-blue-700"
      >
        Shortlist Candidate
      </button>

      <button
        onClick={()=>{setOpen(false)}}
        className="w-full mt-3 text-gray-600 text-sm hover:text-gray-800"
      >
        Cancel
      </button>
    </div>
  );
}

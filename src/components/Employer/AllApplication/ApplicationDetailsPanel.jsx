import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaCalendarAlt, FaFilePdf } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDownload } from "react-icons/md";

export default function ApplicationDetailsPanel({ application }) {
  // Dummy data if none passed
  const data = application || {
    name: "Sarah Johnson",
    role: "Senior Frontend Developer",
    photo:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200",
    status: "shortlisted",
    email: "sarah.j@email.com",
    phone: "+1 (555) 234-5678",
    experience: "5 Years",
    currentCTC: "$85K",
    expectedCTC: "$95K",
    noticePeriod: "30 Days",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    resume: {
      fileName: "Resume_SarahJohnson.pdf",
      url: "#",
    },
    coverLetter:
      "I am excited to apply for the Senior Frontend Developer position. With 5 years of experience...",
    recruiterNotes: [
      {
        text: "Excellent portfolio projects",
        author: "John Smith",
        time: "1h ago",
      },
    ],
    timeline: ["Submitted", "Viewed", "Shortlisted"],
  };

  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim() === "") return;

    data.recruiterNotes.push({
      text: newNote,
      author: "You",
      time: "Just now",
    });

    setNewNote("");
  };

  return (
    <div className="w-full p-6 bg-white rounded-xl shadow-md overflow-y-scroll h-[90vh] border">
      {/* HEADER */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-4">
          <img
            src={data.photo}
            alt={data.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold">{data.name}</h2>
            <p className="text-gray-600">{data.role}</p>

            {/* Status dropdown */}
            <select className="mt-2 border rounded-md px-3 py-1 text-sm">
              <option>Applied</option>
              <option>Viewed</option>
              <option selected>Shortlisted</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Hired</option>
            </select>
          </div>
        </div>

        <button className="text-gray-500 hover:text-gray-700 text-xl">✕</button>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-3 mb-6">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          <FaPhone /> Call
        </button>

        <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-sm">
          <FaEnvelope /> Email
        </button>

        <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-sm">
          <FaCalendarAlt /> Schedule
        </button>

        <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-sm">
          <IoMdAdd /> Add Note
        </button>
      </div>

      {/* RESUME SECTION */}
      <section className="border p-4 rounded-lg mb-6 bg-gray-50">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Resume</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-md">
              View
            </button>
            <button className="px-3 py-1 text-sm flex items-center gap-1 bg-gray-200 rounded-md">
              <MdDownload /> Download
            </button>
          </div>
        </div>

        <div className="border border-dashed rounded-lg flex items-center justify-center p-4 bg-white">
          <div className="text-center">
            <FaFilePdf size={32} className="text-red-500 mx-auto mb-2" />
            <p className="text-gray-700 font-medium">{data.resume.fileName}</p>
          </div>
        </div>
      </section>

      {/* BASIC INFORMATION */}
      <section className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Basic Information</h3>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <p>
            <strong>Experience:</strong> {data.experience}
          </p>
          <p>
            <strong>Current CTC:</strong> {data.currentCTC}
          </p>
          <p>
            <strong>Expected CTC:</strong> {data.expectedCTC}
          </p>
          <p>
            <strong>Notice Period:</strong> {data.noticePeriod}
          </p>
          <p>
            <strong>Location:</strong> {data.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {data.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* COVER LETTER */}
      <section className="mb-6 border p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Cover Letter</h3>

        <p className="text-gray-600 text-sm mb-2">{data.coverLetter}</p>

        <button className="text-blue-600 text-sm font-medium">
          View Full Cover Letter →
        </button>
      </section>

      {/* RECRUITER NOTES */}
      <section className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h3 className="font-semibold mb-3">Recruiter Notes</h3>

        {data.recruiterNotes.map((note, idx) => (
          <div key={idx} className="mb-3 p-3 bg-white rounded-lg shadow-sm">
            <p className="text-gray-800">{note.text}</p>
            <p className="text-xs text-gray-500 mt-1">
              {note.author} • {note.time}
            </p>
          </div>
        ))}

        <textarea
          className="w-full p-2 border rounded-md text-sm"
          placeholder="Add a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        ></textarea>

        <button
          onClick={handleAddNote}
          className="w-full mt-2 px-3 py-2 bg-yellow-500 text-white rounded-md"
        >
          + Add New Note
        </button>
      </section>

      {/* TIMELINE */}
      <section className="p-4 border rounded-lg bg-gray-50">
        <h3 className="font-semibold mb-3">Application Timeline</h3>

        <ul className="space-y-2 text-sm">
          {data.timeline.map((stage, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {stage}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

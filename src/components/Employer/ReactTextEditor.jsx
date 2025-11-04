import React from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const RichTextEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list", // ✅ covers both ordered & bullet
    "link",
    "image",
  ];

  return (
    <div className="w-full mt-4">
     
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="bg-white rounded-lg min-h-[150px]"
        placeholder="Write the job description here..."
      />

      <div className="mt-6 border p-4 bg-gray-50 rounded-lg">
        <h3 className="text-gray-700 font-semibold mb-2">Preview:</h3>
        <div
          className="prose max-w-none text-gray-800"
          dangerouslySetInnerHTML={{
            __html: value || "<p><i>No description yet...</i></p>",
          }}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;

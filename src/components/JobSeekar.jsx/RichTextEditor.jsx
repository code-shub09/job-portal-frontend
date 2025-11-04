import React, { useState } from "react";
import ReactQuill from "react-quill-new";

const RichTextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-[80%] mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-3">Job Description</h2>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="bg-white rounded-lg"
      />
      <div className="mt-4 border p-3 bg-gray-50 rounded-lg">
        <h3 className="text-gray-700 font-medium">Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
};

export default RichTextEditor;

import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";

const UploadLogo = () => {
  const [logo, setLogo] = useState(null);
  const [imgName, setImgName] = useState("");

  // handle file selection
  function handleLogoChange(e) {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setLogo(URL.createObjectURL(file));
      console.log(file.name, logo);
      setImgName(file.name);
    }
  }

  return (
    <div>
        <p>Company Logo  <span className="text-xs text-gray-400"> &#40; Recommended  &#41;</span></p>
      <div>
        {/* <div className="border border-blue-500 bg-blue-300"> </div> */}
        {logo && (
          <div className="border-[2px] border-dashed border-red-400 max-w-fit">
            <img
              src={logo}
              alt="com[any logo"
              className="w-42 object-contain"
            />
            <p>{imgName}</p>
          </div>
        )}
        <label
          htmlFor="logo-upload"
          className="flex gap-4 justify-center h-24 items-center border border-dashed border-blue-500 bg-blue-200 text-center cursor-pointer"
        >
          <BsUpload></BsUpload>
          {logo ? (
            <p className="text-sm font-medium">Click to change logo</p>
          ) : (
            <p className="text-sm font-medium">Click to upload logo</p>
          )}

          <input
            type="file"
            id="logo-upload"
            accept="image/*"
            onChange={handleLogoChange}
            className="hidden"
          />
        </label>
        <p className="text-xs text-gray-400">
          Max file size: 1Mb and max resolution: 500px x 500px. File type: jpeg,
          jpg, png, gif, bmp
        </p>
      </div>
    </div>
  );
};

export default UploadLogo;

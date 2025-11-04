import React from "react";
import logo from "../../assets/companylogo1.png";

const NavPublic = () => {
  return (
    <div className="w-full fixed top-0 left-0 flex items-center justify-between  shadow-lg h-22 z-50 p-2 bg-white">
      <img src={logo} alt="" className="h-12" />
          
      <p className="text-gray-600 font-medium">Employer Portal</p>
    </div>
  );
};

export default NavPublic;

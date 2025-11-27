import React from "react";
import ApplicationSidebar from "../../components/Employer/AllApplication/ApplicationSidebar";
import AllApplicationsList from "../../components/Employer/AllApplication/AllApplicationsList";
import ApplicationDetailsPanel from "../../components/Employer/AllApplication/ApplicationDetailsPanel";
import { useParams } from "react-router-dom";
import UseAllApplications from "../../hooks/UseAllApplications";
import { FaChampagneGlasses } from "react-icons/fa6";

const AllApplication = () => {
  const { jobId } = useParams();

  const { data: applicationList, isLoading } = UseAllApplications(jobId);
  console.log('all',applicationList)

  return (
    <>
      {!isLoading ? (
        <div className="w-full">
          <div className="w-full m-auto flex justify-around">
            <div className="max-w-[20%] border  ">
              <ApplicationSidebar></ApplicationSidebar>
            </div>

            <div className="w-[47%] border">
              <AllApplicationsList
                applicationList={applicationList}
                jobId={jobId}
              ></AllApplicationsList>
            </div>

            <div className="w-[32%]">
              <ApplicationDetailsPanel></ApplicationDetailsPanel>
            </div>
          </div>
        </div>
      ) : (
        <div>loading ....</div>
      )}
    </>
  );
};

export default AllApplication;

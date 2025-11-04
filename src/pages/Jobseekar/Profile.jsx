// import React, { useState } from "react";
// import { ProfileHeader } from "../../components/JobSeekar.jsx/ProfileHeader";
// import { PersonalInfoCard } from "../../components/JobSeekar.jsx/PersonalInfoCard";
// import { CareerPreferencesCard } from "../../components/JobSeekar.jsx/CareerPreferencesCard";
// import { SocialLinks } from "../../components/JobSeekar.jsx/SocialLinks";
// import  {WorkExperience}  from "../../components/JobSeekar.jsx/WorkExperience";
// import { BoostProfileCard } from "../../components/JobSeekar.jsx/BoostProfileCard";
// import { EducationDetails } from "../../components/JobSeekar.jsx/EducationDetails";
// import AddExperienceForm from "../../components/JobSeekar.jsx/AddExperienceForm";
// import EducationModal from "../../components/JobSeekar.jsx/EducationModal";

// const Profile = () => {
//      const [open, setOpen] = useState(false);
//   const [eduList, setEduList] = useState([]);
//   function onEdit(){
//     setOpen(true);
//   }
//   const [IsAddExpOpen, setIsAddExpOpen] = useState(false);
//  function onClose(){

//  }
//   async function handleSave(edu) {
//     // Option A: save locally
//     setEduList((s) => [...s, edu]);

//     // Option B: save via API inside modal (modal already has axios fallback)
//     // Or call backend yourself:
//     // await axios.post('/api/jobseeker/education', edu, { withCredentials: true });
//   }
//   return (
//     <>
//     <div>
//       <div className="min-h-screen bg-slate-50 p-6 w-[90%] m-auto">
//         <ProfileHeader></ProfileHeader>

//         <div className="flex flex-col md:flex-row gap-6">
//           <PersonalInfoCard className="flex-1" />
//           <CareerPreferencesCard />
//         </div>
//       </div>
//       <div className="min-h-screen bg-slate-50 p-6 w-[90%] m-auto md:p-10 flex gap-6">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-6">
//           <EducationDetails
//             education={[
//               {
//                 type: "college",
//                 degree: "B.Tech",
//                 field: "Computer Science",
//                 institution: "Delhi University",
//                 passingYear: 2024,
//                 score: 8.6,
//               },
//               {
//                 type: "school",
//                 degree: "12th Grade",
//                 field: "Science",
//                 institution: "Delhi Public School",
//                 passingYear: 2020,
//                 score: 92,
//               },
//             ]}
//             onEdit={onEdit}
//           />

//           <WorkExperience
//           setIsAddExpOpen={setIsAddExpOpen}

//           />

//            <EducationModal isOpen={open} onClose={() => setOpen(false)} onSave={handleSave} />
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           <SocialLinks

//           />
//           <BoostProfileCard />
//         </div>
//       </div>

//     </div>
//     {IsAddExpOpen && (  <div className="fixed inset-0 w-screen bg-black/65 h-screen z-50 flex border border-amber-300 items-center justify-around"><AddExperienceForm setIsAddExpOpen={setIsAddExpOpen}></AddExperienceForm></div>)}

//     </>
//   );
// };

// export default Profile;
import React, { useEffect, useState } from "react";
import { ProfileHeader } from "../../components/JobSeekar.jsx/ProfileHeader";
import { PersonalInfoCard } from "../../components/JobSeekar.jsx/PersonalInfoCard";
import { CareerPreferencesCard } from "../../components/JobSeekar.jsx/CareerPreferencesCard";
import { SocialLinks } from "../../components/JobSeekar.jsx/SocialLinks";
import { WorkExperience } from "../../components/JobSeekar.jsx/WorkExperience";
import { BoostProfileCard } from "../../components/JobSeekar.jsx/BoostProfileCard";
import { EducationDetails } from "../../components/JobSeekar.jsx/EducationDetails";
import AddExperienceForm from "../../components/JobSeekar.jsx/AddExperienceForm";
import EducationModal from "../../components/JobSeekar.jsx/EducationModal";
import AboutSection from "../../components/JobSeekar.jsx/AboutSection";
import CareerPreferencesModal from "../../components/JobSeekar.jsx/CareerPreferencesModal";
import axios from "axios";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [eduList, setEduList] = useState([]);
  const [Load, setLoad] = useState(true);
  function onEdit() {
    setOpen(true);
  }
  const [IsAddExpOpen, setIsAddExpOpen] = useState(false);
  const [IsPreferenceModalOpen, setIsPreferenceModalOpen] = useState(false);

  function onClose() {
    setIsPreferenceModalOpen(false);
  }
  function onAdd() {
    setIsPreferenceModalOpen(true);
  }
  useEffect(() => {
    async function ProfileFetch() {
      try {
        const response = await axios.get(
          `https://job-portal-server-lr93.onrender.com/jobseekar/profile`,
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log(response);
        setLoad(false);
      } catch (error) {}
    }
    ProfileFetch();
  }, []);
  async function handleSave(edu) {
    // Option A: save locally
    setEduList((s) => [...s, edu]);

    // Option B: save via API inside modal (modal already has axios fallback)
    // Or call backend yourself:
    // await axios.post('/api/jobseeker/education', edu, { withCredentials: true });
  }
  return (
    <>
      {!Load ? (
        <div>
          <div>
            <div className="min-h-screen bg-slate-50 p-6 w-full md:w-[90%] m-auto">
              <ProfileHeader></ProfileHeader>

              <div className="flex flex-col md:flex-row gap-6 justify-between">
                <div className="flex flex-col w-[98%] md:w-[70%]  gap-4">
                  <AboutSection></AboutSection>
                  <PersonalInfoCard className="flex-1" />
                  <EducationDetails
                    education={[
                      {
                        type: "college",
                        degree: "B.Tech",
                        field: "Computer Science",
                        institution: "Delhi University",
                        passingYear: 2024,
                        score: 8.6,
                      },
                      {
                        type: "school",
                        degree: "12th Grade",
                        field: "Science",
                        institution: "Delhi Public School",
                        passingYear: 2020,
                        score: 92,
                      },
                    ]}
                    onEdit={onEdit}
                  />
                  <WorkExperience setIsAddExpOpen={setIsAddExpOpen} />
                  <CareerPreferencesCard onAdd={onAdd} />
                </div>
                <div className="w-full md:w-1/4 flex flex-col gap-4">
                  <SocialLinks />
                  <BoostProfileCard />
                </div>
              </div>
            </div>
          </div>
          {IsPreferenceModalOpen && (
            <CareerPreferencesModal onClose={onClose}></CareerPreferencesModal>
          )}

          {IsAddExpOpen && (
            <div className="fixed inset-0 w-screen bg-black/65 h-screen z-50 flex border border-amber-300 items-center justify-around">
              <AddExperienceForm
                setIsAddExpOpen={setIsAddExpOpen}
              ></AddExperienceForm>
            </div>
          )}
          <EducationModal
            isOpen={open}
            onClose={() => setOpen(false)}
            onSave={handleSave}
          />
        </div>
      ):(<div>loading ....</div>)}
    </>
  );
};

export default Profile;

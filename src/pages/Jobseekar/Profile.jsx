// import React, { useEffect, useState } from "react";
// import { ProfileHeader } from "../../components/JobSeekar.jsx/ProfileHeader";
// import { PersonalInfoCard } from "../../components/JobSeekar.jsx/PersonalInfoCard";
// import { CareerPreferencesCard } from "../../components/JobSeekar.jsx/CareerPreferencesCard";
// import { SocialLinks } from "../../components/JobSeekar.jsx/SocialLinks";
// import { WorkExperience } from "../../components/JobSeekar.jsx/WorkExperience";
// import { BoostProfileCard } from "../../components/JobSeekar.jsx/BoostProfileCard";
// import { EducationDetails } from "../../components/JobSeekar.jsx/EducationDetails";
// import AddExperienceForm from "../../components/JobSeekar.jsx/AddExperienceForm";
// import EducationModal from "../../components/JobSeekar.jsx/EducationModal";
// import AboutSection from "../../components/JobSeekar.jsx/AboutSection";
// import CareerPreferencesModal from "../../components/JobSeekar.jsx/CareerPreferencesModal";
// import axios from "axios";
// import { useProfile } from "../../hooks/useProfile";
// import { data } from "react-router-dom";
// import ProfileSkeleton from "../../components/JobSeekar.jsx/ProfileSkeleton";

// const Profile = () => {
//   const [showPhotoModal, setShowPhotoModal] = useState(false);

//   const [open, setOpen] = useState(false);
//   const [eduList, setEduList] = useState([]);
//   const [Load, setLoad] = useState(false);

//   function onEdit() {
//     setOpen(true);
//   }
//   const { data: Profile, isLoading, error } = useProfile();
//   // ✅ 4. Handle expired token or unauthorized
//   console.log("data---:", Profile);
//   if (error?.response?.status === 401) {
//     logout(); // update AuthContext
//     return <Navigate to="/login" replace />;
//   }
//   if (error) return <p>Something went wrong</p>;
//   console.log("data---:", Profile);
//   if (isLoading || !Profile) return <ProfileSkeleton/>;

//   const [IsAddExpOpen, setIsAddExpOpen] = useState(false);
//   const [IsPreferenceModalOpen, setIsPreferenceModalOpen] = useState(false);

//   function onClose() {
//     setIsPreferenceModalOpen(false);
//   }
//   function onAdd() {
//     setIsPreferenceModalOpen(true);
//   }

//   useEffect(() => {
//     async function ProfileFetch() {
//       try {
//         const response = await axios.get(
//           `http://localhost:4300/jobseekar/profile`,
//           {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//           }
//         );

//         console.log("profile res", response);
//         setProfile(response.data.profile);
//         setLoad(false);
//       } catch (error) {}
//     }
//     // ProfileFetch();
//   }, []);
//   async function handleSave(edu) {
//     // Option A: save locally
//     setEduList((s) => [...s, edu]);

//     // Option B: save via API inside modal (modal already has axios fallback)
//     // Or call backend yourself:
//     // await axios.post('/api/jobseeker/education', edu, { withCredentials: true });
//   }
//   return (
//     <>
//       <div>
//         <div>
//           <div className="min-h-screen bg-slate-50 p-6 w-full md:w-[90%] m-auto">
//             <ProfileHeader
//               name={Profile.firstName}
//               email={Profile.user.email}
//               profileImage={Profile.profilePic}
//             ></ProfileHeader>

//             <div className="flex flex-col md:flex-row gap-6 justify-between">
//               <div className="flex flex-col w-[98%] md:w-[70%]  gap-4">
//                 <AboutSection></AboutSection>
//                 <PersonalInfoCard className="flex-1" />
//                 <EducationDetails
//                   education={[
//                     {
//                       type: "college",
//                       degree: "B.Tech",
//                       field: "Computer Science",
//                       institution: "Delhi University",
//                       passingYear: 2024,
//                       score: 8.6,
//                     },
//                     {
//                       type: "school",
//                       degree: "12th Grade",
//                       field: "Science",
//                       institution: "Delhi Public School",
//                       passingYear: 2020,
//                       score: 92,
//                     },
//                   ]}
//                   onEdit={onEdit}
//                 />
//                 <WorkExperience
//                   setIsAddExpOpen={setIsAddExpOpen}
//                   experiences={Profile.WorkExperience}
//                 />
//                 <CareerPreferencesCard onAdd={onAdd} />
//               </div>
//               <div className="w-full md:w-1/4 flex flex-col gap-4">
//                 <SocialLinks links={Profile.socialLinks} />
//                 <BoostProfileCard />
//               </div>
//             </div>
//           </div>
//         </div>
//         {IsPreferenceModalOpen && (
//           <CareerPreferencesModal onClose={onClose}></CareerPreferencesModal>
//         )}

//         {IsAddExpOpen && (
//           <div className="fixed inset-0 w-screen bg-black/65 h-screen z-50 flex border border-amber-300 items-center justify-around">
//             <AddExperienceForm
//               setIsAddExpOpen={setIsAddExpOpen}
//             ></AddExperienceForm>
//           </div>
//         )}
//         <EducationModal
//           isOpen={open}
//           onClose={() => setOpen(false)}
//           onSave={handleSave}
//         />
//       </div>
//     </>
//   );
// };

// export default Profile;

import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { useProfile } from "../../hooks/useProfile";
import ProfileSkeleton from "../../components/JobSeekar.jsx/ProfileSkeleton";

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
import ResumeSection from "../../components/JobSeekar.jsx/ResumeSection";

const Profile = () => {
  const { logout } = useContext(AuthContext);

  // ✅ ALL HOOKS MUST BE AT THE TOP
  const { data: Profile, isLoading, error } = useProfile();
  const [open, setOpen] = useState(false);
  const [IsAddExpOpen, setIsAddExpOpen] = useState(false);
  const [IsPreferenceModalOpen, setIsPreferenceModalOpen] = useState(false);

  // ✅ Error → logout & redirect (still no hook below this)
  if (error?.response?.status === 401) {
    logout();
    return <Navigate to="/login" replace />;
  }

  if (error) return <p>Something went wrong</p>;

  // ✅ Skeleton loader (still no hook below)
  console.log(Profile);
  if (isLoading || !Profile) return <ProfileSkeleton />;
  function onClose() {
    setIsPreferenceModalOpen(false);
  }

  // ✅ NOW YOU CAN SAFELY RENDER THE UI
  return (
    <>
      <div className="min-h-screen bg-slate-50 p-6 w-full md:w-[94%] m-auto flex flex-col gap-6">
        <ProfileHeader
          name={Profile.profile.firstName}
          email={Profile.profile.user.email}
          profileImage={Profile.profile.profilePic}
        />

        <div className="flex flex-col md:flex-row gap-6 justify-between">
          {/* LEFT */}
          <div className="flex flex-col w-full md:w-[65%] gap-4">
            <AboutSection />

            <PersonalInfoCard />

            <EducationDetails
              education={Profile.profile.education || []}
              onEdit={() => setOpen(true)}
            />

            <WorkExperience
              experiences={Profile.profile.WorkExperience || []}
              setIsAddExpOpen={setIsAddExpOpen}
            />

            <CareerPreferencesCard
              onAdd={() => setIsPreferenceModalOpen(true)}
            />
            
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-[30%] flex flex-col gap-4">
            
            <ResumeSection existingResume={Profile.profile.resumeFile}></ResumeSection>
            <SocialLinks links={Profile.profile.socialLinks || []} />
            <BoostProfileCard />
             
          </div>
        </div>
      </div>

      {/* ✅ MODALS */}
      {IsAddExpOpen && (
        <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center">
          <AddExperienceForm setIsAddExpOpen={setIsAddExpOpen} />
        </div>
      )}

      {IsPreferenceModalOpen && (
        <CareerPreferencesModal
          isOpen={IsPreferenceModalOpen}
          onClose={() => setIsPreferenceModalOpen(false)}
        />
      )}

      <EducationModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Profile;

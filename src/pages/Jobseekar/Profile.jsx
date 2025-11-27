import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

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

// const Profile = () => {
//   const { logout } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//       roles: initialData.roles || [""],
//       location: initialData.location || "",
//       minctc: initialData.minctc || "",
//       maxctc:initialData.maxctc || "",
//       noticePeriod: initialData.noticePeriod || "",
//     });

//   // ✅ ALL HOOKS MUST BE AT THE TOP
//   const { data: Profile, isLoading, error } = useProfile();
//   const [open, setOpen] = useState(false);
//   const [IsAddExpOpen, setIsAddExpOpen] = useState(false);
//   const [IsPreferenceModalOpen, setIsPreferenceModalOpen] = useState(false);

//   // ✅ Error → logout & redirect (still no hook below this)
//   if (error?.response?.status === 401) {
//     logout();
//     return <Navigate to="/login" replace />;
//   }

//   if (error) return <p>Something went wrong</p>;

//   // ✅ Skeleton loader (still no hook below)
//   console.log(Profile);
//   if (isLoading || !Profile) return <ProfileSkeleton />;
//   function onClose() {
//     setIsPreferenceModalOpen(false);
//   }

//   // ✅ NOW YOU CAN SAFELY RENDER THE UI
//   return (
//     <>
//       <div className="bg-gray-200">
//             <div className="min-h-screen  p-6 w-full md:w-[85%] m-auto flex flex-col gap-6">
//         <ProfileHeader
//           name={Profile.profile.firstName}
//           email={Profile.profile.user.email}
//           profileImage={Profile.profile.profilePic}
//         />

//         <div className="flex flex-col md:flex-row gap-6 justify-between">
//           {/* LEFT */}
//           <div className="flex flex-col w-full md:w-[65%] gap-4">
//             <AboutSection />

//             <PersonalInfoCard />

//             <EducationDetails
//               education={Profile.profile.education || []}
//               onEdit={() => setOpen(true)}
//             />

//             <WorkExperience
//               experiences={Profile.profile.WorkExperience || []}
//               setIsAddExpOpen={setIsAddExpOpen}
//             />

//             <CareerPreferencesCard
//               onAdd={() => setIsPreferenceModalOpen(true)}
//             />

//           </div>

//           {/* RIGHT */}
//           <div className="w-full md:w-[30%] flex flex-col gap-4">

//             <ResumeSection existingResume={Profile.profile.resumeFile}></ResumeSection>
//             <SocialLinks links={Profile.profile.socialLinks || []} />
//             <BoostProfileCard />

//           </div>
//         </div>
//       </div>

//       </div>

//       {/* ✅ MODALS */}
//       {IsAddExpOpen && (
//         <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center">
//           <AddExperienceForm setIsAddExpOpen={setIsAddExpOpen} />
//         </div>
//       )}

//       {IsPreferenceModalOpen && (
//         <CareerPreferencesModal
//           isOpen={IsPreferenceModalOpen}
//           onClose={() => setIsPreferenceModalOpen(false)}
//           formData={formData} setFormData={setFormData}
//         />
//       )}

//       <EducationModal isOpen={open} onClose={() => setOpen(false)} />
//     </>
//   );
// };

// export default Profile;

export default function Profile() {
  // ----------- FIXED -------------
  const [formData, setFormData] = useState(null);
  // -------------------------------

  const { data: Profile, isLoading, error } = useProfile();
  const [open, setOpen] = useState(false);
  const [IsAddExpOpen, setIsAddExpOpen] = useState(false);
  const [IsPreferenceModalOpen, setIsPreferenceModalOpen] = useState(false);

  function handleEditCarrer() {
    const pref = Profile.profile.careerPreferences || {};

    setFormData({
      roles: pref.roles?.length ? pref.roles : [""],
      location: pref.location || "",
      minctc: pref.minctc || "",
      maxctc: pref.maxctc || "",
    });

    setIsPreferenceModalOpen(true);
  }
  // Initialize formData AFTER profile load
  useEffect(() => {
    if (Profile) {
      console.log("useeffect:", Profile);
      setFormData({
        roles: Profile.profile.prefferedRoles?.length
          ? Profile.profile.prefferedRoles
          : [""],

        location: Profile.profile.prefferedLocation?.[0] || "",
        minctc: Profile.profile.minctc || "",
        maxctc: Profile.profile.maxctc || "",
      });
    }
  }, [Profile]);

  console.log("formData", formData);

  // AUTH HANDLING
  if (error?.response?.status === 401) {
    // logout();
    return <Navigate to="/login" replace />;
  }

  if (error) return <p>Something went wrong</p>;

  if (isLoading || !Profile || !formData) return <ProfileSkeleton />;

  return (
    <>
      <div className="bg-gray-200">
        <div className="min-h-screen p-6 w-full md:w-[85%] m-auto flex flex-col gap-6">
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
                preferences={Profile.profile.careerPreferences}
                onAdd={() => setIsPreferenceModalOpen(true)}
                onEdit={handleEditCarrer}
              />
            </div>

            {/* RIGHT */}
            <div className="w-full md:w-[30%] flex flex-col gap-4">
              <ResumeSection existingResume={Profile.profile.resumeFile} />
              <SocialLinks links={Profile.profile.socialLinks || []} />
              <BoostProfileCard />
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      {IsAddExpOpen && (
        <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center">
          <AddExperienceForm setIsAddExpOpen={setIsAddExpOpen} />
        </div>
      )}

      {IsPreferenceModalOpen && (
        <CareerPreferencesModal
          onClose={() => setIsPreferenceModalOpen(false)}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      <EducationModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

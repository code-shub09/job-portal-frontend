import EducationForm from "../../components/JobSeekar.jsx/EducationForm";
import JobSeekerRegisterStep1 from "../../components/JobSeekar.jsx/JobSeekerRegisterStep1";

export default function RegisterPage() {
  const handleNext = (data) => {
    console.log("Step 1 data:", data);
    // Navigate to next step
  };

  // return <JobSeekerRegisterStep1 onNext={handleNext} />;
  return (
    <EducationForm></EducationForm>
  )
}


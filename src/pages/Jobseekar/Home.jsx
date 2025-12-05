import WelcomeHero from "../../components/JobSeekar.jsx/WelcomeHero";
import hero3 from "../../assets/hero4.png";
import JobSearchBar from "../../components/JobSeekar.jsx/JobSearchBar";
import WhyChooseJobSeeker from "../../components/JobSeekar.jsx/WhyChooseJobSeeke";
import RecommendedJobs from "../../components/JobSeekar.jsx/RecommendedJobs";
import { useState } from "react";

export default function Home() {
     


  
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  console.log(jobTitle);

  return (
    <div className="bg-blue-50">
      <WelcomeHero name="Sarah" illustrationSrc={hero3} />
      <JobSearchBar jobTitle={jobTitle} setJobTitle={setJobTitle} location={location} setLocation={setLocation}></JobSearchBar>
      <RecommendedJobs></RecommendedJobs>
      <WhyChooseJobSeeker></WhyChooseJobSeeker>
    </div>
  );
}

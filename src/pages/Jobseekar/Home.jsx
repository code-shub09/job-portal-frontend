import WelcomeHero from "../../components/JobSeekar.jsx/WelcomeHero";
import hero3 from "../../assets/hero4.png";
import JobSearchBar from "../../components/JobSeekar.jsx/JobSearchBar";
import WhyChooseJobSeeker from "../../components/JobSeekar.jsx/WhyChooseJobSeeke";
import RecommendedJobs from "../../components/JobSeekar.jsx/RecommendedJobs";

export default function Home() {
     

  // const handleSearch = async (data) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4300/employer/job-search",
  //       data,
  //       { withCredentials: true, headers: { "Content-Type": "application/json" } }
  //     );
  //     console.log("Search Results:", response.data);
  //     setJobs(response.data.jobs || []); // assuming backend sends {jobs:[...]}
  //   } catch (error) {
  //     console.error("Error searching jobs:", error);
  //     setJobs([]);
  //   }
  // }

  return (
    <div className="bg-blue-50">
      <WelcomeHero name="Sarah" illustrationSrc={hero3} />
      <JobSearchBar ></JobSearchBar>
      <RecommendedJobs></RecommendedJobs>
      <WhyChooseJobSeeker></WhyChooseJobSeeker>
    </div>
  );
}

import RunningText from "@/components/RunningText";
import HeroSection from "./HeroSection";
import { runText1 } from "@/data/dataRunningText";
import AboutMe from "@/components/AboutMe";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RunningText dataRunText={runText1} />
      <AboutMe />
    </>
  );
};

export default HomePage;

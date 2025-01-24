import RunningText from "@/components/RunningText";
import HeroSection from "./HeroSection";
import { runText1 } from "@/data/dataRunningText";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RunningText dataRunText={runText1} />
    </>
  );
};

export default HomePage;

import { myEducation, recentExperience } from "@/data/dataAboutMe";
import RecentExperience from "./RecentExperience";
import MyEducation from "./MyEducation";

const AboutMe = () => {
  return (
    <section className="bg-neutral-900 px-[10vw] py-[4rem] text-[#F0EFEB]">
      <h1 className="font-[Sora] text-[3rem] font-bold">About Me</h1>
      <p className="mb-[2rem] text-xl font-extralight">
        Hello I'm Fachry, Informatics students at the Kalimantan Institute of
        Technology and Professional Front End Developers with 3+ years of
        experience handling website projects from small, to big projects. I
        believe in my skill to create clean, modern and functional Websites.
      </p>
      <div className="flex justify-around gap-[10rem]">
        <RecentExperience listExperience={recentExperience} />
        <MyEducation listEducation={myEducation} />
      </div>
    </section>
  );
};

export default AboutMe;

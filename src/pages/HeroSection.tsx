import CustomButton from "@/components/CustomButton";
import "@/App.css";

const HeroSection = () => {
  return (
    <>
      <section className="flex min-h-[90vh] flex-col items-center justify-center gap-6 bg-[#F0EFEB]">
        <div>
          <div className="relative ml-[-5rem] h-[5rem] w-[5rem] animate-bounce overflow-hidden rounded-bl-full rounded-tl-full rounded-tr-full bg-[#449F91] shadow-lg shadow-neutral-500">
            <img
              style={{
                height: "100%",
                width: "auto",
                objectFit: "cover",
                transform: "translateX(8px) translateY(2px) rotate(5deg)",
              }}
              src="/images/my-picture.png"
              alt="my-picture"
            />
          </div>
          <p className="animate-chatIn w-fit rounded-bl-full rounded-br-full rounded-tr-full bg-white px-4 py-2 text-center font-[Sora] text-lg font-medium shadow-xl">
            Hi, I'm Fachry 😎
          </p>
        </div>
        <h1
          className="text-center font-[Sora] text-[5rem] leading-[6rem]"
          style={{
            textShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)", // Shadow hitam
          }}
        >
          <b className="text-[#449F91]">Front End Developer</b>
          <br />
          Based in <b className="text-shadow text-[#FFAF12]">Indonesia</b>
        </h1>
        <p className="mb-5 text-center text-lg font-light text-[#a09c95]">
          I would be happy to help create a user-friendly and intuitive website
          <br /> with a modern interface design
        </p>
        <CustomButton text="Lets Talk" />
      </section>
    </>
  );
};

export default HeroSection;

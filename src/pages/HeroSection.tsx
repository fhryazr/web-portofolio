import CustomButton from "@/components/CustomButton";

const HeroSection = () => {
  return (
    <>
      <section className="flex min-h-[90vh] flex-col items-center justify-center gap-6 bg-[#F0EFEB]">
        <div>
          <div className="relative ml-[-5rem] h-[5rem] w-[5rem] overflow-hidden rounded-bl-full rounded-tl-full rounded-tr-full bg-[#449F91] shadow-lg shadow-neutral-600">
            <img
              style={{
                height: "100%",
                width: "auto",
                objectFit: "cover",
                transform: "translateX(8px) translateY(2px) rotate(5deg)",
              }}
              src="src/assets/images/my-picture.png"
              alt="my-picture"
            />
          </div>
          <p className="w-fit rounded-full bg-white px-4 py-2 text-center font-[Sora] text-lg font-medium shadow-xl">
            Hi, I'm Fachry 😎
          </p>
        </div>
        <h1 className="text-center text-[5rem] leading-[6rem]">
          <b>Front End Developer</b>
          <br />
          Based in <b>Indonesia</b>
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

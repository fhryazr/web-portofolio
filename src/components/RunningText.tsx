import Marquee from "react-fast-marquee";

type RunningTextProps = {
  dataRunText: {
    title: string;
    data: string;
  }[];
};

const RunningText = ({ dataRunText }: RunningTextProps) => {
  return (
    <section className="flex min-h-[15vh] bg-[#449F91]">
      <Marquee className="flex gap-16" speed={100}>
        <div className="flex gap-16">
          {dataRunText.map(({ title, data }) => (
            <p
              className="font-[Sora] text-5xl font-bold text-white"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Shadow hitam
              }}
            >
              <span className="text-[#F0EFEB]">{title + " "}</span>
              <span className="text-[#FFAF12]">{data}</span>
            </p>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default RunningText;

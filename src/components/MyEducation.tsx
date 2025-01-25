import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type MyEducationProps = {
  listEducation: {
    year: string;
    title: string;
    place: string;
  }[];
};

const MyEducation = ({ listEducation }: MyEducationProps) => {
  return (
    <section className="w-full">
      <h1 className="font-[Sora] text-2xl font-bold">My Education</h1>
      <Accordion type="single" disabled>
        {listEducation.map(({ year, title, place }, index) => (
          <AccordionItem key={index} value={`${index}`}>
            <AccordionTrigger>
              <div className="flex items-center gap-10">
                <span className="font-[Sora] text-lg font-semibold text-[#FFAF12]">
                  {year}
                </span>
                <div>
                  <h1 className="text-2xl">{title}</h1>
                  <p className="text-lg font-extralight">{place}</p>
                </div>
              </div>
            </AccordionTrigger>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default MyEducation;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type RecentExperienceProps = {
  listExperience: {
    year: string;
    title: string;
    place: string;
    detail: string;
  }[];
};

const RecentExperience = ({ listExperience }: RecentExperienceProps) => {
  return (
    <section className="w-full">
      <h1 className="font-[Sora] text-2xl font-bold">Recent Experience</h1>
      <Accordion type="single" collapsible>
        {listExperience.map(({ year, title, place, detail }, index) => (
          <AccordionItem key={index} value={`${index}`}>
            <AccordionTrigger name="drop">
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
            <AccordionContent className="text-lg">{detail}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default RecentExperience;

import { Button } from "./ui/button";

type CustomButtonProps = {
  text: string;
};
const CustomButton = ({ text }: CustomButtonProps) => {
  return (
    <div className="group relative cursor-pointer">
      <Button className="text-md relative border-[2px] border-black bg-[#449F91] px-16 py-6 text-transparent">
        {text}
      </Button>
      <Button className="text-md absolute left-[-6px] top-[-6px] border-[2px] border-black bg-white px-16 py-6 text-black transition-all duration-300 ease-in-out group-hover:left-0 group-hover:top-0 group-hover:bg-[#FFAF12] group-hover:text-black">
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;

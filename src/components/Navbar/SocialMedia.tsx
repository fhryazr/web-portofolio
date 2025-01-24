import { ReactNode } from "react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

type SocialMediaProps = {
  listSocialMedia: {
    username: string;
    accoutId: string;
    linkAccount: string;
    icon: ReactNode;
  }[];
};

const SocialMedia = ({ listSocialMedia }: SocialMediaProps) => {
  return (
    <div className="flex gap-4">
      {listSocialMedia.map(
        ({ username, accoutId, linkAccount, icon }, index) => (
          <TooltipProvider>
            <Tooltip key={index} delayDuration={300}>
              <TooltipTrigger>
                <a
                  href={linkAccount}
                  target="_blank"
                  className="text-neutral-600 transition-all duration-300 ease-in-out hover:text-[#449F91]"
                >
                  {icon}
                </a>
              </TooltipTrigger>
              <TooltipContent className="text-center">
                <p>{username}</p>
                <p>{accoutId}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
      )}
    </div>
  );
};

export default SocialMedia;

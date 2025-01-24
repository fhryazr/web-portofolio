import { navbarLink, socialMedia } from "@/data/dataNavbar";
import NavbarIcon from "./NavbarIcon";
import NavbarLink from "./NavbarLink";
import SocialMedia from "./SocialMedia";
import useScrollShadow from "@/hooks/useScrollShadow";

const Navbar = () => {
  const isScrolled = useScrollShadow();
  return (
    <nav
      className={`w-full py-4 px-[10vw] fixed flex justify-between items-center top-0 z-[10] mx-auto bg-[#F0EFEB] ${
        isScrolled ? "shadow-md" : "shadow-none"
      } transition-all duration-500`}>
      <NavbarIcon />
      <NavbarLink listLink={navbarLink} />
      <SocialMedia listSocialMedia={socialMedia} />
    </nav>
  );
};

export default Navbar;

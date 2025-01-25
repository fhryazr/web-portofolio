import { navbarLink } from "@/data/dataNavbar";
import NavbarLink from "./Navbar/NavbarLink";

const Footer = () => {
  const copyright = "©";
  const thisYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center gap-2 bg-[#F0EFEB] py-4 text-sm">
      <NavbarLink listLink={navbarLink} />
      <span>
        {`${copyright + thisYear} Fachry - All Right Reserved ✨ UI Design Inspired by `}
        <a
          href="https://dribbble.com/shots/18217157-Arip-Personal-Portofolio"
          className="text-[#449F91] underline underline-offset-2"
        >
          Hello Arip
        </a>
      </span>
    </footer>
  );
};

export default Footer;

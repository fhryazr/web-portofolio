import { Button } from "../ui/button";

type NavbarLinkProps = {
  listLink: { name: string; to: string }[];
};

const NavbarLink = ({ listLink }: NavbarLinkProps) => {
  return (
    <div className="flex gap-5">
      {listLink.map((link, index) => (
        <Button
          className="text-md font-[Sora] transition-all duration-300 ease-in-out hover:text-[#449F91]"
          key={index}
          variant="link"
          onClick={() => console.log(link.to)}
        >
          {link.name}
        </Button>
      ))}
    </div>
  );
};

export default NavbarLink;

import { Button } from "../ui/button";

type NavbarLinkProps = {
  listLink: { name: string; to: string }[];
};

const NavbarLink = ({ listLink }: NavbarLinkProps) => {
  return (
    <div>
      {listLink.map((link, index) => (
        <Button
          className="text-md font-[Sora]"
          key={index}
          variant="link"
          onClick={() => console.log(link.to)}>
          {link.name}
        </Button>
      ))}
    </div>
  );
};

export default NavbarLink;

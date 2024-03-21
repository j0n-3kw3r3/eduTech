import { Avatar, BreadcrumbItem, Breadcrumbs, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { FiBell, FiMail } from "react-icons/fi";
export default function Results() {
  return (
    <div>
      {" "}
      <Navbar isBordered className=" mb-4 ">
        <NavbarContent justify="start">
          <NavbarBrand>Result</NavbarBrand>
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <div className="mr-4 flex gap-4 ">
            <FiBell className="text-foreground cursor-pointer" size={20} />
            <FiMail className="text-foreground cursor-pointer" size={20} />
          </div>
          <Avatar
            as="button"
            className="transition-transform"
            color="primary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <div className="curor-pointer ">
            <div className="text-primary cursor-pointer ">Jason Hughes</div>
            <div className="text-foreground text-xs cursor-pointer ">Parent</div>
          </div>
        </NavbarContent>
      </Navbar>
      <Breadcrumbs>
        <BreadcrumbItem color="black">Parent</BreadcrumbItem>
        <BreadcrumbItem color="primary">Results</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}

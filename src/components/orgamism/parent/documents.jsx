import { Avatar, BreadcrumbItem, Breadcrumbs, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { FiBell, FiMail } from "react-icons/fi";

export default function Documents(ParentData) {
  return (
    <div>
      {" "}
      <Navbar isBordered className=" mb-4 ">
        <NavbarContent justify="start">
          <NavbarBrand>Documents</NavbarBrand>
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
            name={ParentData.ParentData.name}
            size="sm"
            src={ParentData.ParentData.url}
          />
          <div className="curor-pointer ">
            <div className="text-primary cursor-pointer ">{ParentData.ParentData.name}</div>
            <div className="text-foreground text-xs cursor-pointer ">Parent</div>
          </div>
        </NavbarContent>
      </Navbar>
      <Breadcrumbs>
        <BreadcrumbItem color="black">Parent</BreadcrumbItem>
        <BreadcrumbItem color="primary">Documents</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}

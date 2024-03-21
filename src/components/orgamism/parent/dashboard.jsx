import { Avatar, BreadcrumbItem, Breadcrumbs, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { FiBell, FiMail } from "react-icons/fi";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Dashboard(ParentData) {
  const navigate = useNavigate()
    const location = useLocation();

    const studentData = location?.state?.studentData;
   
  
  return (
    <>
      <Navbar className=" mb-4 w-full pt-4 ">
        <NavbarContent justify="start">
          <NavbarBrand>Dashboard</NavbarBrand>
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
            showFallback
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
        <BreadcrumbItem color="primary" onClick={() => {
          navigate(`/parentdashboard/ward`);
        }} >Dashboard</BreadcrumbItem>
        <BreadcrumbItem color="warning">
          {studentData?.name}
        </BreadcrumbItem>
      </Breadcrumbs>

      <Outlet />
    </>
  );
}

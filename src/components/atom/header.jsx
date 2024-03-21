import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import logo from "../../assets/image/logo.svg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About Us", "Contact Us"];

  return (
    <>
      {" "}
      <Navbar
        position="static"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="md:py-[1.2em] py-1 "
      >
        <NavbarBrand>
          <div className="flex ">
            <Image className="rounded-lg" alt="" src={logo} />
            <div className="width-[5.31rem] height-[1.88rem] leading-tight md:pt-5 pt-3 flex flex-col ">
              <h1 className="md:text-xl  ml-2 text-primary ">eDucura</h1>
              <p className="text-[0.38rem]  ">...Promoting Educational Excellence</p>
            </div>
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-[2.50em]" justify="end">
          <NavbarItem isActive>
            <a color="foreground" href="#home">
              Home
            </a>
          </NavbarItem>
          <NavbarItem>
            <a href="#about">About Us</a>
          </NavbarItem>
          <NavbarItem>
            <a color="foreground" href="#contact">
              Contact Us
            </a>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <a
                className="w-full "
                color={index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"}
                href="#"
                size="lg"
              >
                {item}
              </a>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}

import { Button, Checkbox, Image, Input, Tab, Tabs } from "@nextui-org/react";
import logo from "../assets/image/logo.svg";
import laptop from "../assets/image/reg laptop.svg";
import { Link } from "react-router-dom";
import google from "../assets/image/Google.svg";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState("admin");

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="w-full grid h-full grid-cols-2 grid-rows-1">
      <div className="text-white bg-primary h-full p-[5%] ">
        <div className="flex  ">
          <Image className="rounded-lg" alt="" src={logo} />
          <div className="width-[5.31rem] height-[1.88rem] leading-tight md:pt-4 pt-2 flex flex-col ">
            <h1 className="md:text-lg ">eDucura</h1>
            <p className="text-[0.38rem]  ">...Promoting Educational Excellence</p>
          </div>
        </div>
        <h1 className="mt-20 text-5xl font-bold text-center ">Welcome to eDucura</h1>
        <p className="text-center mt-4">The place for every school and every Parent</p>
        <div className="mt-10">
          <Image src={laptop} className="md:scale-100 scale-75 -ml-10 md:ml-0 " />
        </div>
      </div>
      <div className=" my-[15%] mx-[15%] text-primary ">
        <h1 className="text-4xl font-bold mb-10 "> Login</h1>

              <Tabs variant="underlined" aria-label="Tabs variants" selectedKey={selected} 
                color="primary"  onSelectionChange={setSelected}>
          <Tab key="admin" title="admin Login">
            <div className="flex flex-col gap-5 mt-8 ">
              <Input
                type="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                variant="bordered"
                radius="sm"
                className="text-black"
              />

              <Input
                label="Password"
                variant="bordered"
                radius="sm"
                placeholder="Enter your password"
                labelPlacement="outside"
                className="text-black"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeSlashIcon className=" text-default-400 pointer-events-none" height={20} width={20} />
                    ) : (
                      <EyeIcon className=" text-default-400 pointer-events-none" height={20} width={20} />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
            </div>
            <div>
              <Checkbox radius="sm" size="sm" className="mt-4 text-xs">
                Remember me
              </Checkbox>
              <Link to="admin/dashboard">
                <Button className="mt-4 bg-primary text-white w-[100%] " radius="sm" variant="contained">
                  Login
                </Button>
              </Link>

              <div className="flex items-center gap-4 text-slate-500 mt-20">
                <span className="border-slate-500 border-b-1 w-full"></span>
                <span className=" "> or </span>
                <span className="border-slate-500 border-b-1 w-full"></span>
              </div>

              <div className="mt-4 text-black flex justify-center gap-4 items-center cursor-pointer">
                <Image src={google} className="rounded-lg" />
                <p>Continue with Google</p>
              </div>
            </div>
          </Tab>
          <Tab key="parent" title="parent/Teachers Login">
            <div className="flex flex-col gap-5 mt-8 ">
              <Input
                type="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                variant="bordered"
                radius="sm"
                className="text-black"
              />

              <Input
                label="Password"
                variant="bordered"
                radius="sm"
                placeholder="Enter your password"
                labelPlacement="outside"
                className="text-black"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeSlashIcon className=" text-default-400 pointer-events-none" height={20} width={20} />
                    ) : (
                      <EyeIcon className=" text-default-400 pointer-events-none" height={20} width={20} />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
            </div>
            <div>
              <Checkbox radius="sm" size="sm" className="mt-4 text-xs">
                Remember me
              </Checkbox>
              <Link to="/parentdashboard/ward">
                <Button className="mt-4 bg-primary text-white w-[100%] " radius="sm" variant="contained">
                  Login
                </Button>
              </Link>

              <div className="flex items-center gap-4 text-slate-500 mt-20">
                <span className="border-slate-500 border-b-1 w-full"></span>
                <span className=" "> or </span>
                <span className="border-slate-500 border-b-1 w-full"></span>
              </div>

              <div className="mt-4 text-black flex justify-center gap-4 items-center cursor-pointer">
                <Image src={google} className="rounded-lg" />
                <p>Continue with Google</p>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

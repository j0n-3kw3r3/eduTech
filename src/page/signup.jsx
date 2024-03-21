import { Button, Checkbox, Image, Input } from "@nextui-org/react";
import logo from "../assets/image/logo.svg";
import laptop from "../assets/image/reg laptop.svg";
import { Link } from "react-router-dom";
import google from "../assets/image/Google.svg";
export default function Signup() {
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
        <h1 className="text-4xl font-bold ">Sign up</h1>
        <p className="mt-4">Sign up with your Email</p>
        <p className="mt-4">
          <span className="text-black">Already have an account?</span> <Link to="/login">Login</Link>
        </p>
        <div className="flex flex-col gap-5 mt-8 ">
          <Input
            type="text"
            label="Full Name"
            labelPlacement="outside"
            placeholder="Enter your full name"
            variant="bordered"
            radius="sm"
          />

          <Input
            type="email"
            label="Email"
            labelPlacement="outside"
            placeholder="Enter your email"
            variant="bordered"
            radius="sm"
          />

          <Input
            type="password"
            label="Password"
            labelPlacement="outside"
            placeholder="Enter your password"
            variant="bordered"
            radius="sm"
          />
        </div>
        <div>
          <Checkbox radius="sm" size="sm" className="mt-4 text-xs">
            I agree to the <span className="text-primary"> Terms and Conditions</span> and{" "}
            <span className="text-primary"> Privacy Policies</span>
          </Checkbox>
          <Link to="/parentdashboard">  
          <Button className="mt-4 bg-primary text-white w-[100%] " radius='sm' variant="contained">
            Sign up
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
      </div>
    </div>
  );
}

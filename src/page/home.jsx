import { Button, Image, Input, Textarea } from "@nextui-org/react";
import Header from "../components/atom/header";
import laptop from "../assets/image/laptop.svg";
import about from "../assets/image/About Us.svg";
import contact from "../assets/image/CONTACT Us.svg";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div id="home" className="md:pt-[9em] pt-[9.81em]  relative">
        <div className="bg-primary text-white md:w-[52.50em] md:pl-[4.38em] py-[2.94em] px-[5%] md:py-[5.75em] ">
          <h1 className=" md:text-7xl text-3xl text-center md:text-start font-bold md:mb-[0.63rem] mb-[0.38em] ">
            Welcome to eDucura
          </h1>
          <p className="md:text-xl text-sm font-thin ">The place for every school and every Parent</p>
          <Link to="/signup">
            <Button className="text-primary bg-white md:mt-10 mt-5 hidden md:block " size="md" radius="none">
              Get started
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="text-primary bg-white md:mt-10 mt-5 block md:hidden " size="sm" radius="none">
              Get started
            </Button>
          </Link>
        </div>
        <div className="absolute z-10 md:top-[3.6em] top-36 md:-right-12 -right-64 scale-[45%] md:scale-85 w-[53.75em]">
          <Image className=" " src={laptop} />
        </div>
      </div>
      {/* about us */}
      <div id="about" className="md:pt-[18em] pt-80 pb-32">
        <Image src={about} className=" md:scale-100 scale-75 -ml-10 md:ml-0 " />
        <div className="flex md:flex-row flex-col justify-evenly py-10 md:gap-0 gap-6">
          <div className="border border-black border-r-8 border-b-8 bg-white p-8 shadow-md gap-5 md:w-[30.00rem] w-[90%] mx-auto md:mx-0  ">
            <h1 className="md:text-3xl text-xl font-bold text-primary md:text-center mb-4">What is eDucura?</h1>
            <p className="text-gray-700 text-base text-justify md:leading-relaxed">
              We are a cloud-based e-management platform that helps schools across Africa to optimize daily operations
              to drive data analytics with insight into the school activities ranging from registration, attendance,
              results, tests, exams, school fees payment and we also function as a way to bridge the school-parent gap.
            </p>
          </div>
          <div className="border border-black border-r-8 border-b-8 bg-white p-8 shadow-md gap-5 md:w-[30.00rem] w-[90%] mx-auto md:mx-0  ">
            <h1 className="md:text-3xl text-xl font-bold text-primary md:text-center mb-4">Why eDucura?</h1>
            <p className="text-gray-700 text-base text-justify md:leading-relaxed">
              Via our platform parents can get real time update on their kids performance in school via our website,
              email and SMS. With our platform schools no longer have to struggle to deliver updates to parents and fees
              payment has been completely streamlined. Also parents can access the student files, results, fees reciept
              an lots more.
            </p>
          </div>
        </div>
        <div className="flex justify-end text-white ">
          <div className="bg-primary md:w-[50%] md:pl-[7.00em] py-[1.69em] px-5 ">
            <h1 className="font-bold md:text-2xl text-xl mb-3  tracking-wider ">Benefits of using eDuruca?</h1>
            <p className=" leading-6 md:w-[24.94em] md:text-base text-sm ">
              We have a world class simple and easy-to-use software that is customized uniquely for your school.{" "}
              <span className="font-bold">It takes less than 5 minutes to set up and account with us.</span>
            </p>
            <Link to="/signup">
              <p className="pt-10 cursor-pointer text-right md:mr-48 flex items-center gap-2 justify-end ">
                Click here to begin
                <ArrowRightIcon height={15} width={15} className="" />
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* contact us */}
      <div id="contact" className="md:pt-[5em] pb-32">
        <Image src={contact} className=" md:scale-100 scale-75 -ml-10 md:ml-0 " />
        <div className="container md:px-[20%] md:mt-20 mt-10 flex md:flex-row flex-col-reverse ">
          <div className="md:w-[40%] gap-4 flex md:flex-col flex-col mt-32 md:mt-0 ">
            <div>
              <p className="text-primary font-bold">Phone Number:</p>
              <p>+2347040795865</p>
            </div>
            <div>
              <p className="text-primary font-bold">Email:</p>
              <p>helloeducura@gmail.com</p>
            </div>
            <div className="flex gap-3">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
          <div className="md:w-[60%] flex flex-col gap-1">
            <h1 className="text-primary text-xl font-bold  ">Drop a Message</h1>
            <p>Reach out to us on our contact form and we will get back to you shortly.</p>
            <Input
              type="text"
              label="*Full name"
              labelPlacement={"outside"}
              className=" border  "
              radius="none"
              borderd="none"
              variant="bordered"
            />
            <div className="flex gap-3">
              <Input
                type="email"
                label="*Email"
                labelPlacement={"outside"}
                className=" border  "
                radius="none"
                borderd="none"
                variant="bordered"
              />
              <Input
                type="text"
                label="*Phone"
                labelPlacement={"outside"}
                className=" border  "
                radius="none"
                borderd="none"
                variant="bordered"
              />
            </div>
            <Textarea
              label="*Message"
              variant="bordered"
              disableAnimation
              disableAutosize
              radius="none"
              classNames={{
                base: "w-full mt-5",
                input: "",
              }}
            />
            <Button className="text-white bg-primary mt-5" radius="none">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

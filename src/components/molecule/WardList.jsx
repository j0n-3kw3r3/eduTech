import { Button, Image } from "@nextui-org/react";
import money from "../../assets/icons/money.svg";
import hart from "../../assets/icons/hart.svg";
import { useNavigate } from "react-router-dom";
import {data} from "../../assets/data/parentdata";

export function WardList() {
  const navigate = useNavigate();
 
  return (
    <div>
      <div className="flex mt-4 gap-6">
        <div className="flex w-full justify-between items-center pr-10 shadow-lg border p-4 rounded-md cursor-pointer ">
          <Image src={money} />
          <div>
            <p>Due Fees</p>
            <p>$4,500</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center pr-10 shadow-lg border p-4 rounded-md cursor-pointer ">
          <Image src={hart} />
          <div>
            <p>Results</p>
            <p>16</p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <h1 className="my-2 font-bold">My Wards</h1>
        <div className="grid grid-cols-2 gap-6 ">
          {data.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/parentdashboard/${item.name.toLowerCase().split(" ").join("")}`, {
                  state: { studentData: item },
                });
              }}
              key={index}
              className="flex w-full cursor-pointer hover:scale-[101%] ease-in-out duration-300  gap-4 border p-4 rounded-md shadow-lg"
            >
              <Image src={item.image} radius="full" />
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 w-full gap-10 ">
                  <p className="font-bold">Name:</p>
                  <p>{item.name}</p>
                </div>
                <div className="grid grid-cols-2 w-full gap-10 ">
                  <p className="font-bold">Gender:</p>
                  <p>{item.gender}</p>
                </div>
                <div className="grid grid-cols-2 w-full gap-10 ">
                  <p className="font-bold">Class:</p>
                  <p>{item.class}</p>
                </div>
                <div className="grid grid-cols-2 w-full gap-10 ">
                  <p className="font-bold">Admission No:</p>
                  <p>{item.admissionNo}</p>
                </div>
                <div className="grid grid-cols-2 w-full gap-10 ">
                  <p className="font-bold">Admission Date:</p>
                  <p>{item.dateOfAdmission}</p>
                </div>
                <div className="grid grid-cols-2 w-full gap-10 ">
                  <p className="font-bold">School:</p>
                  <p>{item.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <Button className=" bg-primary text-white " size="md" radius="none">
            Register Ward
          </Button>
        </div>
      </div>
    </div>
  );
}

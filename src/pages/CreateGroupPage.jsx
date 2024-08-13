import React from "react";
import { Userdata } from "../datas/Userdata";
import { ButtonGroup, Sidemenu, UserIcon, UserPreview } from "../Components";
import { HiOutlineBell } from "react-icons/hi";
import HomeCardComponents from "../components/Homecards/HomeCardComponents";
import { ArrowLeft } from "lucide-react";

const CreateGroupPage = () => {
  return (
    <section className="lg:w-full md:w-full sm: w-screen pt-5 px-5 pb-24 md:pb-5 h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex justify-between md:hidden gap-5">
        <Sidemenu />
        <div className="flex gap-3">
          <button className="relative p-2 flex items-center rounded-full border-2 w-16 h-16">
            <HiOutlineBell className="w-9 h-9 text-text ms-1" />
            <div className=" bg-light-purple border border-primary absolute top-[16.5px] right-[19.5px] rounded-full w-[8px] h-[8px]"></div>
          </button>
        </div>
      </div>
      <div className="flex  justify-center relative font-montserrat font-semibold">
        <ArrowLeft className="absolute left-0" />
        <h1 className="text-xl md:text-2xl">Create Group</h1>
      </div>
      <div className="py-4 flex flex-col ">
        <input
          type="text"
          placeholder="Group Title"
          className=" placeholder:text-black outline-none text-lg md:text-xl font-poppins"
        />
        <input
          type="text"
          placeholder="Group Description"
          className="outline-none pt-2 font-roboto"
        />
        <h1 className="text-4xl font-medium pt-2 font-poppins">
          Make a Group call with friends{" "}
        </h1>
        <p className="pt-2 opacity-70 font-roboto ps-2">Group Admin</p>
      </div>

      <UserPreview name={"Rashid Khan"} bio={"Group Admin"} />
      <p className="opacity-70 font-roboto py-2 ps-2">Invited Members</p>
      <div className="gap-4 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 py-2 ps-3 md:gap-3">
        <UserIcon />
        {Userdata.map((user) => {
          return <UserIcon add={"light"} url={user.img} />;
        })}
      </div>
      <button
        type="submit"
        className="w-full bg-deep-plum text-white py-2 rounded-full hover:bg-purple-900 transition duration-200"
      >
        Create
      </button>
    </section>
  );
};

export default CreateGroupPage;

import React from "react";

import { HomeCard, LeftBar, RightBar, UserPreview } from "../Components";
import { Bell } from "lucide-react";
import PageTitle from "../components/PageTitle/PageTitle";
import Sent from "./Sent/Sent";
import Accept from "./Accept/Accept";
import Reject from "./Reject/Reject";
import Recieved from "./Recieved/Recieved";
import ShortList from "./ShortList/ShortList";

const HomePage = () => {
  return (
    <>
      <ShortList/>
    </>
  );
};

export default HomePage;

import React from "react";

import { HomeCard, LeftBar, RightBar, UserPreview } from "../Components";
import { Bell } from "lucide-react";
import PageTitle from "../components/PageTitle/PageTitle";
import Sent from "./Sent/Sent";
import Accept from "./Accept/Accept";
import Reject from "./Reject/Reject";
import Recieved from "./Recieved/Recieved";
import ShortList from "./ShortList/ShortList";
import BottomNavbar from "../components/BottomNavbar";
import Contacted from "./Contacted/Contacted";
import ShortListedBy from "./ShortListedBy/ShortListedBy";
import ViewedMyProfile from "./ViewedMyProfile/ViewedMyProfile";

const HomePage = () => {
  return (
    <>
      <ViewedMyProfile/>
    </>
  );
};

export default HomePage;

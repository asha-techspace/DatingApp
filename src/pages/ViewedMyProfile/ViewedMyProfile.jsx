import React from "react";
import { UserPreview } from "../../Components";
import { Search } from "lucide-react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Userdata } from "../../datas/Userdata";
import BottomNavbar from "../../components/BottomNavbar";

function ViewedMyProfile() {
  return (
    <div>
      <div className="bg-deep-plum">
        <PageTitle icon={Search} pageTitle={"Viewed My Profile"} />
        <div className="rounded-t-4xl bg-white pt-14 sm:border-2 border-deep-plum">
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
            fav={true}
            close={true}
          />
         {Userdata.map((user) => {
          return (
            <UserPreview
              key={user.id}
              url={user.img}
              name={user.firstName + user.lastName}
              bio={"Life is beautifull"}
              fav={true}
              close={true}
            />
          );
        })}
        </div>
      </div>
      <BottomNavbar/>
    </div>
  );
}

export default ViewedMyProfile;

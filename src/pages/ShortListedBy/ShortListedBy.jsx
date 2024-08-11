import React from "react";
import { UserPreview } from "../../Components";
import { Search } from "lucide-react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Userdata } from "../../datas/Userdata";

function ShortListedBy() {
  return (
    <div>
      <div className="bg-deep-plum">
        <PageTitle icon={Search} pageTitle={"Shortlisted By"} />
        <div className="rounded-t-4xl bg-white pt-14 sm:border-2 border-deep-plum">
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
    </div>
  );
}

export default ShortListedBy;

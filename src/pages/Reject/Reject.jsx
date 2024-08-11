import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle';
import { UserPreview } from '../../Components';
import { Search } from 'lucide-react';
import { Userdata } from '../../datas/Userdata';
import BottomNavbar from '../../components/BottomNavbar';

function Reject() {
  return (
    <div>
      <div className="bg-deep-plum">
        <PageTitle icon={Search} pageTitle={"Reject"} />
        <div className="rounded-t-4xl bg-white pt-14 sm:border-2 border-deep-plum">
          {Userdata.map((user) => {
            return (
              <UserPreview
                key={user.id}
                url={user.img}
                name={user.firstName + user.lastName}
                bio={"Life is beautifull"}
              />
            );
          })}
        </div>
      </div>
      <BottomNavbar/>
    </div>
  );
}

export default Reject
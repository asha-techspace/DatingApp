import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import { Search } from 'lucide-react'
import { UserPreview } from '../../Components';
import { Userdata } from '../../datas/Userdata';

function Sent() {
  return (
    <div className="bg-deep-plum">
      <PageTitle icon={Search} pageTitle={"Sent"} />
      <div className="rounded-t-4xl bg-white pt-14 sm:border-2 border-deep-plum">
        {Userdata.map((user) => {
          return (
            <UserPreview
              key={user.id}
              url={user.img}
              name={user.firstName + user.lastName}
              bio={"Life is beautifull"}
              close={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sent
import React from 'react'
import { UserPreview } from '../../Components';
import { Search } from 'lucide-react';
import PageTitle from '../../components/PageTitle/PageTitle';

function Recieved() {
  return (
    <div>
      <div className="bg-deep-plum">
        <PageTitle icon={Search} pageTitle={"Recieved"} />
        <div className="rounded-t-4xl bg-white pt-14 sm:border-2 border-deep-plum">
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
            fav={true}
            close={true}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
            fav={true}
            close={true}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
            fav={true}
            close={true}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
            fav={true}
            close={true}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
            fav={true}
            close={true}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
            fav={true}
            close={true}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
            phonecall={true}
            video={true}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
            phonecall={true}
            video={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Recieved
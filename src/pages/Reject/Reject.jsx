import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle';
import { UserPreview } from '../../Components';
import { Search } from 'lucide-react';

function Reject() {
  return (
    <div>
      <div className="bg-deep-plum">
        <PageTitle icon={Search} pageTitle={"Reject"} />
        <div className="rounded-t-4xl bg-white pt-14">
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
          />
          <UserPreview
            name={"Afrin Sabilla"}
            bio={"Life is not beautifull"}
          />
        </div>
      </div>
    </div>
  );
}

export default Reject
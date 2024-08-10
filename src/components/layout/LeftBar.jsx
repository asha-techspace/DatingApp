import React from "react";
import {
  House,
  Heart,
  MessageCircle,
  Star,
  Search,
  Settings,
} from "lucide-react";

const LeftBar = () => {
  return (
    <div className="fixed  h-screen text-white lg:text-lg  pt-5 w-1/5">
      <div className="flex">
        <h1 className="font-roboto lg:text-3xl font-bold mb-10 lg:ps-4">
          BuddyPair
        </h1>
        <Settings className="absolute right-2" />
      </div>
      <ul className="space-y-2">
        <li className="hover:bg-dark-wine">
          <a href="#" className="py-2 flex items-center lg:ps-4">
            <span className="mr-2">
              <House />
            </span>
            Home
          </a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="py-2 flex items-center lg:ps-4">
            <span className="mr-2">
              <Heart />
            </span>
            Likes
          </a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="py-2 flex items-center lg:ps-4">
            <span className="mr-2">
              <MessageCircle />
            </span>
            Messages
          </a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="py-2 flex items-center lg:ps-4">
            <span className="mr-2">
              <Star />
            </span>
            Favourites
          </a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="py-2 flex items-center lg:ps-4">
            <span className="mr-2">
              <Search />
            </span>
            Search
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;

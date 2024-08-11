import React from "react";
import UserIcon from "./UserIcon";
import { Heart, QrCode, X ,PhoneCall,Video} from "lucide-react";

const UserPreview = ({ url, name, bio, edit, qr, close, fav,phonecall,video }) => {
  return (
    <div className="py-4 flex items-center justify-between px-6 sm:px-2 hover:bg-light-purple cursor-pointer ">
      <div className="flex gap-5 items-center sm:gap-2 xl:gap-5">
        <UserIcon url={url} edit={edit} />
        <div>
          <p className="text-text font-semibold sm:text-base xl:text-lg text-lg">{name}</p>
          <p className="text-text-light text-sm">{bio}</p>
        </div>
      </div>
      <div className="flex gap-5 sm:gap-2 xl:gap-5">
        {qr ? <QrCode className="w-6 h-6 text-[#24786d]" /> : ""}
        {fav ? <Heart className="w-6 h-6 text-text-light" /> : ""}
        {close ? <X className="w-6 h-6 text-text-light" /> : ""}
        {phonecall ? <PhoneCall className="w-6 h-6 text-text-light" /> : ""}
        {video ? <Video className="w-6 h-6 text-text-light" /> : ""}
      </div>
    </div>
  );
};

export default UserPreview;

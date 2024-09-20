import { X } from "lucide-react";
import { useState } from "react";

const notificationComponent = (props) => {
  const notification = props.notification;
  const time = new Date().toLocaleTimeString();
  console.log(notification);
  
  return (
    <>
      {notification ? (

        <div className=" relative text-primary rounded-2xl w-[100%] bg-deep-plum p-8">
        {
            notification.type  === "friend_request" ? (
                <div>
                  <p className=" text-sm text-gray-400 font-light">
                      {`Received a friend request from ${notification.sender.firstName} `}
                  </p>
                </div>
            ) : (notification.type  === "shortlist")? (                
                <div>
                    <p className=" text-sm text-gray-400 font-light">
                       {`You were shortlisted by ${notification.sender.firstName} `}
                    </p>
                </div>): (<h1 className=" mb-4 font-semibold text-xl mt-4">Message</h1>)}

          {/* <div className={props.message==="news"? "absolute top-6 right-6": "absolute top-6 right-6 flex flex-col h-24 justify-center"}>
            <X className=" cursor-pointer" onClick={onhandleNotification} />
          </div>

          <div className={props.message === "news" ? " mt-4 text-gray-400" : "text-gray-400 ml-10"}>
            Today {time}
          </div> */}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default notificationComponent;


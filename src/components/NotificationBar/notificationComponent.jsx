import { X } from "lucide-react";
import { useState } from "react";
import { AlertCircle, CircleCheckBig, CircleX } from "lucide-react"; // import icons

const NotificationComponent = (props) => {
  const [visible, setVisible] = useState(true); // To control visibility of notifications

  const handleNotificationClose = () => {
    setVisible(false); // Hide the notification when the user closes it
  };

  const time = new Date().toLocaleTimeString(); // Get current time

  if (!visible) return null; // Don't render if the notification is closed

  // Set icon and color based on the notification type
  let icon, color;
  switch (props.type) {
    case 'success':
      icon = <CircleCheckBig />;
      color = "text-green-500";
      break;
    case 'alert':
      icon = <AlertCircle />;
      color = "text-yellow-500";
      break;
    case 'error':
      icon = <CircleX />;
      color = "text-red-500";
      break;
    case 'news':
      icon = <></>; // No icon for news
      color = "text-blue-600";
      break;
    default:
      icon = <AlertCircle />; // Default icon
      color = "text-gray-500";
  }

  return (
    <div className={`relative text-primary rounded-2xl w-[100%] bg-deep-plum p-8 ${color}`}>
      {props.type === 'news' ? (
        <div>
          <h1 className="text-sm capitalize font-semibold">
            NEWS
          </h1>
          <h1 className="mb-4 font-semibold text-xl mt-4">News Title</h1>
          <p className="text-sm text-gray-400 font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium atque odit reprehenderit ipsum nam voluptatem!
          </p>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <div className="font-bold">{icon}</div>
          <h1 className="mb-4 font-semibold text-xl mt-4">{props.message}</h1>
        </div>
      )}

      <div className="absolute top-6 right-6">
        <X className="cursor-pointer" onClick={handleNotificationClose} />
      </div>

      <div className={props.type === 'news' ? "mt-4 text-gray-400" : "text-gray-400 ml-10"}>
        Today {time}
      </div>
    </div>
  );
};

export default NotificationComponent;

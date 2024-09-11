import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { AlertCircle, Bell, CircleX, CircleCheckBig } from "lucide-react";
import NotificationComponent from "./notificationComponent";
import { Link } from "react-router-dom";

const NotificationBar = ({ userId }) => {
  // State to hold incoming notifications
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('http://localhost:5000'); // Update with your server URL

    // Join the user's room for personalized notifications
    socket.emit('join-room', userId);

    // Listen for new notifications from the server
    socket.on('receive-notification', (notification) => {
      // Prepend new notifications to the list
      setNotifications((prevNotifications) => [notification, ...prevNotifications]);
    });

    // Cleanup when component unmounts
    return () => {
      socket.disconnect();
    };
  }, [userId]);

  return (
    <div className="w-full p-4 backdrop-blur-lg h-full z-10">
      <nav className="absolute right-14 lg:right-24 border-2 border-gray-300 rounded-full p-2 mb-4">
        <Link to="/">
          <Bell />
        </Link>
      </nav>

      <div className="flex flex-col items-center gap-4 justify-center w-full mt-16">
        {/* Loop over notifications and render NotificationComponent for each */}
        {notifications.map((notif, index) => (
          <NotificationComponent
            key={index}
            message={notif.message}
            type={notif.type} // pass type to dynamically control styles (success, error, etc.)
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;

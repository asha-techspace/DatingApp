import { AlertCircle, Bell, CircleX, CircleCheckBig } from "lucide-react";
import NotificationComponent from "./notificationComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from "axios";

const socket = io('http://localhost:8800');

const NotificationBar = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch initial notifications
    axios.get(`http://localhost:5000/api/v1/users/notifications`, { withCredentials: true })
      .then((res) => {
        console.log(`Fetched Notifications:`, res.data);
        setNotifications(res.data);
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
      });

    // Join room specific to the user (replace 'currentUserId' with actual user ID)
    const userId = "currentUserId"; // Replace with actual user ID logic
    socket.emit('joinRoom', userId);

    // Listen for real-time notifications
    socket.on('newNotification', (notification) => {
      console.log("Received New Notification:", notification);
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.off('newNotification');
    };
  }, []);

  return (
    <div className="w-full p-4 backdrop-blur-lg h-full z-10">
      <div className="flex">
        <div>{notifications.length}</div>
        <nav className="absolute right-14 lg:right-24 border-2 border-gray-300 rounded-full p-2 mb-4">
          <Link to="/home">
            <Bell />
          </Link>
        </nav>
      </div>

      <div className="flex flex-col items-center gap-4 justify-center w-full mt-16">
        {notifications.map((notification) => (
          <NotificationComponent key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;

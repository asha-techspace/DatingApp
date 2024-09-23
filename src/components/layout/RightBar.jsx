import React, { useState, useEffect } from "react";
import axios from "axios";
import { LogOut, Bell, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { navData } from "../../datas/navData";
import { MdInput } from "react-icons/md";
import { Button } from "@chakra-ui/react";
import { logout } from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';

const RightBar = () => {
  const [notification, setNotification] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0); // For storing the number of unread notifications
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userAuth.userInfo);

  const myProfileCookie = Cookies.get("myProfile");
  const decodedMyProfileCookie = decodeURIComponent(myProfileCookie);
  const cleanedMyProfileJson = decodedMyProfileCookie.startsWith("j:")
    ? decodedMyProfileCookie.slice(2)
    : decodedMyProfileCookie;
  const myProfile = cleanedMyProfileJson ? JSON.parse(cleanedMyProfileJson) : null;
  console.log(myProfile);

  useEffect(() => {
    // Fetch notifications from the backend
    axios
      .get(`http://localhost:5000/api/v1/users/notifications`, { withCredentials: true })
      .then((res) => {
        console.log(`Fetched Notifications::${res.data}`);
        const unreadNotifications = res.data.filter((notification) => !notification.viewed); // Filter unread notifications
        setUnreadCount(unreadNotifications.length); // Update unread count
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:5000/logout", null, { withCredentials: true });
      dispatch(logout());
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen bg-hot-purple text-white text-lg sm:text-sm md:text-sm lg:text-lg pt-2">
      {/* Profile Section */}
      <div className="flex justify-evenly items-center mt-4 ">
        <div className="flex  gap-2 items-center ">
          <div className="relative">
            {/* Profile Picture */}
            <img
              src={myProfile?.profileImage?.url} // Replace with the actual profile picture URL
              alt="Profile"
              className="rounded-full w-12 h-12 object-cover"
            />
            {/* Online Indicator */}
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-hot-purple"></span>
          </div>
          <div className="text-center ">
            <h2 className="font-bold text-lg">
              {userInfo?.firstName + " " + userInfo?.lastName || "User Name"}
            </h2>
            <p className="text-sm text-green-300">Prime Member</p>
            <p className="text-sm text-green-300">Online</p>
          </div>
        </div>

        <div className="relative">
          <Link to="/notification">
            <Bell fill="white" />
            {unreadCount > 0 && (
              <div className="absolute top-[-10px] right-[-10px] w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-xs text-white">
                {unreadCount}
              </div>
            )}
          </Link>
        </div>
      </div>

      {/* Menu Items */}
      <div className="overflow-y-auto py-5" style={{ height: "550px" }}>
        <ul className="space-y-2">
          {navData?.map((item) => (
            <Link to={item.href} key={item.title}>
              <li className="hover:bg-dark-wine  px-4 py-2">{item.title}</li>
            </Link>
          ))}
        </ul>
        <div className="hover:bg-dark-wine">
          <Button cl variant={"none"} onClick={handleLogout}>
            <MdInput className="text-lg text-white -rotate-180 ..." />
            <h3 className="text-white ml-4">Logout</h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

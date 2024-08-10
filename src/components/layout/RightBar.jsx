import React from 'react'
import { LogOut } from 'lucide-react';
import UserIcon from '../usericons/UserIcon';
import UserPreview from '../usericons/UserPreview';

const RightBar = () => {
  return (
    <div className='fixed h-screen w-1/5 text-white lg:text-lg  pt-5'>
      <div className='relative flex  ps-4 py-4'>
      <img
        src={"https://images.pexels.com/photos/13704184/pexels-photo-13704184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        alt="user icon"
        className={`inline-block h-14 w-14 rounded-full ring-2 ring-white object-center`}
      />
      <div className='ps-4'>
        <h5 className='text-red-500 text-base'>Afrin Sabilla</h5>
        <p className='text-yellow-400 text-sm'>Prime member</p>
        <p className='text-green-500 text-xs'>Online</p>
      </div>
      </div>
      <ul className='space-y-2'>
        <li className="hover:bg-dark-wine">
          <a href='#' className="block ps-5 mt-10 pt-2">My Profile</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="block ps-5 pt-2">Sent Request</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="block ps-5 pt-2">Viewed My Profile</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="block ps-5 pt-2">Accept Request</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="block ps-5 pt-2">Reject</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="block ps-5 pt-2">Received</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="block ps-5 pt-2">Shortlisted By</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="block ps-5 pt-2">Shortlisted</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="block ps-5 pt-2">Contacted</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="block ps-5 pt-2">Message</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="block px-4 pt-2">Settings</a>
        </li>
        <li className="hover:bg-dark-wine">
          <a href="#" className="px-4 pt-2 flex items-center justify-center">
            <span className="mr-2"><LogOut /></span>Logout
          </a>
        </li>
      </ul>
    </div>
  )
}

export default RightBar;

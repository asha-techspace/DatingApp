import React, { useEffect, useState } from 'react'
import { InteractionIcon, MatchCardComponent, SubHeader } from '../Components'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MatchPage = () => {
  const [user, setUser] = useState([]);
  const [sortedUser, setsortedUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]); // State to store the filtered users

  const userinfo = JSON.parse(sessionStorage.getItem('userInfo'))
  const filterSort = JSON.parse(localStorage.getItem('selectedOptions'))
  const userID = userinfo._id
  console.log('userid', userID);
  console.log('selectedOptions', filterSort);

  // Fetch all profiles and match percentage data, then compare
  useEffect(() => {
    const getMatchPercent = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/users/compare', { withCredentials: true });
        // Filter users with matchPercentage greater than 10%
        const filteredUsers = response.data.results.filter(user => user.matchPercentage >= 0);
        // Sort the filtered users by matchPercentage from high to low
        const sortedUsers = filteredUsers.sort((a, b) => b.matchPercentage - a.matchPercentage);
        console.log(response.data);
        // Set the filtered and sorted users to state
        setUser(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    const getPartnerPreference = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/api/v1/users/sortfilter/${userID}`, filterSort);
        console.log(response.data);
        setsortedUser(response.data);
      } catch (error) {
        console.error('Error fetching partner preferences:', error);
      }
    };

    // Call functions to fetch data
    getMatchPercent();
    getPartnerPreference();
  }, []);

  // Compare and filter common users when both arrays are updated
  useEffect(() => {
    if (user.length > 0 && sortedUser.length > 0) {
      const commonUsers = user.filter(u => sortedUser.some(su => su === u.user.user));
      setFilteredUser(commonUsers);
    }
  }, [user, sortedUser]);

  return (
    <section className='w-full pt-5 px-5 pb-24 md:pb-5 h-screen overflow-scroll'>
      <div>
        <SubHeader title='Matches' />
        <InteractionIcon />
        <p className='text-text font-medium my-3 text-lg'>
          Your Matches <span className='text-light-purple'>{filteredUser.length}</span>
        </p>
      </div>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2 gap-5 mb-24'>
        {filteredUser?.map((user, i) => (
          <Link to={`/profile/${user.user.user}?match=${user.matchPercentage}`} key={i}>
            <MatchCardComponent
              isNew={false}
              img={user.user.profileImage.url}
              distance={user.distance}
              name={user.otherUserName}
              age={user.user.age}
              place={typeof user.user?.location === 'object' ? JSON.stringify(user.user.location) : user.user.location}
              match={user.matchPercentage}
            />
          </Link>
        ))}
      </div>

      {/* <div className="fixed bottom-0 left-0 right-0 lg:left-[365px] lg:right-[365px] py-8 backdrop-blur-lg z-50">
                <Upgrade />
            </div> */}
    </section>
  )
}

export default MatchPage

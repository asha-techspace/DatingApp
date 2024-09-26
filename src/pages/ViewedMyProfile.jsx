import React, { useEffect, useState } from 'react';
import {MatchCardComponent} from '../components';
import PageTitle from '../components/PageTitle/PageTitle';
import { Search } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewedMyProfilePage = () => {
  const [viewedBy, setViewedBy] = useState([]); // List of user IDs who viewed the profile
  const [viewedByData, setViewedByData] = useState([]); // Combined data with profiles and match percentages

  // Fetch data (viewedBy list, profile data, match percentages)
  useEffect(() => {
    const fetchRequestedLists = async () => {
      try {
        // Fetch the user's "viewedBy" list
        const userResponse = await axios.get('http://localhost:5000/api/v1/users/user', {
          withCredentials: true,
        });
        const viewedBy = userResponse.data[0].viewedBy;
        setViewedBy(viewedBy); // Store the viewedBy list in state

        // Fetch match percentage data
        const matchPercentageResponse = await axios.get('http://localhost:5000/api/v1/users/compare', {
          withCredentials: true,
        });
        const matchPercentages = matchPercentageResponse.data.results; // Assumes an array of match percentages

        // Fetch user profile data for each user in the viewedBy list
        const profileRequests = viewedBy.map((userId) =>
          axios.get(`http://localhost:5000/api/v1/users/profile/${userId}`)
        );
        const profileResponses = await Promise.all(profileRequests);
        const allUserData = profileResponses.map((response) => response.data);

        // Combine user profile data with match percentages
        const combinedData = allUserData.map((user) => {
          const matchData = matchPercentages.find(
            (match) => match.user.user === user.user // Assuming match.user.user and user.user are comparable
          );
          return {
            ...user,
            matchPercentage: matchData ? matchData.matchPercentage : null,
          };
        });

        // Sort the combined data by matchPercentage from high to low
        const sortedData = combinedData.sort((a, b) => b.matchPercentage - a.matchPercentage);

        // Set the combined and sorted data into state
        setViewedByData(sortedData);

        // Log the final sorted data for debugging
        console.log('Sorted Data:', sortedData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchRequestedLists();
  }, []); // Empty dependency array ensures this runs only once on mount
 
  const count = viewedBy.length;


  return (
    <div className="bg-deep-plum min-h-screen overflow-y-auto">
      <PageTitle icon={Search} pageTitle={"Viewed My Profile"} />
      <div className="rounded-t-4xl bg-white h-[82vh] pt-5 px-5 pb-24 md:pb-5 sm:border-2 border-deep-plum ">
      <p className="text-text font-medium my-3 text-lg ">
        <span className="text-light-purple">{count}  new profile views</span>  
        </p>
      
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2 gap-5">
        {viewedByData?.map((user, i) => (
           <Link to={`/profile/${user.user._id}?match=${user.matchPercentage}`} 
           key={i} >
          <MatchCardComponent
            key={user.user._id}
            isNew={false}
            img={user.profileImage.url}
            distance={user.distance}
            name={user.user.firstName}
            age={user.age}
            place={user.location}
            match={user.matchPercentage}
          />
          </Link>
        ))}
      </div>
      </div>
      </div>
    
  );
};

export default ViewedMyProfilePage;

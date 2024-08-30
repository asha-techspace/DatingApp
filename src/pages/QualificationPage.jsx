import React, { useEffect, useState } from 'react'
import { ButtonGroup, InteractionIcon, MatchCardComponent, StoryView, SubHeader, UserIcon } from '../Components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Userdata } from "../datas/Userdata";


const QualificationPage = () => {
  const [dataqualification, setQualification] = useState([])

  const fetchQualificationMatches = async () => {
    try {
      const qualificationResponse = await axios.get('http://localhost:5000/api/v1/users/profile/qualification', { withCredentials: true })
      const matchPercentageResponse = await axios.get('http://localhost:5000/api/v1/users/compare', { withCredentials: true })

      // Assuming the matchPercentageResponse returns an array of objects with user IDs and match percentages
      const matchPercentages = matchPercentageResponse.data.results
      console.log("match percent:", matchPercentages);
      console.log("qualification response:", qualificationResponse);


      // Combine qualification data with match percentage data
      const combinedData = qualificationResponse.data.map(user => {
        const matchData = matchPercentages.find(match => match.user === user.user._id)
        console.log("match data:", matchData);

        return {
          ...user,
          matchPercentage: matchData ? matchData.matchPercentage : null
        }
      })
      console.log("combined data:", combinedData);
      setQualification(combinedData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchQualificationMatches()
  }, [])

  return (
    <section className='sm: w-screen md:w-full overflow-x-hidden lg:w-full pt-5 px-5 pb-24 md:pb-5 h-screen overflow-y-auto'>
      <div>
      <div className="flex justify-between items-center gap-5 overflow-x-auto  lg:w-full sm: w-screen  ">
          <StoryView />
        </div>
        <ButtonGroup />
        <SubHeader title='Qualification' />
        <InteractionIcon />
        <p className='text-text font-medium my-3 text-lg'>Your Matches <span className='text-light-purple'>{dataqualification.length}</span></p>
      </div>

      <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2 gap-5'>
        {dataqualification?.map((user, i) => (
          <Link to={`/profile/${user._id}`} key={i} >
            <MatchCardComponent
              isNew={false}
              img={user.profileImage.url}
              distance={user.distance}
              name={user.name}
              age={user.age}
              place={user.place}
              match={user.matchPercentage}  // Pass the matchPercentage to the MatchCardComponent
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default QualificationPage

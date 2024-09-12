import React, { useState, useEffect } from 'react'
import { CircleCheckBig } from "lucide-react"
import PageTitle from '../components/PageTitle/PageTitle'
import { Link } from 'react-router-dom'

function SortFilter() {
  const [selectedOptions, setSelectedOptions] = useState([])

  // Load selected options from localStorage on component mount
  useEffect(() => {
    const storedOptions = JSON.parse(localStorage.getItem('selectedOptions'))
    if (storedOptions) {
      setSelectedOptions(storedOptions)
    }
    console.log('Loaded from localStorage:', storedOptions)
  }, [])

  // Function to handle selecting/deselecting an option
  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  // Helper function to check if an option is selected
  const isSelected = (option) => selectedOptions.includes(option)

  // Function to handle saving to localStorage when "Apply" is clicked
  const handleApply = () => {
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions))
    console.log('Saved to localStorage:', selectedOptions)
  }

  return (
    <div className='text-lg text-gray-700'> 
      <PageTitle pageTitle={'Filter'} />
      <div className='bg-deep-plum'>
        <div className='h-fit py-4 px-5 bg-white rounded-t-3xl'>
          <div className="text-2xl mb-2 font-semibold">Sort By</div>

          <div className='flex justify-between mb-2 items-center' onClick={() => handleSelect('NewestMember')}>
            <h1>Newest Member</h1>
            <CircleCheckBig className={isSelected('NewestMember') ? 'text-green-500' : ''} />
          </div>
          <div className="border-t border-gray-200 flex justify-between mb-2 items-center" onClick={() => handleSelect('LastActive')}>
            <h1>Last Active</h1>
            <CircleCheckBig className={isSelected('LastActive') ? 'text-green-500' : ''} />
          </div>
          <div className="border-t border-gray-200 flex justify-between mb-2 items-center" onClick={() => handleSelect('Distance')}>
            <h1>Distance</h1>
            <CircleCheckBig className={isSelected('Distance') ? 'text-green-500' : ''} />
          </div>
          <div className="border-t border-gray-200 flex justify-between mb-2 items-center" onClick={() => handleSelect('Popularity')}>
            <h1>Popularity</h1>
            <CircleCheckBig className={isSelected('Popularity') ? 'text-green-500' : ''} />
          </div>
          <div className="border-t border-gray-200 flex justify-between mb-2 items-center" onClick={() => handleSelect('age')}>
            <h1>Age</h1>
            <CircleCheckBig className={isSelected('age') ? 'text-green-500' : ''} />
          </div>

          <div className="border-t border-gray-200 mb-2"></div>

          <div className='text-2xl mb-2 font-semibold'><h1>Filter By</h1></div>

          <div className='flex justify-between mb-2 items-center' onClick={() => handleSelect('Gender')}>
            <h1>Gender</h1> 
            <CircleCheckBig className={isSelected('Gender') ? 'text-green-500' : ''} />
          </div>
          <div className="border-t border-gray-200 flex justify-between mb-2 items-center" onClick={() => handleSelect('Location')}>
            <h1>Location</h1>
            <CircleCheckBig className={isSelected('Location') ? 'text-green-500' : ''} />
          </div>
          <div className="border-t border-gray-200 flex justify-between mb-2 items-center" onClick={() => handleSelect('Interests/Hobbies')}>
            <h1>Interests/Hobbies</h1>
            <CircleCheckBig className={isSelected('Interests/Hobbies') ? 'text-green-500' : ''} />
          </div>
          <div className="border-t border-gray-200 flex justify-between mb-2 items-center" onClick={() => handleSelect('Languages Spoken')}>
            <h1>Languages Spoken</h1>
            <CircleCheckBig className={isSelected('Languages Spoken') ? 'text-green-500' : ''} />
          </div>
          <div className="border-t border-gray-200 flex justify-between mb-2 items-center" onClick={() => handleSelect('Relationship Goals')}>
            <h1>Relationship Goals</h1>
            <CircleCheckBig className={isSelected('Relationship Goals') ? 'text-green-500' : ''} />
          </div>

          <div className="border-t border-gray-200 mb-2"></div>

          <div className='flex space-x-6'>
            <Link to={'/partener_preferences'}>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Set Partner Preferences
            </button>
            </Link>
            <Link to={'/match'}>
              <button 
                className="bg-purple-500 hover:bg-deep-plum text-white font-bold py-2 px-4 rounded" 
                onClick={handleApply}
              >
                Apply
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortFilter

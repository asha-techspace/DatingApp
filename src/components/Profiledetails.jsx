import React from 'react'

function Profiledetails() {
  return (
    <div >
      <div className='bg-white rounded-t-lg  p-4 '  >
        <div className='bg-gray-400 p- rounded-full mx-auto' style={{width:'60px' ,padding:'2px'}}>

        </div>
    <div className='overflow-y-auto pb-8'>
    <div>
    <span className='text-gray-600'>About</span>
    <p className='font-Roboto font-medium'>A good listener. I love having a good talk to know each other’s side 😍.</p>
    </div>
    <div className='mt-4 '>
    <span className='text-gray-600 '>Interest</span>
    <div className='flex gap-2 flex-wrap'>
    <div className='border-2 px-2  border-gray-300 rounded-lg w-fit'>
     <span>Music</span>
    </div>
    <div className='border-2 px-2 border-gray-300 rounded-lg w-fit'>
       <span>Dance</span>
    </div>
    <div className='border-2 px-2 border-gray-300 rounded-lg w-fit'>
     <span>Singing</span>
    </div>
    </div>
    </div>

        </div>
        
      </div>
      
    </div>
  )
}

export default Profiledetails

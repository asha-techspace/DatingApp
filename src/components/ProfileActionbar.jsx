import React from 'react'
import { X , Star ,Heart,MessageCircle} from 'lucide-react';

function ProfileActionbar() {
  return (
    <div>
      <div className='shadow-lg p-2 text-lg rounded-full mx-4 flex justify-between'>
        <div className='p-3  bg-[#E108084D] rounded-full'>
      <X fill="#111" className='text-white ' />
      </div>
      <div className='p-3  bg-[#4B164C] rounded-full'>
      <Star fill="white" strokeWidth={0}  />
      </div>
      <div className='p-3  bg-[#DD88CF] rounded-full'>
      <Heart fill='white' strokeWidth={0} />      
      </div>
      <div className='p-3  bg-[#e7a5dc] rounded-full'>
      <MessageCircle fill='white' strokeWidth={0} />      
      </div>
      </div>
    </div>
  )
}

export default ProfileActionbar

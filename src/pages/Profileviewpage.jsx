import React from 'react';
import ProfileActionbar from '../components/ProfileActionbar';
import { ChevronLeft,Navigation } from 'lucide-react';
import Profiledetails from '../components/Profiledetails';

function Profileviewpage() {
  return (
    <div className=" ">
      <div className="container  w-fit  mx-auto " >
        <div
          className=""
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(128, 0, 128, 0.6)), url(https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
        >
                <div>
                    <img src="" alt="" />
                </div>

                    <div className='flex p-2  justify-between mt-'>
                    <div  className='rounded-full backdrop-filter backdrop-blur-sm bg-opacity-45 border-2 w-fit border-white p-2 text-white'>
                    <ChevronLeft />
                    </div>
                    <div  className='rounded-full flex border-2 w-fit backdrop-filter backdrop-blur-sm bg-opacity-45 border-white p-2 text-white'>
                    <Navigation /><span>2.5 KM</span> 
                    </div>
                    </div> 
                    
                    <div className='mt-32   p-2 flex-wrap justify-center items-center'>
                    <div className='text-center'>
                    <span className='text-3xl text-white text-center'> Alfredo Calzoni, 20  </span> <br />
                    <span className='text-sm text-gray-300 '> HAMBURG, GERMANY</span>

                    </div>
                    <div className=' text-white text-center mt-12'>
                    <span className='pl-1 pr-4 bg-[#4b164c] py-4 rounded-full'style={{border:"2px solid violet"}}>
                    <span className='p-2 rounded-full mr-2 border-orange-100'style={{border:"4px solid violet"}}> 80%</span> 
                    Match            </span>
                    </div>
                    </div> 
                    <div className='mt-10 '>
                    <Profiledetails />
                    </div> 
                    
            </div>
           
</div>
 
      <div className="fixed bottom-5  w-full">
        <ProfileActionbar />
      </div>
    </div>
 
  );
}

export default Profileviewpage;
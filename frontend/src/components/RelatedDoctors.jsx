import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({speciality,docId}) => {
    //! firstly getting all the doctors from the context file
    const {doctors} = useContext(AppContext);

    const [relDoc, setRelDoc] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        if(doctors.length >0 && speciality){
            const doctorData = doctors.filter((doc)=>doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorData);
        }
        
    },[doctors,speciality,docId])
  return (
   
           <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Related Doctors</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {
            relDoc.slice(0,5).map((item,index)=>(
              <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-15px] transition-all duration-500' key={index}> 
                <img className='bg-gradient-to-t from-sky-50 to-sky-100 hover:scale-105 transition-all duration-700 ' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 rounded-full bg-green-600'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
        <button onClick={()=>{navigate(`/doctor`);scrollTo(0,0);}} className='bg-blue-50 px-16 py-3 rounded-full text-gray-700 outline-none hover:drop-shadow-xl transition-all duration-500 hover:translate-y-[-2px] hover:ring-1 hover:ring-gray-100 mt-10'>More</button>
    </div>
 
  )
}

export default RelatedDoctors

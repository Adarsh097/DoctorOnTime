import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { doctors, getAllDoctors, aToken ,changeAvailability} = useContext(AdminContext);
  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);
  // console.log(doctors);
  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((item, index) => {
          return (
            <div className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group hover:translate-y-[-5px] transition-all duration-300" key={index}>
              <img className="bg-gradient-to-t from-white to-sky-100 group-hover:translate-y-[-5px] group-hover:bg-gray-200 transition-all duration-500" src={item.image} alt="" />
              <div className="p-4">
                <p className="text-neutral-800 text-lg font-medium">{item.name}</p>
                <p className="text-sm text-zinc-600">{item.speciality}</p>
                <div className="mt-2 flex items-center gap-1 text-sm">
                  <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
                  <p>Available</p>
                </div>
              </div>
            </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsList;

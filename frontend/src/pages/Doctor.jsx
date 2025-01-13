import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctor = () => {
  //! to filter the doctors
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { speciality } = useParams();

  // ! to filter the doctor
  const [filterDoctor, setFilterDoctor] = useState([]);

  const { doctors } = useContext(AppContext);

  //! function to filter the doctor
  const applyFilter = () => {
    // * filter out all the doctor that matches with the speciality acquired from the url
    speciality
      ? setFilterDoctor(doctors.filter((doc) => doc.speciality === speciality))
      : setFilterDoctor(doctors);
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  return (
    <div>
      <p className="text-gray-600 text-center md:text-left">
        Browse through the doctors specialist.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all duration-300 sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => {
            setShowFilter((prev) => !prev);
          }}
        >
          Filters
        </button>
        <div
          className={` flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate(`/doctor`)
                : navigate(`/doctor/General physician`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-sky-200 rounded-full transition-all cursor-pointer hover:drop-shadow-md hover:bg-sky-100 outline-none hover:border-none ${
              speciality === "General physician" ? "text-black bg-sky-100" : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate(`/doctor`)
                : navigate(`/doctor/Dermatologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-sky-200 rounded-full transition-all cursor-pointer hover:drop-shadow-md hover:bg-sky-100 outline-none hover:border-none ${
              speciality === "Dermatologist" ? "text-black bg-sky-100" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate(`/doctor`)
                : navigate(`/doctor/Gynecologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-sky-200 rounded-full transition-all cursor-pointer hover:drop-shadow-md hover:bg-sky-100 outline-none hover:border-none ${
              speciality === "Gynecologist" ? "text-black bg-sky-100" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate(`/doctor`)
                : navigate(`/doctor/Pediatricians`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-sky-200 rounded-full transition-all cursor-pointer hover:drop-shadow-md hover:bg-sky-100 outline-none hover:border-none ${
              speciality === "Pediatricians" ? "text-black bg-sky-100" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate(`/doctor`)
                : navigate(`/doctor/Neurologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-sky-200 rounded-full transition-all cursor-pointer hover:drop-shadow-md hover:bg-sky-100 outline-none hover:border-none ${
              speciality === "Neurologist" ? "text-black bg-sky-100" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate(`/doctor`)
                : navigate(`/doctor/Gastroenterologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-sky-200 rounded-full transition-all cursor-pointer hover:drop-shadow-md hover:bg-sky-100 outline-none hover:border-none ${
              speciality === "Gastroenterologist" ? "text-black bg-sky-100" : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        {/* doctor list */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoctor.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-15px] transition-all duration-500"
              key={index}
            >
              <img
                className="bg-gradient-to-t from-white to-sky-100 hover:scale-105 transition-all duration-700 "
                src={item.image}
                alt=""
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 rounded-full bg-green-600"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;

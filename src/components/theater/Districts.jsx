import React from "react";
import DistrictList from "../../data/DistrictList.json"
import { useNavigate } from "react-router";

export default function Districts() {
  const navigate = useNavigate();

  function theaterlistButton () {
    navigate ("/theaterlist");

  }
  return (
    <div className="mt-[120px] p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">District List</h1>
	  <h1 classname="text-3xl font-bold mb-6 text-center"> Click District name to view Theaters List</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {DistrictList.map((district, index) => (
          <button

          
            key={index}
            className="bg-[#004A8F] text-gray-300 font-bold py-3 px-5 rounded-lg shadow-md hover:bg-[#FCB81F] hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div onClick={theaterlistButton} className="text-center">
              <p className="font-bold">{district.english}</p>
              <p className="text-sm ">{district.sinhala}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

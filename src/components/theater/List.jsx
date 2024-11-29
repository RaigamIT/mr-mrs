import { useEffect, useState } from 'react'
import React from 'react'



function List({ theaterId }) {

    const [data, setData] =useState(null);

    // console.log(data);
    
    useEffect(() => {
        fetch('/TheaterList.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error("Error Fetching Data",error));
    },[]);

    return (
        <div className="mt-[70px] p-4 font-redHat">
          <h1 className="text-3xl font-extrabold mb-6 text-center">Theater List of </h1>
          
          <div className="mt-[20px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {/* {ListOfTheaters.map((theater, index) => (
              
            ))} */}
          </div>
        </div>
    );
}

export default List
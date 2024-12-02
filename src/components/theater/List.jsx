import { useEffect, useState } from 'react';
import React from 'react';

function List({ theaterId }) {
    const [data, setData] = useState(null); 
    const [filteredData, setFilteredData] = useState(null); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch('/TheaterList.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(fetchedData => {
                setData(fetchedData);

                if (theaterId) {
                    const filtered = fetchedData.filter(item => item.id === theaterId);
                    setFilteredData(filtered);
                } else {
                }
            })
            .catch(err => setError(err));
    }, [theaterId]);

    if (error) {
        return (
            <div className="mt-[70px] p-4 font-redHat">
                <h1 className="text-3xl font-extrabold mb-6 text-center text-red-600">
                    Error Loading Theater Data
                </h1>
                <p className="text-center text-red-500">{error.message}</p>
            </div>
        );
    }

    if (!filteredData) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    return (
        <div className="mt-[70px] p-4 font-redHat">
            <h1 className="text-3xl font-extrabold mb-6 text-center">
                Theater List {theaterId ? `for ID ${theaterId}` : ""}
            </h1>

            <div className="mt-[20px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {filteredData.length > 0 ? (
                    filteredData.map(theater => (
                        <div
                            key={theater.id}
                            className="border p-4 rounded shadow bg-white"
                        >
                            <h2 className="font-bold text-lg">{theater.nameEn}</h2>
                            <p>Location: {theater.location}</p>
                            <p>Price: {theater.price} LKR</p>
                            <p>Condition: {theater.condition}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No theaters found for ID {theaterId}.
                    </p>
                )}
            </div>
        </div>
    );
}

export default List;

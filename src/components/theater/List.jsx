import React from 'react';

function List() {
    // Define theater data array
    const theaters = [
        {
            name: "Savoy Premier - Wellawatte",
            times: ["10:30", "13:30", "19:00"],
            phone: "01174466223",
        },
        {
            name: "Savoy Premier - Rajagiriya",
            times: ["10:30", "19:00"],
            phone: "0114341782",
        },
		{
            name: "Savoy Metro - Maharagama",
            times: ["10:30", "19:00"],
            phone: "0114341782",
        },
		{
            name: "PVR Cinema - Colombo",
            times: ["10:30", "19:00"],
            phone: "0114341782",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center mt-[180px]">
            {theaters.map((theater, index) => (
                <div
                    key={index}
                    className="relative flex flex-col bg-[#004A8F] shadow-sm border border-slate-200 rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                    <div className="p-4">
                        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                            {theater.name}
                        </h5>
                        <ul className="text-white leading-normal font-light">
                            {theater.times.map((time, i) => (
                                <li key={i}>{time}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
                        <span className="text-sm text-slate-600 font-medium">
                            Telephone Number: {theater.phone}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;

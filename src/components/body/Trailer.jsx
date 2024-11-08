import React from 'react'

function Trailer() {
  return (
    <div className='p-5 flex flex-col items-center'>
      <div>
        <h1 className='mb-10 font-semibold font-serif text-black text-[30px]'>Trailers</h1>
      </div>

      <div className='flex flex-col lg:flex-row gap-6 justify-center'>
        <iframe
          className='lg:w-[720px] lg:h-[420px] sm:w-full sm:h-[420px] rounded-lg shadow-lg border border-gray-300'
          src="https://www.youtube.com/embed/Qf4MTuYLg6A?si=Vq4Wb-PPZqRK0hGD"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        
        <div className='flex flex-col gap-4'>
          <iframe
            className='lg:w-[360px] lg:h-[200px] rounded-lg shadow-md border border-gray-300'
            src="https://www.youtube.com/embed/4Fcl6ha-QQ8?si=tiynDtlFg44oIK0P"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className='lg:w-[360px] lg:h-[200px] rounded-lg shadow-md border border-gray-300'
            src="https://www.youtube.com/embed/6Am3FvRLSVk?si=Tz569FygfR_DwzH8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Trailer

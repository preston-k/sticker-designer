import React from 'react'

const NotFound = () => {
  return (
    <>
      <div className='bg-slate-700 min-h-screen flex flex-col justify-center items-center'>
        <p className='text-white text-5xl font-bold '>Oops!</p>
        <p className='text-xl font-bold text-white mt-4'>We can't seem to find that!</p>
        <a href='/'>
          <button className='px-3 py-2 border-2 rounded-full font-bold text-white mt-5 hover:bg-white hover:text-slate-700 transition-colors ease-in-out border-white'>Go Home</button>
        </a>
      </div>
    </>
  )
}
export default NotFound

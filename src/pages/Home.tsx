import React from 'react'

function newDesign() {
  const button = document.querySelector('#newbutton')
  if (button) {
    // ;(button as HTMLButtonElement).disabled = true
  }
  let designid = crypto.randomUUID().replace('-', '').slice(0, 8)
  console.log(designid)
  // PUT IN FIREBASE HERE
  window.location.href = `/design/${designid}`
}
const Home = () => {
  return (
    <>
      <div className='min-w-screen min-h-screen bg-slate-800'>
        <button className='border-2 border-white rounded-full m-5 px-3 py-2 text-white font-bold disabled:cursor-not-allowed' id='newbutton' onClick={newDesign}>
          Create New Design
        </button>
      </div>
    </>
  )
}
export default Home

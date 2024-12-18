import React from 'react'
import SidebarButton from '../assets/components/SidebarButton'
import RulerSeg from '../assets/components/RulerSeg'
const Design = () => {
  let id = window.location.pathname.split('/')[2]
  console.log(id)
  return (
    <>
      <div className='fixed top-0 border-b-[1px] h-5 bg-white border-b-slate-300 w-[calc(100vw-4rem)] right-0'>
        <div className='flex'>
          <RulerSeg n={1} />
          <RulerSeg n={2} />
        </div>
      </div>
      <div className='fixed w-16 flex flex-col items-center py-2 border-r-2 border-black bg-[#015477ff] h-full px-2 gap-2'>
        <SidebarButton icon='add' />
        <SidebarButton icon='outline' />
      </div>
      <div className='dotbg min-w-full min-h-full'>
        <div className='min-w-screen min-h-screen'></div>
      </div>
    </>
  )
}
export default Design

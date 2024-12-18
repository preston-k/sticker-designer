import React from 'react'
import SidebarButton from '../assets/components/SidebarButton'
const Design = () => {
  return (
    <>
      <div className='w-16 flex flex-col items-center py-2 border-r-2 border-black bg-[#015477ff] border-b-2 rounded-br-lg px-2 gap-2'>
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

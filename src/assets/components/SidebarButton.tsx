import React from 'react'

interface SidebarButtonProps {
  icon: 'add' | 'outline'
}

const icons = {
  add: (
    <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#ffffff' viewBox='0 0 16 16'>
      <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16' />
      <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4' />
    </svg>
  ),
  outline: (
    <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#ffffff' viewBox='0 0 16 16'>
      <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16' />
    </svg>
  ),
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon }) => {
  return (
    <>
      <div className='aspect-square rounded-md hover:opacity-90 cursor-pointer p-1'>{icons[icon]}</div>
    </>
  )
}

export default SidebarButton

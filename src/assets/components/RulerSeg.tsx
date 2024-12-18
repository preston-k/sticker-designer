import { int } from 'aws-sdk/clients/datapipeline'
import React from 'react'

type RulerSegProps = {
  n: int
}

const RulerSeg = ({ n }: RulerSegProps) => {
  return (
    <>
      <div className='w-[1in] h-5 border-x-[1px] flex'>
        <div className='flex flex-col justify-center items-center w-full'>
          <div className='text-[10px] h-1/2 w-full text-center font-bold'>{n}</div>
          <div className='h-3/4 w-full flex items-end'>
            <div className='w-1/2 h-2/3 border-r-[1px] border-black flex items-end'>
              <div className='h-1/2 w-1/2 border-black border-r-[1px]'></div>
              <div className='h-1/2 w-1/2 border-black border-l-[1px]'></div>
            </div>
            <div className='w-1/2 h-2/3 border-l-[1px] border-black flex items-end'>
              <div className='h-1/2 w-1/2 border-black border-r-[1px]'></div>
              <div className='h-1/2 w-1/2 border-black border-l-[1px]'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default RulerSeg

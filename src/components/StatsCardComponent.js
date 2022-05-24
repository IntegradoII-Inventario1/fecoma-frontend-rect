import React from 'react'
import {FaArrowAltCircleUp,FaArrowCircleDown} from 'react-icons/fa'
import { stasts } from '../utils/Stats'


const StatsCardComponent = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        stasts.map(stast => (
          <div className='flex flex-col p-4 w-100 bg-white dark:bg-gray-900 rounded-lg gap-y-3' key={stast.key}>
            <div className='flex items-center gap-x-3'>
              <div className='p-2 bg-gray-200 dark:bg-gray-800 rounded-lg'>
                <stast.icon/>
              </div>
              <span className={`${stast.status === 'up'?'text-accent-green':'text-accent-red'} `}>
                {stast.percentage}
              </span>
              <div className={`${stast.status === 'up' ? "text-accent-green":"text-accent-red"} fill-current`}>
                {stast.status === 'up' ? <FaArrowAltCircleUp/>:<FaArrowCircleDown/>}
              </div>
            </div>
            <div className='text-3xl font-semibold dark:text-white'>{stast.value}</div>
            <div className='text-lg font-semibold tracking-wide text-gray-600 dark:text-gray-500'>{stast.title}</div>
          </div>
        ))
      }
    </div>
  )
}

export default StatsCardComponent
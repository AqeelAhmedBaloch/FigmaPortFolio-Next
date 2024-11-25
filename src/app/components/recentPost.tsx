import { Heebo } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import RecentPostCard from './recentPostCard'

const heebo = Heebo({subsets:['latin']})

const RecentPost = () => {
  return (
    <div className='bg-myrecentBackground my-[66px] md:h-[410px] flex flex-col justify-evenly'>
      <div className='w-[92%] md:w-[1030px] p-6 mx-auto flex flex-col justify-between'>
        <div className='flex flex-row justify-between'>
        <h2 className={`${heebo.className} text-[22px] font-medium`}>Recent Post</h2>
        <Link href={""} className={`${heebo.className} text-[22px] text-myPink font-medium`}>View All</Link>
        </div>
        <div className='mt-[16px] flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between'>
           <RecentPostCard/>
           <RecentPostCard/>
        </div>
      </div>

      {/* <div className='w-[1030px] p-6 mx-auto flex justify-between'>asdasd</div> */}
    </div>
  )
}
export default RecentPost

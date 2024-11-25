import React from 'react'
import { Heebo } from 'next/font/google'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

const heebo = Heebo({subsets:["latin"]})
const Footer = () => {
  return (
    <div className='bg-footerBackground space-y-6 flex flex-col items-center justify-center h-[160px]'>
      <div className='flex space-x-5'>
        <Link href={''}><FaFacebookSquare className='w-[30px] h-[30px]'/></Link>
        <Link href={''}><FaInstagram className='w-[30px] h-[30px]'/></Link>
        <Link href={''}><FaTwitter className='w-[30px] h-[30px]'/></Link>
        <Link href={''}><FaLinkedin className='w-[30px] h-[30px]'/></Link>
      </div>
      <p className={`${heebo.className} text-center font-medium text-[22px]`}>Copyright ©2024 All rights reserved</p>
    </div>
  )
}
export default Footer

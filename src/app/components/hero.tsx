import { Heebo } from 'next/font/google'
import Image from 'next/image'

const heebo = Heebo({subsets:['latin']})
const Hero = () => {
  return (
    <div className='my-[66px] p-6 mx-auto w-[92%] md:w-[1030px] md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-between'>
      {/* Text div */}
      <div className='md:w-[521px] h-[305px] flex flex-col md:justify-between items-start justify-evenly'>
      <h1 className={`${heebo.className} text-[27px] md:md:text-[48px] font-black text-myBlack`}>Hi, I am Aqeel Ahmed,<br /> Creative Technologist</h1>
      <p className={`${heebo.className} text-myBlack text-[16px] font-normal `}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
      <button className={`${heebo.className} w-[205px] h-[50px] text-[18px] bg-myPink text-white rounded-lg shadow-sm hover:shadow-black/60 font-medium`}>Download Resume</button>
      </div>
      {/* Image div*/}
      <div className='w-[292px] h-[299px] relative'>
        <Image  className='z-50 rounded-full' src={"/assets/image.png"} alt ='hero-image' width={292} height={299}/>
        <div className='bg-heroElips w-[292px] h-[299px] -z-10 rounded-full absolute top-2 right-2'/>
      </div>
    </div>
  )
}
export default Hero

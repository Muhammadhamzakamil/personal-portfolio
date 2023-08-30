import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='z-50 sticky top-0'>
        <header className="bg-[#540b0e] text-white body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image width={100} height={100} alt='intro' src={require("../../../public/logo.jpg")}
       className='rounded-full '/>
      <span className="ml-3 text-xl text-white font-bold">Personal Introduction</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  ">
      <Link href={"/"} className="mr-5 hover:text-yellow-600">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-yellow-600">About</Link>
      <Link href={"#Skills"} className="mr-5 hover:text-yellow-600">Skills</Link>
      <Link href={"#Project"} className="mr-5 hover:text-yellow-600">Projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-yellow-600">Contact</Link>
    </nav>
    <a href='/CV.jpg'>
    <button className="inline-flex items-center bg-white text-black border-0 py-1 px-3 focus:outline-none
     hover:bg-yellow-600 rounded text-base mt-4 md:mt-0">
    Download CV
     <AiOutlineCloudDownload  className="text-lg ml-2 " />
  </button>
   </a>
  </div>
</header>

    </div>
  )
}

export default Navbar
import React from 'react'
import {BsYoutube} from "react-icons/bs"
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#540b0e] text-white body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image width={100} height={100} alt='intro' src={require("../../public/logo.jpg")}
       className='rounded-full '/>
      <span className="ml-3 text-xl text-white">Personal Introduction</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-yellow-600 sm:py-2 sm:mt-0 mt-4">
      © 2023 Personal Intro —
   
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link 
      target='_blank'
      href={"https://www.youtube.com/"} className="text-white hover:text-yellow-600 ">
<BsYoutube className="text-3xl"/>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
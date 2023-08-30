import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='About'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        src={require("../../../public/man2.jpg")}
        width={200}
        height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       About Me
      </h1>
      <p className="mb-5 leading-relaxed">
Phone Number: 03xxxxxxx 
E-mail:@gmail.com
      </p>
      <p className="mb-5 leading-relaxed">
      My name is Hamza , I`m a frontend Developer based in UMT,Lahore,Pakistan.
   I have developed many types of frontend applications like E-commerce websites,
   Portfolios,Blog-websites etc.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
         View CV
        </button>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
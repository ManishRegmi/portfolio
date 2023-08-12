"use client"
import { useEffect, useState } from 'react';
import Typewriter from '../components/Typewriter';
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Welcome to my website!", "Explore amazing content.", "Stay Motivated and Keep learning."];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < texts.length - 1 ? prevIndex + 1 : 0));
    }, 5000); // 20 seconds interval

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-black">
      <div className="z-10 p-6 max-w-5xl w-full font-mono rounded-lg shadow-lg">

        <Typewriter text={texts[currentIndex]} />
        <p className="text-3xl font-bold text-white">
          Hello there!
        </p>
        <p className="text-3xl font-bold text-white">
          I am Sujan Chaudhary
        </p>
        <p className="mt-4 text-gray-600 text-white">
          Welcome to my portfolio. I'm a passionate React developer with a strong
          enthusiasm for coding and creating interactive web applications.
        </p>

        <div className='flex gap-2 pt-10'>
          <a href="#_" className="relative inline-block text-lg group w-[170px] text-center">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Book Meeting</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
          <a href="#_" className="relative inline-block text-lg group w-[170px] text-center">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative text-center">Work</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>

        </div>
      </div>
      <div className="rounded-full border-white border-4 overflow-hidden w-72 h-72 ml-12 shadow-lg">
        <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg" alt="Sujan Chaudhary" className="w-full h-full object-cover" />
      </div>
    </main>
  )
}

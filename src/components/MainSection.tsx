/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import Image from "next/image";
import VaultImg from '../app/assets/vault.png'
import { TypewriterEffect } from "./ui/typewriter-effect";
import { SparklesCore } from "./ui/sparkles";

function MainSection() {
  const words = [
    {
      text: "Navigate",
      className: 'text-white'
    },
    {
      text: "Common",
      className: 'text-white'
    },
    {
      text: "Snippets",
      className: 'text-white'
    },
    {
      text: "Effortlessly",
      className: 'text-white'
    },
    {
      text: "at",
      className: 'text-white'
    },
    {
      text: "DevVault.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto   md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />


      <div className="flex flex-col items-center space-y-12 md:mx-8 sm:mx-4 md:mt-12 sm:mt-4 ">
      <div className="h-[20rem] md:w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    
      <div className='flex space-x-3  pb-4'>
            <Link href='/'><Image className='md:h-16 md:w-16 sm:w-12 sm:h-12 rotate-180' src={VaultImg} alt=""  /></Link>
        
          
          <h1 className="md:text-7xl sm:text-5xl font-bold ">DevVault</h1 >
          </div>
      <div className="md:w-[30rem] sm:w-[20rem] h-20 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>


       
          <TypewriterEffect words={words}/>
           
            <p
            className="mt-4 font-normal text-sm md:text-md text-neutral-300 max-w-3xl mx-auto"
            >Introducing DevVault, your centralized repository for essential code snippets across various technologies. From quick setups to fundamental configurations, DevVault ensures swift access to the building blocks of any tech project. Simplify your coding journey with this streamlined hub - where solutions are just a click away.</p>
            
       
        </div>
        </div>
  )
}

export default MainSection
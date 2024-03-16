'use client';

import Link from "next/link";


function Navbar() {

  return (
    <div
    className="fixed  flex items-center justify-center top-10 pb-4  inset-x-0 max-w-2xl mx-auto z-50 "
    >
      <div className="flex bg-black space-x-4 rounded-[30px] border border-gray-400  px-8 py-4 ">

    
       <Link className="hover:text-gray-400 duration-500" href="/">Home</Link>
       <Link className="hover:text-gray-400 duration-500"  href="/docs">Quick Start</Link>
       <Link className="hover:text-gray-400 duration-500" href="/login">Login</Link>
       <Link className="hover:text-gray-400 duration-500" href="/signup">Register</Link>  </div>
    </div>
  )
}

export default Navbar
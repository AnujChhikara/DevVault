import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 pt-20 mx-2">
    <div className=" md:mx-12 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 sm:gap-4 px-4 sm:px-4 lg:px-8">
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
      <p className="mb-4 text-sm">
      By adopting DevVault, you liberate yourself from the cumbersome hassles associated with the initial setup process.
      Save time, eliminate complexities, and elevate your coding experience effortlessly. Welcome to a hassle-free start!
      </p>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
      <ul>
        <li>
          <a
            href="/"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </a>
        </li>
        
        <li>
          <a
            href="contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h2 className="text-white  md:text-lg font-semibold mb-4">Contact Us</h2>
      <p>New Delhi, India</p>
      <p>Delhi 110039</p>
      
      <p>Phone: (123) 456-7890</p>
      <p className=''>Email: anujchhikara777@gmail.com</p>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
      <div className="md:flex md:flex-row flex flex-col md:space-x-4">
        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Github
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Twitter
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Peerlist
        </a>
      </div>
    </div>
   
    </div>
    <p className="text-center text-xs pt-8 ">© 2024 Anuj Chhikara. All rights reserved.</p>
</footer>
  )
}

export default Footer
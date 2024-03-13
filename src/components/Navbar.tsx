"use client";
import Image from 'next/image'
import VaultImg from '@/app/assets/vault.png'
import Link from 'next/link'
import { FloatingNav } from "./ui/floating-navbar";

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

function Navbar() {
    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "About",
          link: "/about",
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Contact",
          link: "/contact",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];
    
    
  return (
  
        <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
     
       </div>
  
  )
}



export default Navbar
import Image from 'next/image'
import VaultImg from '@/app/assets/vault.png'
import Link from 'next/link'

function Navbar() {
    
    
  return (
    <nav className='mx-20 my-10 flex justify-between'>
      
        <div className='flex space-x-3 items-end'>
            <Link href='/'><Image className='h-12 w-12 rotate-180' src={VaultImg} alt=""  /></Link>
        
          
          <h1 className="text-4xl font-bold">DevVault</h1 >
          </div>
       <div>
        <ul className='flex space-x-6 text-lg '>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/about">About Us</Link></li>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar
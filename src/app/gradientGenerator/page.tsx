import GradientGenerator from '@/components/comp/gradient'
import React from 'react'

function page() {
  return (
    <div className='mt-40 w-screen flex flex-col text-center items-center space-y-10'>
      <h2 className='text-4xl font-bold w-[600px]'>Instantly create and copy vibrant spectrum gradients for CSS</h2>
        <GradientGenerator/>
    </div>
  )
}

export default page
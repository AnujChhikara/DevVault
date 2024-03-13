'use client'

import React, { FormEvent, useRef, useState } from 'react'


function Search() {
 const[searchText, setSearchtext] = useState<any>('')
 const searchElement = useRef<HTMLInputElement>(null)


 function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const enteredText = searchElement.current!.value
    setSearchtext(enteredText)
    }
 

  

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center mt-20'>
        
        <input type="text" 
        name='search'
        ref={searchElement}
        
        placeholder='type here to get started..'
        className='bg-transparent border-2 border-neutral-500 sm:w-[300px] md:w-[500px]  px-4 py-1 
        rounded-3xl h-10  ' />
        
        <div>
     
        <button  type='submit' className="inline-flex mt-4 h-10 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Search
        </button>
  
      </div>
        </form>
  )
}

export default Search
'use client'

import { useState } from 'react';


function ranTailwindGradient() {
    const colors = [
      "bg-red-100", "red-200", "red-300", "red-400", "red-500", "red-600", "red-700", "red-800", "red-900",
      "blue-100", "blue-200", "blue-300", "blue-400", "blue-500", "blue-600", "blue-700", "blue-800", "blue-900",
      "green-100", "green-200", "green-300", "green-400", "green-500", "green-600", "green-700", "green-800", "green-900",
      "yellow-100", "yellow-200", "yellow-300", "yellow-400", "yellow-500", "yellow-600", "yellow-700", "yellow-800", "yellow-900",
      "pink-100", "pink-200", "pink-300", "pink-400", "pink-500", "pink-600", "pink-700", "pink-800", "pink-900",
      "purple-100", "purple-200", "purple-300", "purple-400", "purple-500", "purple-600", "purple-700", "purple-800", "purple-900",
      "indigo-100", "indigo-200", "indigo-300", "indigo-400", "indigo-500", "indigo-600", "indigo-700", "indigo-800", "indigo-900",
      "gray-100", "gray-200", "gray-300", "gray-400", "gray-500", "gray-600", "gray-700", "gray-800", "gray-900",
      "teal-100", "teal-200", "teal-300", "teal-400", "teal-500", "teal-600", "teal-700", "teal-800", "teal-900",
      "orange-100", "orange-200", "orange-300", "orange-400", "orange-500", "orange-600", "orange-700", "orange-800", "orange-900"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  function TailwindGradient() {
    const color1 = ranTailwindGradient();
    const color2 = ranTailwindGradient();
    const color3 = ranTailwindGradient();
    return `bg-gradient-to-br from-${color1} to-${color3}`;
  }


  function TailwindGradientGenerator() {
    const [tGradient, setTGradient] = useState(TailwindGradient());

    const handleGenerateGradient = () => {
        setTGradient(TailwindGradient());
      };

      function copyText() {
     
        /* Copy text into clipboard */
        navigator.clipboard.writeText
            (TailwindGradient());
    }

   
  const classes = tGradient

  return (
    
    <div className={`w-1/2 flex space-x-8 justify-center items-center h-[500px] rounded-xl ${classes} `} >
      
      Copy Gradient CSS
      <button onClick={copyText} className="hover:opacity-75 duration-700 mx-4" >
            <svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" data-open="true" ><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path></svg>
            
            </button>
      <button className='border px-4 py-2 ' onClick={handleGenerateGradient}>Generate New Gradient</button>
    
    </div>



  
  );
}

export default TailwindGradientGenerator;
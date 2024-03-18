'use client'

import { useState } from 'react';


function generateRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

function generateRandomGradient() {
  const color1 = generateRandomColor();
  const color2 = generateRandomColor();
  return `linear-gradient(135deg, ${color1}, ${color2})`;
}

// function generateRandomTailwindColor() {
//     const colors = [
//       "bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900",
//       "bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800", "bg-blue-900",
//       "bg-green-100", "bg-green-200", "bg-green-300", "bg-green-400", "bg-green-500", "bg-green-600", "bg-green-700", "bg-green-800", "bg-green-900",
//       "bg-yellow-100", "bg-yellow-200", "bg-yellow-300", "bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700", "bg-yellow-800", "bg-yellow-900",
//       "bg-pink-100", "bg-pink-200", "bg-pink-300", "bg-pink-400", "bg-pink-500", "bg-pink-600", "bg-pink-700", "bg-pink-800", "bg-pink-900",
//       "bg-purple-100", "bg-purple-200", "bg-purple-300", "bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700", "bg-purple-800", "bg-purple-900",
//       "bg-indigo-100", "bg-indigo-200", "bg-indigo-300", "bg-indigo-400", "bg-indigo-500", "bg-indigo-600", "bg-indigo-700", "bg-indigo-800", "bg-indigo-900",
//       "bg-gray-100", "bg-gray-200", "bg-gray-300", "bg-gray-400", "bg-gray-500", "bg-gray-600", "bg-gray-700", "bg-gray-800", "bg-gray-900",
//       "bg-teal-100", "bg-teal-200", "bg-teal-300", "bg-teal-400", "bg-teal-500", "bg-teal-600", "bg-teal-700", "bg-teal-800", "bg-teal-900",
//       "bg-orange-100", "bg-orange-200", "bg-orange-300", "bg-orange-400", "bg-orange-500", "bg-orange-600", "bg-orange-700", "bg-orange-800", "bg-orange-900"
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
//   }
  
//   function generateRandomTailwindGradient() {
//     const color1 = generateRandomTailwindColor();
//     const color2 = generateRandomTailwindColor();
//     return `bg-gradient-to-br ${color1} ${color2}`;
//   }

function GradientGenerator() {
    const [gradient, setGradient] = useState(generateRandomGradient()); 
    

    const handleGenerateGradient = () => {
        setGradient(generateRandomGradient());
      };

      function copyText() {
     
        /* Copy text into clipboard */
        navigator.clipboard.writeText
            (generateRandomGradient());
    }

   const gradientStyle = {
    background: generateRandomGradient(),
  };

 
  return (
    <div className="w-1/2 flex space-x-8 justify-center items-center h-[500px] rounded-xl" style={gradientStyle}>
      
      Copy Gradient CSS
      <button onClick={copyText} className="hover:opacity-75 duration-700 mx-4" >
            <svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" data-open="true" ><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path></svg>
            
            </button>
      <button className='border px-4 py-2 ' onClick={handleGenerateGradient}>Generate New Gradient</button>
    
    </div>
    
  );
}

export default GradientGenerator;
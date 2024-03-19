'use client'

import { useState, useEffect } from 'react';

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

function CSSGradientGenerator() {
  const [cssGradient, setCssGradient] = useState('');

  useEffect(() => {
    setCssGradient(generateRandomGradient());
  }, []); // Run only once after mount to set initial state

  const handleGenerateGradient = () => {
    const newGradient = generateRandomGradient();
    setCssGradient(newGradient);
  };

  function copyText() {
    navigator.clipboard.writeText(cssGradient);
  }

  return (
    <div className="w-1/2 flex space-x-8 justify-center items-center h-[500px] rounded-xl" style={{ background: cssGradient }}>
      Copy Gradient CSS
      <button onClick={copyText} className="hover:opacity-75 duration-700 mx-4">
        <svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" data-open="true">
          <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
        </svg>
      </button>
      <button className='border px-4 py-2' onClick={handleGenerateGradient}>Generate New Gradient</button>
    </div>
  );
}

export default CSSGradientGenerator;

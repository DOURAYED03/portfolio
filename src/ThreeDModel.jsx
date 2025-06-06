import React, { useState } from 'react';

export default function ThreeDModel() {
  const [isSpinning, setIsSpinning] = useState(true);

  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    <div className="w-full h-96 flex justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div
        onClick={toggleSpin}
        className={`w-64 h-64 bg-white rounded-lg shadow-lg flex justify-center items-center text-2xl font-bold text-gray-800 cursor-pointer select-none transition-transform duration-500 ${
          isSpinning ? 'animate-spin' : ''
        }`}
        title="Click to toggle spin"
      >
        3D Card
      </div>
    </div>
  );
}

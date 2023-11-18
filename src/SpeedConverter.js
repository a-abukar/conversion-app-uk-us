import React, { useState } from 'react';

function SpeedConverter() {
  const [speed, setSpeed] = useState('');
  const [convertedSpeed, setConvertedSpeed] = useState('');
  const [isKmToMph, setIsKmToMph] = useState(true);

  const handleSpeedConversion = () => {
    const mphPerKmh = 0.621371;
    const result = isKmToMph ? speed * mphPerKmh : speed / mphPerKmh;
    setConvertedSpeed(result.toFixed(2));
  };

  const handleToggle = () => {
    setIsKmToMph(!isKmToMph);
    setSpeed('');
    setConvertedSpeed('');
  };

  return (
    <div>
      <div className="toggle-switch">
        <input
          id="speed-toggle"
          type="checkbox"
          checked={isKmToMph}
          onChange={handleToggle}
        />
        <label htmlFor="speed-toggle">Switch to {isKmToMph ? "Mph to Km/h" : "Km/h to Mph"}</label>
      </div>
      <input 
        type="number" 
        value={speed} 
        onChange={e => setSpeed(e.target.value)} 
        placeholder={`Enter speed in ${isKmToMph ? "Km/h" : "Mph"}`} 
      />
      <button onClick={handleSpeedConversion}>Convert</button>
      <p>
        {speed} {isKmToMph ? "Km/h" : "Mph"} is approximately  
         {convertedSpeed} {isKmToMph ? "Mph" : "Km/h"}
      </p>
    </div>
  );
}

export default SpeedConverter;

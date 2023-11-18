import React, { useState } from 'react';

function DistanceConverter() {
  const [distance, setDistance] = useState('');
  const [convertedDistance, setConvertedDistance] = useState('');
  const [isKmToMiles, setIsKmToMiles] = useState(true);

  const handleDistanceConversion = () => {
    const milesPerKilometer = 0.621371;
    const result = isKmToMiles ? distance * milesPerKilometer : distance / milesPerKilometer;
    setConvertedDistance(result.toFixed(2));
  };

  const handleToggle = () => {
    setIsKmToMiles(!isKmToMiles);
    setDistance('');
    setConvertedDistance('');
  };

  return (
    <div>
      <div className="toggle-switch">
        <input
          id="distance-toggle"
          type="checkbox"
          checked={isKmToMiles}
          onChange={handleToggle}
        />
        <label htmlFor="distance-toggle">Switch to {isKmToMiles ? "Miles to Km" : "Km to Miles"}</label>
      </div>
      <input 
        type="number" 
        value={distance} 
        onChange={e => setDistance(e.target.value)} 
        placeholder={`Enter distance in ${isKmToMiles ? "Kilometers" : "Miles"}`} 
      />
      <button onClick={handleDistanceConversion}>Convert</button>
      <p>
        {distance} {isKmToMiles ? "Kilometers" : "Miles"} is approximately  
         {convertedDistance} {isKmToMiles ? "Miles" : "Kilometers"}
      </p>
    </div>
  );
}

export default DistanceConverter;

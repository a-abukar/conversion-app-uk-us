import React, { useState } from 'react';

function LengthConverter() {
  const [length, setLength] = useState('');
  const [convertedLength, setConvertedLength] = useState('');
  const [isMeterToFeet, setIsMeterToFeet] = useState(true);

  const handleLengthConversion = () => {
    const result = isMeterToFeet ? length * 3.28084 : length / 3.28084;
    setConvertedLength(result.toFixed(2));
  };

  const handleToggle = () => {
    setIsMeterToFeet(!isMeterToFeet);
    setLength('');
    setConvertedLength('');
  };

  return (
    <div>
      <div className="toggle-switch">
        <input
          id="length-toggle"
          type="checkbox"
          checked={isMeterToFeet}
          onChange={handleToggle}
        />
        <label htmlFor="length-toggle">Switch to {isMeterToFeet ? "Feet to Meters" : "Meters to Feet"}</label>
      </div>
      <input 
        type="number" 
        value={length} 
        onChange={e => setLength(e.target.value)} 
        placeholder={`Enter length in ${isMeterToFeet ? "meters" : "feet"}`} 
      />
      <button onClick={handleLengthConversion}>Convert</button>
      <p>
        {length} {isMeterToFeet ? "meters" : "feet"} is approximately  
         {convertedLength} {isMeterToFeet ? "feet" : "meters"}
      </p>
    </div>
  );
}

export default LengthConverter;

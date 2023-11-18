import React, { useState } from 'react';

function VolumeConverter() {
  const [volume, setVolume] = useState('');
  const [convertedVolume, setConvertedVolume] = useState('');
  const [isLtrToGal, setIsLtrToGal] = useState(true);

  const handleVolumeConversion = () => {
    const galPerLtr = 0.264172;
    const result = isLtrToGal ? volume * galPerLtr : volume / galPerLtr;
    setConvertedVolume(result.toFixed(2));
  };

  const handleToggle = () => {
    setIsLtrToGal(!isLtrToGal);
    setVolume('');
    setConvertedVolume('');
  };

  return (
    <div>
      <div className="toggle-switch">
        <input
          id="volume-toggle"
          type="checkbox"
          checked={isLtrToGal}
          onChange={handleToggle}
        />
        <label htmlFor="volume-toggle">Switch to {isLtrToGal ? "Gal to Ltr" : "Ltr to Gal"}</label>
      </div>
      <input 
        type="number" 
        value={volume} 
        onChange={e => setVolume(e.target.value)} 
        placeholder={`Enter volume in ${isLtrToGal ? "Liters" : "Gallons"}`} 
      />
      <button onClick={handleVolumeConversion}>Convert</button>
      <p>
        {volume} {isLtrToGal ? "Liters" : "Gallons"} is approximately  
         {convertedVolume} {isLtrToGal ? "Gallons" : "Liters"}
      </p>
    </div>
  );
}

export default VolumeConverter;

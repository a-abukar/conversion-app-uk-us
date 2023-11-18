import React, { useState } from 'react';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [convertedTemperature, setConvertedTemperature] = useState('');
  const [isCtoF, setIsCtoF] = useState(true);

  const handleTemperatureConversion = () => {
    const result = isCtoF ? (temperature * 9/5 + 32) : ((temperature - 32) * 5/9);
    setConvertedTemperature(result.toFixed(2));
  };

  const handleToggle = () => {
    setIsCtoF(!isCtoF);
    setTemperature('');
    setConvertedTemperature('');
  };

  return (
    <div>
      <div className="toggle-switch">
        <input
          id="temperature-toggle"
          type="checkbox"
          checked={isCtoF}
          onChange={handleToggle}
        />
        <label htmlFor="temperature-toggle">Switch to {isCtoF ? "°F to °C" : "°C to °F"}</label>
      </div>
      <input 
        type="number" 
        value={temperature} 
        onChange={e => setTemperature(e.target.value)} 
        placeholder={`Enter temperature in ${isCtoF ? "°C" : "°F"}`} 
      />
      <button onClick={handleTemperatureConversion}>Convert</button>
      <p>
        {temperature} {isCtoF ? "°C" : "°F"} is approximately  
         {convertedTemperature} {isCtoF ? "°F" : "°C"}
      </p>
    </div>
  );
}

export default TemperatureConverter;

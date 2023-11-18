import React, { useState } from 'react';

function WeightConverter() {
  const [weight, setWeight] = useState('');
  const [convertedWeight, setConvertedWeight] = useState('');
  const [isKgToLb, setIsKgToLb] = useState(true);

  const handleWeightConversion = () => {
    const result = isKgToLb ? weight * 2.20462 : weight / 2.20462;
    setConvertedWeight(result.toFixed(2));
  };

  const handleToggle = () => {
    setIsKgToLb(!isKgToLb);
    setWeight('');
    setConvertedWeight('');
  };

  return (
    <div>
      <div className="toggle-switch">
        <input
          id="weight-toggle"
          type="checkbox"
          checked={isKgToLb}
          onChange={handleToggle}
        />
        <label htmlFor="weight-toggle">Switch to {isKgToLb ? "lb to kg" : "kg to lb"}</label>
      </div>
      <input 
        type="number" 
        value={weight} 
        onChange={e => setWeight(e.target.value)} 
        placeholder={`Enter weight in ${isKgToLb ? "kg" : "lb"}`} 
      />
      <button onClick={handleWeightConversion}>Convert</button>
      <p>
        {weight} {isKgToLb ? "kg" : "lb"} is approximately  
         {convertedWeight} {isKgToLb ? "lb" : "kg"}
      </p>
    </div>
  );
}

export default WeightConverter;

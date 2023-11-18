import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [isUKtoUS, setIsUKtoUS] = useState(true);

  const handleCurrencyConversion = () => {
    const conversionRate = 1.25; // Example static rate
    const result = isUKtoUS ? amount * conversionRate : amount / conversionRate;
    setConvertedAmount(result.toFixed(2));
  };

  const handleToggle = () => {
    setIsUKtoUS(!isUKtoUS);
    setAmount('');
    setConvertedAmount('');
  };

  return (
    <div>
      <div className="toggle-switch">
        <input
          id="currency-toggle"
          type="checkbox"
          checked={isUKtoUS}
          onChange={handleToggle}
        />
        <label htmlFor="currency-toggle">Switch to {isUKtoUS ? "US to UK" : "UK to US"}</label>
      </div>
      <input 
        type="number" 
        value={amount} 
        onChange={e => setAmount(e.target.value)} 
        placeholder={`Enter amount in ${isUKtoUS ? "GBP" : "USD"}`} 
      />
      <button onClick={handleCurrencyConversion}>Convert</button>
      <p>
        {amount} {isUKtoUS ? "GBP" : "USD"} is approximately  
         {convertedAmount} {isUKtoUS ? "USD" : "GBP"}
      </p>
    </div>
  );
}

export default CurrencyConverter;

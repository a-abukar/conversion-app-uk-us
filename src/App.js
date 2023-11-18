import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';
import DistanceConverter from './DistanceConverter';
import TemperatureConverter from './TemperatureConverter';
import WeightConverter from './WeightConverter';
import LengthConverter from './LengthConverter';
import SpeedConverter from './SpeedConverter';
import VolumeConverter from './VolumeConverter';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('currency');

  return (
    <div className="App">
      <h1>Conversion App</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('currency')} className={activeTab === 'currency' ? 'active' : ''}>Currency</button>
        <button onClick={() => setActiveTab('distance')} className={activeTab === 'distance' ? 'active' : ''}>Distance</button>
        <button onClick={() => setActiveTab('temperature')} className={activeTab === 'temperature' ? 'active' : ''}>Temperature</button>
        <button onClick={() => setActiveTab('weight')} className={activeTab === 'weight' ? 'active' : ''}>Weight</button>
        <button onClick={() => setActiveTab('length')} className={activeTab === 'length' ? 'active' : ''}>Length</button>
        <button onClick={() => setActiveTab('speed')} className={activeTab === 'speed' ? 'active' : ''}>Speed</button>
        <button onClick={() => setActiveTab('volume')} className={activeTab === 'volume' ? 'active' : ''}>Volume</button>
      </div>

      {activeTab === 'currency' && <CurrencyConverter />}
      {activeTab === 'distance' && <DistanceConverter />}
      {activeTab === 'temperature' && <TemperatureConverter />}
      {activeTab === 'weight' && <WeightConverter />}
      {activeTab === 'length' && <LengthConverter />}
      {activeTab === 'speed' && <SpeedConverter />}
      {activeTab === 'volume' && <VolumeConverter />}
    </div>
  );
}

export default App;

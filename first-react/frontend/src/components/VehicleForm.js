import React, { useState } from 'react';
import axios from 'axios';

const VehicleForm = () => {
  const [name, setName] = useState('');
  const [posX, setPosX] = useState('');
  const [posY, setPosY] = useState('');
  const [speed, setSpeed] = useState('');
  const [direction, setDirection] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const vehicle = { name, posX, posY, speed, direction };
    await axios.post('http://localhost:5000/vehicles', vehicle);
    setName('');
    setPosX('');
    setPosY('');
    setSpeed('');
    setDirection('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vehicle Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Initial Position X:
        <input type="number" value={posX} onChange={(e) => setPosX(e.target.value)} />
      </label>
      <label>
        Initial Position Y:
        <input type="number" value={posY} onChange={(e) => setPosY(e.target.value)} />
      </label>
      <label>
        Speed:
        <input type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} />
      </label>
      <label>
        Direction:
        <select value={direction} onChange={(e) => setDirection(e.target.value)}>
          <option value="Towards">Towards</option>
          <option value="Backwards">Backwards</option>
          <option value="Upwards">Upwards</option>
          <option value="Downwards">Downwards</option>
        </select>
      </label>
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default VehicleForm;

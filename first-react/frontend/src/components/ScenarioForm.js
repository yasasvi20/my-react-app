import React, { useState } from 'react';
import axios from 'axios';

const ScenarioForm = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const scenario = { name, time };
    await axios.post('http://localhost:5000/scenarios', scenario);
    setName('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Scenario Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Scenario Time (seconds):
        <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <button type="submit">Add Scenario</button>
    </form>
  );
};

export default ScenarioForm;

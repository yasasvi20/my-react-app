import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
  const [scenarios, setScenarios] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchScenarios = async () => {
      const response = await axios.get('http://localhost:3000/scenarios');
      setScenarios(response.data);
    };

    const fetchVehicles = async () => {
      const response = await axios.get('http://localhost:3000/vehicles');
      setVehicles(response.data);
    };

    fetchScenarios();
    fetchVehicles();
  }, []);

  const startSimulation = () => {
    // Implement vehicle movement logic based on the scenario and vehicle parameters
  };

  return (
    <div className="home">
      <h1>Scenarios</h1>
      <ul>
        {scenarios.map(scenario => (
          <li key={scenario.id}>{scenario.name}</li>
        ))}
      </ul>
      <button onClick={startSimulation}>Start Simulation</button>

      <h1>Vehicles</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>{vehicle.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

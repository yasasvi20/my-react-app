const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataFilePath = './data/data.json';

const readData = () => {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

app.get('/scenarios', (req, res) => {
    const data = readData();
    res.json(data.scenarios);
});

app.post('/scenarios', (req, res) => {
    const data = readData();
    const newScenario = req.body;
    newScenario.id = Date.now();
    data.scenarios.push(newScenario);
    writeData(data);
    res.status(201).json(newScenario);
});

app.put('/scenarios/:id', (req, res) => {
    const data = readData();
    const scenarioIndex = data.scenarios.findIndex(s => s.id == req.params.id);
    data.scenarios[scenarioIndex] = req.body;
    writeData(data);
    res.json(data.scenarios[scenarioIndex]);
});

app.delete('/scenarios/:id', (req, res) => {
    const data = readData();
    data.scenarios = data.scenarios.filter(s => s.id != req.params.id);
    writeData(data);
    res.status(204).end();
});

app.get('/vehicles', (req, res) => {
    const data = readData();
    res.json(data.vehicles);
});

app.post('/vehicles', (req, res) => {
    const data = readData();
    const newVehicle = req.body;
    newVehicle.id = Date.now();
    data.vehicles.push(newVehicle);
    writeData(data);
    res.status(201).json(newVehicle);
});

app.put('/vehicles/:id', (req, res) => {
    const data = readData();
    const vehicleIndex = data.vehicles.findIndex(v => v.id == req.params.id);
    data.vehicles[vehicleIndex] = req.body;
    writeData(data);
    res.json(data.vehicles[vehicleIndex]);
});

app.delete('/vehicles/:id', (req, res) => {
    const data = readData();
    data.vehicles = data.vehicles.filter(v => v.id != req.params.id);
    writeData(data);
    res.status(204).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

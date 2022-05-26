const express = require('express');
const cors = require('cors');
const commitment = require('./routes/commitmentsRoute');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/commitments', commitment.commitment);

module.exports = app;

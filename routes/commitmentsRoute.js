const { Router } = require('express');
const commitmentController = require('../controllers/CommitmentController');

const commitment = Router();

commitment.get('/all', commitmentController.getAllCommitments);

commitment.post('/add', commitmentController.postNewCommitment);

module.exports = {
  commitment,
}

const commitmentService = require('../services/CommitmentService');
const { formatMap } = require('./helpers/split');

const getAllCommitments = async (_req, res) => {
  const commitments = await commitmentService.getAllCommitments();
  const formated = formatMap(commitments)
  return res.status(200).json(formated);
};

const postNewCommitment = async (req, res) => {
  try {
    const { name, title } = req.body;
    
    await commitmentService.postNewCommitment(name, title);

    return res.status(201).json({ message: 'Commitment created successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
}

module.exports = {
  getAllCommitments,
  postNewCommitment,
};

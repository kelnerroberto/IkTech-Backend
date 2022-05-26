const { Commitment } = require('../models');

const getAllCommitments = async () => {
  const commitments = await Commitment.findAll();

  return commitments;
};

const postNewCommitment = async (name, title) => {
  const newCommitment = await Commitment.create({ name, title });

  return newCommitment;
}

module.exports = {
  getAllCommitments,
  postNewCommitment,
};

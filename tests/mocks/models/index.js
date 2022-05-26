const Commitment = require('./Commitments.json');

const mockCreate = (Instance, data) => {
  if(!data){
    return;
  }

  const newData = data;
  if(!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const Comms = {
  create: async (data) => mockCreate(Commitment, data),
  findAll: async () => Commitment,
};

module.exports = {
  Comms,
};
const Commitment = (sequelize, DataTypes) => {
  const Commitment = sequelize.define("Commitment", {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
  });

  return Commitment;
};

module.exports = Commitment;
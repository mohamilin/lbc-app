const { Transaction } = require('../models');

const isSuccess = async (dataUser, id) => {
  const dataTransaction = await Transaction.findOne({ userId: dataUser.id, classId: id });
  return dataTransaction;
};

module.exports = isSuccess;

/* eslint-disable no-return-await */
const { Transaction } = require('../models');

const registerClass = async ({ user, classes }) => {
  return await Transaction.create({
    userId: user.id,
    classId: classes._id,
  });
};

const isSubscribe = async ({ id }) => {
  const classSubscribe = await Transaction.findOne({
    classId: id,
  });

  return classSubscribe;
};

const classTransaction = async (userId) => {
  const dataClass = await Transaction.find({
    userId,
  }).populate({
    path: 'classId',
    select: '_id name price description shortDesc',
    populate: { path: 'topicId', select: '_id title' },
  });

  return dataClass;
};
module.exports = { registerClass, isSubscribe, classTransaction };

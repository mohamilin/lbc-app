/* eslint-disable eqeqeq */
const { Classes } = require('../models');

const createClass = async ({ name, price, description, shortDesc, topicId }) => {
  const classes = await Classes.create({ name, price, description, shortDesc, topicId });
  return classes;
};

const viewClass = async () => {
  const classes = await Classes.find().populate({ path: 'topicId', select: 'title' });
  return classes;
};

const viewClassById = async (id) => {
  const classes = await Classes.findOne({ _id: id })
    .populate({ path: 'topicId', select: 'title' })
    .populate({ path: 'chapterId', select: '_id title', populate: { path: 'lessonId', select: '_id title description' } });

  return classes;
};

const viewClassByTopic = async (id) => {
  const data = await Classes.find().populate({ path: 'topicId', select: '_id title' });
  const classes = data.filter((item) => item.topicId._id == id);

  return classes;
};

module.exports = {
  createClass,
  viewClass,
  viewClassById,
  viewClassByTopic,
};

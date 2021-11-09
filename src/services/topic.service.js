const { Topic } = require('../models');

const createTopic = async (title) => {
  const topic = await Topic.create({ title });
  return topic;
};

const viewTopicbyId = async (id) => {
  const topic = await Topic.findOne({ _id: id }).populate({ path: 'Classes', select: 'name' });
  return topic;
};
module.exports = {
  createTopic,
  viewTopicbyId,
};

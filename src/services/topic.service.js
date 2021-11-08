const { Topic } = require('../models');

const createTopic = async (title) => {
  const topic = await Topic.create({ title });
  return topic;
};

module.exports = {
  createTopic,
};

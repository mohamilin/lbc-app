const Topic = require('../../models/topics.model');
const { topicService } = require('../../services');

const createTopic = async (req, res) => {
  const { title } = req.body;
  const topic = await topicService.createTopic(title);
  return res.status(201).json({ status: true, message: 'success create topic', result: topic });
};

const viewTopicbyId = async (req, res) => {
  const { id } = req.params;
  const topic = await topicService.viewTopicbyId(id);
  return res.status(200).json({ status: true, message: 'success view id topic', result: topic });
};
module.exports = {
  createTopic,
  viewTopicbyId,
};

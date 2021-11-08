const { topicService } = require('../../services');

const newTopic = async (req, res) => {
  const { title } = req.body;
  const topic = await topicService.createTopic(title);
  return res.status(201).json({ status: true, message: 'success create topic', result: topic });
};

module.exports = {
  newTopic,
};

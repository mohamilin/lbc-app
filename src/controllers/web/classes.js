const { classService, transactionService } = require('../../services');

const createClass = async (req, res) => {
  try {
    const { user } = req.session;
    const { name, price, description, shortDesc, topicId } = req.body;
    const classes = await classService.createClass({ name, price, description, shortDesc, topicId });

    return res.status(201).json({ success: true, message: 'success create class', result: classes });
  } catch (error) {
    return res.status(401).json({ success: false, message: 'failed create class', result: error.message });
  }
};

const viewClass = async (req, res) => {
  try {
    const { user } = req.session;
    const classes = await classService.viewClass();
    return res.status(200).json({ success: true, message: 'success view class', result: classes });
  } catch (error) {
    return res.status(404).json({ success: false, message: 'failed view class', result: error.message });
  }
};

const viewClassById = async (req, res) => {
  try {
    const { user } = req.session;
    const { id } = req.params;
    const isSubscribe = await transactionService.isSubscribe({ id });
    const classes = await classService.viewClassById(id);

    return res.render('detail_kelas', { classes, user, isSubscribe });
  } catch (error) {
    return res.status(404).json({ success: false, message: 'failed view class', result: error.message });
  }
};

const viewClassByTopic = async (req, res) => {
  try {
    const { id } = req.params;
    const classes = await classService.viewClassByTopic(id);
    return res.status(200).json({ success: true, message: 'success view class', result: classes });
  } catch (error) {
    return res.status(404).json({ success: false, message: 'failed view class', result: error.message });
  }
};

const classTransaction = async (req, res) => {
  try {
    const { user } = req.session;
    const dataClass = await transactionService.classTransaction(user);
  } catch (error) {
    return res.status(404).json({ success: false, message: 'failed view class', result: error.message });
  }
};
module.exports = {
  createClass,
  viewClass,
  viewClassById,
  viewClassByTopic,
  classTransaction,
};

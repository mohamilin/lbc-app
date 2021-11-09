const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const classSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
  },
  imageId: {
    type: ObjectId,
    ref: 'Images',
  },
  linkImage: {
    type: String,
  },
  topicId: {
    type: ObjectId,
    ref: 'Topic',
  },
});

const Classes = mongoose.model('Classes', classSchema);

module.exports = Classes;

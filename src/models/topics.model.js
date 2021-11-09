const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const topicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    classId: [
      {
        type: ObjectId,
        ref: 'Classes',
      },
    ],
  },
  {
    timestamp: true,
  }
);

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;

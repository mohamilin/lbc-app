const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const lessonSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
  },
  chapterId: {
    type: ObjectId,
    ref: 'Chapter',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;

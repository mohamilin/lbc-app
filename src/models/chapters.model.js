const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const chapterSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
  },
  classId: {
    type: ObjectId,
    ref: 'Classes',
  },
  title: {
    type: String,
    required: true,
  },
  lessonId: [
    {
      type: ObjectId,
      ref: 'Lesson',
    },
  ],
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;

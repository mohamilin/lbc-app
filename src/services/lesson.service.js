const { Lesson, Chapter } = require('../models');

const actionCreateLesson = async ({ userId, chapterId, title, description }) => {
  const chapter = await Chapter.findOne({ _id: chapterId });
  const lesson = await Lesson.create({ userId, chapterId, title, description });
  chapter.lessonId.push({ _id: lesson._id });
  await chapter.save();
  return lesson;
};
module.exports = {
  actionCreateLesson,
};

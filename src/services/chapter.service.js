const { Chapter, Classes } = require('../models');

const actionCreateChapter = async ({ userId, classId, title }) => {
  console.log({ userId, classId, title });
  const classes = await Classes.findOne({ _id: classId });
  const chapter = await Chapter.create({ userId, classId, title });
  classes.chapterId.push({ _id: chapter._id });
  await classes.save();
  return classes;
};
module.exports = {
  actionCreateChapter,
};

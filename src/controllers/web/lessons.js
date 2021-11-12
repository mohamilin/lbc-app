const { lessonService } = require('../../services');

const actionCreateLesson = async (req, res) => {
  try {
    const dataUser = req.session.user;
    const { userId, chapterId, title, description } = req.body;
    const lesson = await lessonService.actionCreateLesson({ userId, chapterId, title, description });
    console.log('lesson', lesson);
  } catch (e) {
    console.log('e', e);
  }
};

module.exports = {
  actionCreateLesson,
};

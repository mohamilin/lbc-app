const { chapterService } = require('../../services');

const actionCreateChapter = async (req, res) => {
  try {
    const dataUser = req.session.user;
    const { userId, classId, title } = req.body;
    const chapter = await chapterService.actionCreateChapter({ userId, classId, title });
    console.log('chapter', chapter);
  } catch (e) {
    console.log('e', e);
  }
};

module.exports = {
  actionCreateChapter,
};

const { classService, transactionService } = require('../../services');
const isSucces = require('../../helpers/transaction');

const viewClassStudent = async (req, res) => {
  try {
    const dataUser = req.session.user;

    const dataClass = await transactionService.classTransaction(dataUser.id);
    console.log('dataClass', dataClass);
    res.render('pages/kelas_saya', { title: 'Kelas Saya', name: dataUser.name, role: dataUser.role, dataClass });
  } catch (error) {
    console.error(error);
  }
};

const viewDetailClassStudent = async (req, res) => {
  try {
    const dataUser = req.session.user;
    const { id } = req.params;
    const dataClass = await classService.viewClassById(id);
    const checkSuccess = await isSucces(dataUser, id);
    if (checkSuccess.status !== 'Sukses') return res.redirect(`/transaction/class/${id}`);
    console.log('dataClass', dataClass.name);
    console.log('dataClass.chapterId[0].lessonId.title', dataClass.chapterId[1]);
    res.render('pages/detail_kelas', { title: `${dataClass.name}`, name: dataUser.name, role: dataUser.role, dataClass });
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  viewClassStudent,
  viewDetailClassStudent,
};

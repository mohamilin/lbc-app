const viewClass = async (req, res) => {
  try {
    const { user } = req.session;
    console.log('kelas saya user', user);
    res.render('pages/kelas_saya', { title: 'Kelas Saya' });
  } catch (error) {
    console.error(error);
  }
};

const viewDetailClass = async (req, res) => {
  try {
    res.render('pages/detail_kelas', { title: 'Kelas Saya 1' });
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  viewClass,
  viewDetailClass,
};

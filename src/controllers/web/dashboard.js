const dashboard = async (req, res) => {
  try {
    const { name, role } = req.session.user;
    res.render('pages/dashboard', { title: 'Dashboard', name, role });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dashboard,
};

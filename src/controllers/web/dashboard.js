const dashboard = async (req, res) => {
  try {
    res.render('pages/dashboard', { title: 'Dashboard' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dashboard,
};

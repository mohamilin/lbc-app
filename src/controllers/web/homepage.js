const viewHomepage = async (req, res) => {
  try {
    res.render('homepage');
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  viewHomepage,
};

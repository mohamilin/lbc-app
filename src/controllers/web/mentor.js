const viewMentor = async (req, res) => {
  try {
    res.render('pages/mentor', { title: 'Mentor' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  viewMentor,
};

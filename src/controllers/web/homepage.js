const { classService, userService } = require('../../services');

const viewHomepage = async (req, res) => {
  try {
    const { user } = req.session;
    const classes = await classService.viewClass();
    const users = await userService.getAllUser();
    res.render('homepage', { classes, totalStudent: users.length, user });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  viewHomepage,
};

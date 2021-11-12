/* eslint-disable eqeqeq */
const isLogin = (req, res, next) => {
  if (req.session.user == null || req.session.user == undefined) {
    // req.flash('alertMessage', 'Silahkan Login !!');
    // req.flash('alertStatus', 'danger');
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = isLogin;

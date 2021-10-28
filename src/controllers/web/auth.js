const register = async (req, res) => {
  try {
    res.render('register');
  } catch (error) {
    console.log('error');
  }
};

const actionRegister = async (req, res) => {};
const login = async (req, res) => {
  try {
    res.render('login');
  } catch (error) {
    console.log(error);
  }
};

const actionLogin = async (req, res) => {};

module.exports = {
  register,
  actionRegister,
  login,
  actionLogin,
};

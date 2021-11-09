const httpStatus = require('http-status');
const fs = require('fs-extra');
const { authService, userService, tokenService, emailService } = require('../../services');
const ApiError = require('../../utils/ApiError');

const register = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus };
    res.render('register', { alert });
  } catch (error) {
    console.log('error', error.message);
  }
};

const actionRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.createUser({ name, email, password, role: 'user' });
    await tokenService.generateAuthTokens(user);
    res.redirect('/login');
  } catch (error) {
    if (error instanceof ApiError) {
      req.flash('alertMessage', error.message);
      req.flash('alertStatus', 'danger');
      res.redirect('/register');
    }
  }
};

const login = async (req, res) => {
  try {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus };
    res.render('login', { alert });
  } catch (error) {
    console.error('error', error.message);
  }
};

const actionLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.loginUserWithEmailAndPassword(email, password);
    await tokenService.generateAuthTokens(user);
    console.log('user', user);
    req.session.user = {
      id: user._id,
      name: user.name,
      role: user.role,
      email: user.email,
    };
    res.redirect('/kelas_saya');
  } catch (error) {
    if (error instanceof ApiError) {
      req.flash('alertMessage', error.message);
      req.flash('alertStatus', 'danger');
      res.redirect('/login');
    }
  }
};

const actionLogout = async (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

module.exports = {
  register,
  actionRegister,
  login,
  actionLogin,
  actionLogout,
};

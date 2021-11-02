const express = require('express');
const authRoute = require('./auth');
const dashboardRoute = require('./dashboard');
const mentorRoute = require('./mentor');
const studenRoute = require('./students');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: authRoute,
  },
  {
    path: '/dashboard',
    route: dashboardRoute,
  },
  {
    path: '/page',
    route: mentorRoute,
  },
  {
    path: '/',
    route: studenRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

const express = require('express');
const authRoute = require('./auth');
const dashboardRoute = require('./dashboard');
const mentorRoute = require('./mentor');
const studenRoute = require('./students');
const topicRoute = require('./topics');
const classRoute = require('./classes');
const transactionRoute = require('./transactions');
const chapterRoute = require('./chapters');
const lessonRoute = require('./lessons');

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
  {
    path: '/topic',
    route: topicRoute,
  },
  {
    path: '/classes',
    route: classRoute,
  },
  {
    path: '/transaction',
    route: transactionRoute,
  },
  {
    path: '/chapter',
    route: chapterRoute,
  },
  {
    path: '/lesson',
    route: lessonRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

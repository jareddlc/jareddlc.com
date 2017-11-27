const express = require('express');
const router = express.Router();
const config = require('../config');

router.get('/', function(req, res) {
  res.render('index', config.site.index);
});

router.get('/projects', function(req, res) {
  res.render('projects', config.site.projects);
});

router.get('/resume', function(req, res) {
  let opts = Object.assign({}, config.site.resume, {pdf: false});
  Object.keys(opts.schema.work).forEach(function (i) {
    opts.schema.work[i].pdf = true;
  });
  res.render('resume', config.site.resume);
});

router.get('/pdf', function(req, res) {
  res.sendFile(config.pdf.path, config.site.resume);
});

module.exports = router

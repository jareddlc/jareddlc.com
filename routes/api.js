const express = require('express');
const router = express.Router();
const config = require('../config');

router.get('/api', function(req, res) {
  res.json(config.info);
});

router.get('/api/resume', function(req, res) {
  res.json(config.site.resume.schema);
});

module.exports = router

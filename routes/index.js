const config = require('../config');
const express = require('express');
const router = express.Router();
const api = require('./api');
const site = require('./site');

// define custom routes
router.use(api);
router.use(site);

router.get('*', function(req, res) {
  res.status(404).json({message: 'not found'});
});

module.exports = router;

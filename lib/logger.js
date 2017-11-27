const bunyan = require('bunyan');
const PrettyStream = require('bunyan-prettystream');
const config = require('../config');

function Logger(opts) {
  let merged = Object.assign({}, config.logger, opts);
  this.opts = merged;

  Object.keys(merged.streams).forEach(function(i) {
    if (merged.streams[i].stream) {
      let pretty = new PrettyStream();
      pretty.pipe(merged.streams[i].stream);
      merged.streams[i].stream = pretty;
    }
  });

  let logger = bunyan.createLogger(merged);
  logger.middleware = middleware;

  return logger;
}

function middleware(req, res, next) {
  let opts = Object.assign({}, this.opts, {name: 'middleware'});
  let log = bunyan.createLogger(opts);

  log.debug('[' + req.method + '] ' + req.url);
  return next();
};

module.exports = Logger;

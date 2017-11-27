const express = require('express');
const handlebars = require('express-handlebars');
const favicon = require('serve-favicon');
const app = express();
const config = require('../config');
const logger = require('./logger')({name: 'server'});
const helpers = require('./helpers');
const routes = require('../routes');

// request logger
app.use('/', logger.middleware);

// handlebars
let hbs = handlebars.create(config.handlebars);
app.set('views', config.viewsPath);
app.set('view engine', 'html');
app.engine('html', hbs.engine);

// static content
app.use(favicon(config.favicon));
app.use(express.static(config.staticPath));

// routes
app.use('/', routes);

// start server
app.listen(config.httpPort, function () {
  logger.info('[server] listening on:', config.httpPort);

  // generate resume pdf
  let opts = Object.assign({}, config.site.resume, {pdf: true});
  hbs.renderView(config.pdf.view, opts, function(err, html) {
    const pdf = require('html-pdf');

    pdf.create(html, config.pdf).toFile(config.pdf.path, function(err, res) {
      if (err) {
        return logger.error(err);
      }
      logger.info('[server] generated resume.pdf:', res.filename);
    });
  });
});

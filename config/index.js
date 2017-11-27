const path = require('path');
let config = module.exports = {};

config.pkg = require('../package.json');
config.info = {
  name: config.pkg.name,
  version: config.pkg.version
};
config.httpPort = 8080;
config.viewsPath = path.join(__dirname, '../site/views');
config.staticPath = path.join(__dirname, '../site/static');
config.favicon = config.staticPath + '/img/favicon.png';
config.vendorPath = config.staticPath + '/vendor';
config.filesPath = config.staticPath + '/file';
config.assetsPath = path.join(__dirname, '../assets.tar');
config.assetsDownloadPath = 'https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/assets.tar';
config.cssPath = config.vendorPath + '/css';
config.fontPath = config.vendorPath + '/fonts';
config.nodeModulesPath = path.join(__dirname, '../node_modules');

config.install = require('./install');

config.handlebars = {
  extname: '.html',
  layoutsDir: config.viewsPath,
  partialsDir: config.viewsPath + '/partials',
  helpers: require('../lib/helpers')
};
config.pdf = {
  view: config.viewsPath + '/pdf.html',
  path: config.staticPath + '/file/resume.pdf',
  height: '1500px',
  width: '1125px',
  orientation: 'portrait',
  base: 'file://' + config.staticPath + '/'
};

config.site = {};
config.site.index = require('./site.index');
config.site.projects = require('./site.projects');
config.site.resume = require('./site.resume');

config.logger = {
  name: 'jareddlc.com',
  level: 'debug',
  streams: [{
    level: 'debug',
    stream: process.stdout
  },
  {
    level: 'error',
    path: 'error.log'
  }],
  src: false,
};

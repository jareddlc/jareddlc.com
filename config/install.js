const path = require('path');
const c = require('./index');

let config = module.exports = {};

config.vendorCss = [
  {
    src: c.nodeModulesPath + '/bulma/css/bulma.css',
    dest: c.vendorPath + '/css/bulma.css',
  },
  {
    src: c.nodeModulesPath + '/bulma/css/bulma.css.map',
    dest: c.vendorPath + '/css/bulma.css.map',
  },
  {
    src: c.nodeModulesPath + '/font-awesome/css/font-awesome.css',
    dest: c.vendorPath + '/css/font-awesome.css',
  },
  {
    src: c.nodeModulesPath + '/font-awesome/css/font-awesome.css.map',
    dest: c.vendorPath + '/css/font-awesome.css.map',
  },
  {
    src: c.nodeModulesPath + '/font-awesome/css/font-awesome.min.css',
    dest: c.vendorPath + '/css/font-awesome.min.css',
  },
  {
    src: c.nodeModulesPath + '/font-awesome/fonts/fontawesome-webfont.eot',
    dest: c.vendorPath + '/fonts/fontawesome-webfont.eot',
  },
  {
    src: c.nodeModulesPath + '/font-awesome/fonts/fontawesome-webfont.svg',
    dest: c.vendorPath + '/fonts/fontawesome-webfont.svg',
  },
  {
    src: c.nodeModulesPath + '/font-awesome/fonts/fontawesome-webfont.ttf',
    dest: c.vendorPath + '/fonts/fontawesome-webfont.ttf',
  },
  {
    src: c.nodeModulesPath + '/font-awesome/fonts/fontawesome-webfont.woff',
    dest: c.vendorPath + '/fonts/fontawesome-webfont.woff',
  },
  {
    src: c.nodeModulesPath + '/font-awesome/fonts/fontawesome-webfont.woff2',
    dest: c.vendorPath + '/fonts/fontawesome-webfont.woff2',
  },
  {
    src: c.nodeModulesPath + '/font-awesome/fonts/fontawesome.otf',
    dest: c.vendorPath + '/fonts/FontAwesome.otf',
  },
];

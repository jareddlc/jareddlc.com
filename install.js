const fs = require('fs');
const path = require('path');
const https = require('follow-redirects').https;
const tar = require('tar');
const config = require('./config');

function mkdir(path, callback) {
  try {
    fs.mkdirSync(path);
    console.log('[mkdir] created:', path);
  } catch(e) {
    if (e.code !== 'EEXIST') {
      console.error('[mkdir] failed to create dir:', path);
      console.error(e);
    }
  }
  if (callback) {
    return callback();
  }
}

function copy(src, dest, callback) {
  fs.copyFile(src, dest, function (err) {
    if (err) {
      console.error('[copy] failed to copy:', src);
      console.error(err);
    } else {
      console.log('[copy] copied:', src, dest);
    }
    if (callback) {
      return callback(err);
    }
  });
}

function createAssets() {
  // compress assets
  tar.c({cwd: config.filesPath, file: config.assetsPath}, ['.'], function (err) {
    console.log('[assets] tar file created:', config.assetsPath);
  });
}

function installAssets() {
  // uncompress assets
  tar.x({cwd: config.filesPath, file: config.assetsPath}, [], function (err) {
    console.log('[assets] tar file extracted:', config.assetsPath);
  });
}

function checkAssets() {
  console.log('[assets] checking assets:', config.assetsPath);
  if (fs.existsSync(config.assetsPath)) {
    installAssets();
  } else {
    // download assets
    let p = [1,5,10,25,50,75,95];
    let file = fs.createWriteStream(config.assetsPath);
    let request = https.get(config.assetsDownloadPath, function(response) {
      let total = 0;
      let len = parseInt(response.headers['content-length'], 10);
      console.log('[assets] Downloading assets %s Mb', len / 1000000);

      response.pipe(file);
      response.on('data', function(chunk) {
        total += chunk.length;
        let percent = Math.floor((total / len) * 100);

        if (p.includes(percent)) {
          console.log('[assets] %s%', p.shift());
        }
      });
      file.on('finish', function() {
        file.close(function() {
          installAssets();
        });
      });
    });
    request.on('error', function(err) {
      console.log('[assets] error downloading assets:', err);
      fs.unlink(file);
    });
  }
}

// Create directories
[config.filesPath, config.vendorPath, config.cssPath, config.fontPath].forEach(async function (key) {
  await mkdir(key);
});

// CSS
Object.keys(config.install.vendorCss).forEach(async function (key) {
  await copy(config.install.vendorCss[key].src, config.install.vendorCss[key].dest);
});

if (process.argv[2] && process.argv[2] === 'pack') {
  createAssets();
} else {
  checkAssets();
}

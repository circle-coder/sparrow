const userHome = require('user-home');
const path = require('path');
const spawn = require('cross-spawn');
const chalk = require('chalk');
const getNpmTarball = require('../../lib/getNpmTarball');
const extractTarball = require('../../lib/extractTarball');
const installDependencies = require('../../lib/installDependencies');

const NPM_NAME = 'sparrow-view';
const DEST_DIR = path.join(userHome, `.sparrow/${NPM_NAME}`);
const REGISTRY = process.env.REGISTRY || 'https://registry.npmjs.org';

module.exports = function downloadView (version = 'latest') {
  const npmName = NPM_NAME;
  const destDir = DEST_DIR;
  console.log('>>> start download sparrow-view', version, destDir, REGISTRY);

  return getNpmTarball(npmName, version, REGISTRY)
    .then((tarballURL) => {
      console.log('>>> download sparrow-view from npm', tarballURL);
      return extractTarball({ tarballURL, destDir });
    })
    .catch((err) => {
      // getNpmTarball|extractTarball error
      console.log();
      console.log(chalk.red('Error: download sparrow-view error'));
      console.log();
      console.log(err);
      process.exit(1);
    })
    .then(() => {
      console.log('>>> download sparrow-view completed');
      console.log('>>> start installing sparrow-view dependencies');
      return installDependencies(destDir, REGISTRY);
    })
    .then(() => {
      console.log('>>> install sparrow-view dependencies completed');
    })
    .catch((err) => {
      // install deps error
      console.log();
      console.log(err);
      console.log(chalk.red('提示：安装依赖失败.'));
      process.exit(1);
    });
}



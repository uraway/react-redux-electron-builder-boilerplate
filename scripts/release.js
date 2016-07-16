const exec = require('child_process').exec;
const pkg = require('./package.json');

const version = pkg.version;

exec(`gh-release create uraway/react-redux-electron-builder-boilerplate ${version}`);

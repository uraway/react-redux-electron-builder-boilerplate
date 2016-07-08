import pkg from '../package.json';
import fs from 'fs-extra';

const version = pkg.version;
const content = `export default "${version}"`;

const autoUpdater = `{"url": "https://github.com/uraway/react-redux-electron-builder-boilerplate/releases/download/v${version}/react-redux-electron-builder-boilerplate-${version}-mac.zip"}`;

fs.writeFileSync('./src/config/version.js', content);
fs.writeFileSync('auto_updater.json', autoUpdater);

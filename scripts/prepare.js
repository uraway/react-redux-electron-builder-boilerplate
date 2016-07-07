import fs from 'fs-extra';
import pkg from '../package.json';

const KEYS = ['author', 'dependencies', 'description', 'main', 'name', 'version'];
const DATA = KEYS.reduce((object, key) => {
  return Object.assign(object, { [key]: pkg[key] });
}, {});

try {
  fs.mkdirSync('./app');
} catch (error) {
  if (error.code !== 'EEXIST') {
    throw error;
  }
}

fs.copySync('./src/images', './app/images');
fs.writeFileSync('./app/index.html', fs.readFileSync('./src/index.html'));
fs.writeFileSync('./app/package.json', JSON.stringify(DATA));

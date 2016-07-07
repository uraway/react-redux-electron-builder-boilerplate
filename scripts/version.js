import pkg from '../package.json';
import fs from 'fs-extra';

const version = pkg.version;
const content = `export default "${version}"`;

fs.writeFileSync('./src/config/version.js', content);

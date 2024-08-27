import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const _root = resolve(__dirname, '..');

const root = (...args) => {
  return join(_root, ...args.map(arg => arg.toString()));
};

export {
  root,
  __filename,
  __dirname,
}

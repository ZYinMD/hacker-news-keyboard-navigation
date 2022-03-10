const pathToManifest = './src/manifest.json';
const manifest = require(pathToManifest);
const newVersion = require('./package.json').version;
manifest.version = newVersion;
require('fs').writeFileSync(pathToManifest, JSON.stringify(manifest, null, 2));

const chokidar        = require('chokidar');
const { buildModule } = require('./build-module');

chokidar.watch( [ './src/app/**/*.tsx', './src/app/**/*.ts' , './src/app/**/*.js' , './src/app/**/*.jsx' ] ).on( 'change', async () => {
  console.log('Building Script...');
  await buildModule();
  console.log('Finished');
} );
require('@blocklet/sdk/lib/error-handler');
require('dotenv-flow').config();

const logger = require('../libs/logger');
const { name } = require('../../package.json');

(async () => {
  try {
    console.log('pre-start');
    process.exit(0);
  } catch (err) {
    logger.error(`${name} pre-start error`, err.message);
    process.exit(1);
  }
})();

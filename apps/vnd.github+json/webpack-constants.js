/* eslint-disable @typescript-eslint/no-var-requires */
const os = require('os');
const HappyPack = require('happypack');

exports.maxThreadPoolSize = HappyPack.ThreadPool({
  size: Math.min(os.cpus().length, 4),
});

const modeStrategy = new RegExp('^development$', 'gi');

exports.isDev = ({ mode }) => mode && modeStrategy.test(mode);

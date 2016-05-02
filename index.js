if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'testing';
}

module.exports.CrudSupport = require('./lib/crud-support');
module.exports.StoreSupport = require('./lib/store-support');
module.exports.SpectronSupport = require('./lib/spectron-support');

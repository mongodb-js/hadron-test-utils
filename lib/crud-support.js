'use strict';

const assert = require('assert');
const createConnection = require('mongodb-connection-model').connect;

/**
 * Shorthand no options insert documents into a test database conneciton.
 *
 * @param {Connection} connection - The connection object.
 * @param {String} collection - The collection name.
 * @param {Array} documents - The documents to insert.
 * @param {Function} done - The callback.
 */
function insertMany(connection, collection, documents, done) {
  createConnection(connection, function(err, db) {
    assert.equal(null, err);
    var collection = db.collection(collection);
    collection.insertMany(documents, function(error, result) {
      assert.equal(null, error);
      debug(result);
      db.close();
      done();
    });
  });
};

/**
 * Remove all the test documents.

 * @param {Connection} connection - The connection object.
 * @param {String} collection - The collection name.
 * @param {Function} done - The callback.
 */
function removeAll(connection, collection, done) {
  createConnection(connection, function(err, db) {
    assert.equal(null, err);
    var collection = db.collection(collection);
    collection.deleteMany({}, {}, function(error, result) {
      assert.equal(null, error);
      debug(result);
      db.close();
      done();
    });
  });
};

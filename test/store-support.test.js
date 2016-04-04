'use strict';

const expect = require('chai').expect;
const Connection = require('mongodb-connection-model');
const store = require('mongodb-reflux-store');
const ApplicationStore = store.ApplicationStore;
const NamespaceStore = store.NamespaceStore;
const StoreSupport = require('../lib/store-support');

const DATABASE = 'test';
const COLLECTION = 'users';
const CONNECTION = new Connection({ hostname: '127.0.0.1', port: 27018, ns: DATABASE });

describe('StoreSupport', function() {

  describe('#setup', function() {
    it('sets up the data service and namespace', function(done) {
      StoreSupport.setup(DATABASE, COLLECTION, CONNECTION, function() {
        expect(ApplicationStore.dataService).to.not.equal(null);
        expect(NamespaceStore.namespace).to.equal('test.users');
        done();
      });
    });
  });

  describe('#teardown', funciton() {
    it('tears down the data service and namespace', function(done) {
      StoreSupport.teardown(function() {
        expect(ApplicationStore.dataService).to.equal(null);
        expect(NamespaceStore.namespace).to.equal(null);
        done();
      });
    });
  });
});

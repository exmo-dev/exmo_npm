'use strict';
var exmo = require('../lib/exmo-api.js'),
    credentials = {
        key: process.env.EXMO_KEY,
        secret: process.env.EXMO_SECRET
    };

if (!credentials.key || !credentials.secret) {
   console.log('cant test the private API functionality, ' + 
               'please define 2 env variables: EXMO_KEY and EXMO_SECRET');
   process.exit(0);
}

exmo.init_exmo({key:credentials.key, secret:credentials.secret});

exports['user_info'] = {
  setUp: function(done) {
    done();
  },
  'no args': function(test) {
      exmo.api_query("user_info", { }, function(result){
        var data = JSON.parse(result);
        test.equal(data.error, undefined);
        test.done();
      });
  },
};

exports['user_cancelled_orders'] = {
  setUp: function(done) {
    done();
  },
  'no args': function(test) {
      exmo.api_query("user_cancelled_orders", { "limit":1, "offset":0 }, function(result){
        var data = JSON.parse(result);
        test.equal(data.error, undefined);
        test.done();
      });
  },
};


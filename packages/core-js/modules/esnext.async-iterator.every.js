'use strict';
var $ = require('../internals/export');
var $every = require('../internals/async-iterator-iteration').every;

// `AsyncIterator.prototype.every` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true }, {
  every: function every(fn) {
    return $every(this, fn);
  }
});

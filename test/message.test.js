var assert = require('assert');
var Printr = require('..');

test('writing to out', function() {
  var out = new Stream;

  var printr = new Printr({
    out: out,
    prefix: ' '
  });

  printr.out.print('Hi');
  printr.out.write('Hi');

  assert.equal(out.messages[0], " Hi\n");
  assert.equal(out.messages[1], "Hi");
});

test('writing to err', function() {
  var err = new Stream;

  var printr = new Printr({
    err: err,
    prefix: ' '
  });

  printr.err.print('Hi');
  printr.err.write('Hi');

  assert.equal(err.messages[0], " Hi\n");
  assert.equal(err.messages[1], "Hi");
});

function Stream() {
  this.messages = [];
}

Stream.prototype.write = function(message) {
  this.messages.push(message);
};

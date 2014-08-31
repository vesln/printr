/**
 * Dependencies
 */

var Message = require('./message');

/**
 * Printr - tiny print util.
 *
 * Options:
 *   - `out`     out stream, default: process.stdout
 *   - `err`     err stream, default: process.stderr
 *   - `prefix`  prefix to append for `Message#print`, default: ''
 *
 * @param {Object} options
 * @constructor
 */

function Printr(options) {
  options = options || {};
  options.out = options.out || process.stdout;
  options.err = options.err || process.stderr;
  options.prefix = options.prefix || '';
  this.options = options;
}

/**
 * Return a new `Message` with `target` set to `out`.
 *
 * @returns {Message}
 * @api public
 */

Object.defineProperty(Printr.prototype, 'out', {
  get: function() {
    return new Message(this.options.out, this.options.prefix);
  }
});

/**
 * Return a new `Message` with `target` set to `err`.
 *
 * @returns {Message}
 * @api public
 */

Object.defineProperty(Printr.prototype, 'err', {
  get: function() {
    return new Message(this.options.err, this.options.prefix);
  }
});

/**
 * Primary export
 */

module.exports = Printr;

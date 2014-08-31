/**
 * Message - a message to be written.
 *
 * @param {Stream} target
 * @param {String} prefix
 * @constructor
 */

function Message(target, prefix) {
  this.target = target;
  this.prefix = prefix;
}

/**
 * Print a line.
 *
 * @param {String} message
 * @api public
 */

Message.prototype.print = function(msg) {
  msg = msg || '';
  msg = this.prefix + msg;
  this.write(msg + '\n');
};

/**
 * Write the given `msg` to the stream.
 *
 * @param {String} message
 * @api public
 */

Message.prototype.write = function(msg) {
  msg = msg || '';
  this.target.write(msg);
};

/**
 * Primary export
 */

module.exports = Message;

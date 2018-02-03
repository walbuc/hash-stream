const crypto = require('crypto')
/**
* Takes the content of a readable stream
* and creates a fingerprint hash for it.
* @param {Stream} stream Readable stream
* @param {String} algorithm hash algorithm, default sha256
* @return {Promise}
*/

module.exports = (stream, algorithm = 'sha256') => {
  let hash = crypto.createHash(algorithm)
  return new Promise((resolve, reject) => {
    stream.on('readable', () => {
      let buf = stream.read();
      buf ? hash.update(buf) : resolve(hash.digest().toString('hex'))
    })
    stream.on('error', err => reject(err))
  })
}

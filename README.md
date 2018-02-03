# hash-stream

This module takes content of a readable stream
and creates a fingerprint hash for it.

```
npm install hash-stream-promise
```

## Usage

``` js
var hasher = require('hash-stream')
var fs = require('fs')

var stream = fs.createReadStream('file')

hasher(stream)
  .then(hash => {
    console.log('this is the hash', hash)
  })
  .catch(err => {
    console.log('handle error', err)
  })
```

## API
#### `hasher(stream, [algorithm])`
Default algorithm is 'sha256', you can use any other valid one like sha512, etc.
The function returns a Promise object that is resolved with the file hash.

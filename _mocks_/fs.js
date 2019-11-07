'use strict';


exports.readFile = (file, cb) => {
  if(!file || file.match(/bad/i)) {
    cb('invalid file');
  } else {
    cb(undefined, new Buffer('file contents'))
  }
};

exports.writeFile = (file, buffer, cb) => {
  if(!file || file.match(/bad/i)) {
    cb('invalid file');
  } else if(!Buffer.isBuffer(buffer)) {
    cb('invalid buffer');
  } else {
    cb(undefined, undefined);
  }
};

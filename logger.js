'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => {
  console.log('logger has connected');
});

client.on('data', function(data) {
  let payload = JSON.parse(data);
  console.log(payload);
});

client.on('error', function() {
  console.error('there was an error bruh');
});

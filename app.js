'use strict';

const fs = require('fs');
const util = require('util');
const net = require('net');


const client = new net.Socket();

// const events = ['write', 'read', 'update']

const readFile = async file => {
  const fsRead = util.promisify(fs.readFile);
  try{
    const data = await fsRead(file);
    return data;
  } catch(error) {
    
  }
};

const uppercase = data => {
  try{
    let text = data.toString().toUpperCase();

    return text;
  } catch(error) {

  } 
};

const writeFile = async (file, text) => {
  try{
    const fsWrite = util.promisify(fs.writeFile);
    const data = await fsWrite(file, Buffer.from(text));

    return data;
  } catch(error) {

  }
};

const alterFile = async file => {
  const data = await readFile(file);
  const text = uppercase(data);
  writeFile(file, text);
  
};


let file = process.argv.slice(2).shift();
alterFile(file);

client.connect(3001, 'localhost', () => {
    console.log('App connected to host')
})

setInterval(() => {
    let event = events[Math.floor(Math.random() * events.length)];
    client.write(`${event} has occured`)
}, 500);

client.on('close', function() {
  console.log('Connection closed');
});

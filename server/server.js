
// Set application express dependencies
// const express = require('express');
// const env = require(dotenv).config();
// const http = require('http');
// const path = require('path');
// const app = express();

// Create server dependencies
const { urlencoded } = require('express');
const { createServer } = require('node:http');

// Set host and port
const hostname = '127.0.0.1';
const port = 3000;

// Create server, set request & response; status code 200 = "positive" response
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is a Toot Oriole');
});

// Create http server 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

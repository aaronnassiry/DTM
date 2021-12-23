'use strict';
const fs = require('fs')
const http = require('http');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const requestListener = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("Request Method: " + req.method + '<br/>');
  const request = new XMLHttpRequest();
  request.open('GET', "http://salesforce.com", false);
  request.send(null);
  res.write("Date: " + request.getResponseHeader("Date") + '<br/>')
  fs.appendFileSync('./number-of-req.txt', 'z', function (err) {
    if (err) throw err;
  });
  const data = fs.readFileSync('./number-of-req.txt', 'utf-8');
  const len = (data.length - 1) / 2;
  res.write("number of requests " + len + '<br/>')
  res.write("remote address: " + req.socket.remoteAddress)
  res.end()
}

const server = http.createServer(requestListener);
server.listen(9999);
if (fs.existsSync("./number-of-req.txt")) {
  fs.rmSync("./number-of-req.txt")
}
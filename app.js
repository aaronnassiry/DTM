'use strict';
const fs = require('fs')
const http = require('http');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const request = new XMLHttpRequest();
request.open('GET', "http://salesforce.com", false);
request.send(null);

const requestListener = function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/html' });
fs.appendFileSync('./number-of-req.txt', 'z', function (err) {
  if (err) throw err;
});
const data = fs.readFileSync('./number-of-req.txt', 'utf-8');
const reqNum = data.length 

if (reqNum == 1){
  fs.appendFileSync('./weblog.csv', 'Timestamp (UTC),Request Type,Request Number,Source IP' + "\r\n", function (err) {
  if (err) throw err;
});

}

//res.write("Date: " + request.getResponseHeader("Date") + '<br/>')
fs.appendFileSync('./weblog.csv', request.getResponseHeader("Date") + "\t", function (err) {
  if (err) throw err;
});

//res.write("Request Method: " + req.method + '<br/>');
fs.appendFileSync('./weblog.csv', req.method + "\t", function (err) {
  if (err) throw err;
});

//res.write("number of requests " + reqNum + '<br/>')
fs.appendFileSync('./weblog.csv', reqNum + "\t", function (err) {
  if (err) throw err;
});

//res.write("remote address: " + req.socket.remoteAddress)
fs.appendFileSync('./weblog.csv', req.socket.remoteAddress + "\n", function (err) {
  if (err) throw err;
});

res.end()
}

const server = http.createServer(requestListener);
server.listen(9999);
if (fs.existsSync("./number-of-req.txt")) {
fs.rmSync("./number-of-req.txt")
}
if (fs.existsSync("./weblog.csv")) {
fs.rmSync("./weblog.csv")
}
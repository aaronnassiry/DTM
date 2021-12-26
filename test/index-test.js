const assert = require("assert");
const sinon = require("sinon");
const chai = require("chai");
const subject = require("../src/index.js");
const expect = require("chai").expect;
const fs = require("fs");

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//suppress info logging
console.info = function() {};
console.log = function() {};
console.error = function() {};

beforeEach(() => {
  // creating a fake http request. we don't want to make network calls as part of unit testing
  // this also calls sinon.useFakeXMLHttpRequest
  xhr = this.server = sinon.fakeServer.create();
});
afterEach(function() {
  //tear down the fake http request
  this.server.restore();
});

describe("index.js", () => {
  it("test get", () => {
    // suppress logging
    console.info = function() {};
    // assert that the request was completed
    assert.equal(subject.requestListener(xhr, 3, "Accept:application/json").readyState, 4);
  });
});

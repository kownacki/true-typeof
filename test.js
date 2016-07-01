"use strict";

var chai = require("chai");

var sut = require("./");

describe("true-typeof", function() {
    it("should return 'null' for null", function() {
        chai.expect(sut(null)).to.equal("null");
    });

    it("should return 'undefined' for undefined", function() {
        chai.expect(sut(undefined)).to.equal("undefined");
    });

    it("should return 'boolean' for true", function() {
        chai.expect(sut(true)).to.equal("boolean");
    });

    it("should return 'boolean' for false", function() {
        chai.expect(sut(false)).to.equal("boolean");
    });

    it("should return 'number' for a number", function() {
        chai.expect(sut(42)).to.equal("number");
    });

    it("should return 'string' for a string", function() {
        chai.expect(sut("abc")).to.equal("string");
    });

    it("should return 'object' for a plain object", function() {
        chai.expect(sut({})).to.equal("object");
    });

    it("should return 'object' for a function", function() {
        chai.expect(sut(function() {})).to.equal("object");
    });

    it("should return 'object' for a standard built-in object - array", function() {
        chai.expect(sut([])).to.equal("object");
    });

    it("should return 'object' for a standard built-in object - regexp", function() {
        chai.expect(sut(/abc/)).to.equal("object");
    });

    it("should return 'object' for a primitive wrapper", function() {
        chai.expect(sut(new String(""))).to.equal("object");
    });

    it("should return 'object' for a custom class instance", function() {
        chai.expect(sut(new (function() {}))).to.equal("object");
    });
});

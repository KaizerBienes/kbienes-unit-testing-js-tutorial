const chai = require("chai");
const should = chai.should(); // must call the function

const example2Calculator = require("../examples/example2Calculator");

describe("Calculator with should", function () {
  describe("Adding numbers with should", function () {
    it("sum of 1 and 2 should return 3", function () {
      example2Calculator.add(1, 2).should.equal(3);
    });
    it("sum of 1 to 5 should return 15", function () {
      example2Calculator.add(1, 2, 3, 4, 5).should.equal(15);
    });
    it("sum of 1 and 2 is not 4", function () {
      // not negates everything that follow
      example2Calculator.add(1, 2).should.not.equal(4);
    });
  });
  describe("Subtract numbers with should", function () {
    it("difference of 10 and 3 should return 7", function () {
      example2Calculator.sub(10, 7).should.equal(3);
    });
    it("difference of 4, 2, and 1 should return 1", function () {
      example2Calculator.sub(4, 2, 1).should.equal(1);
    });
  });
});

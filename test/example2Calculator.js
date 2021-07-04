const chai = require("chai");
const expect = chai.expect;

const example2Calculator = require("../examples/example2Calculator");

describe("Calculator", function () {
  describe("Adding numbers", function () {
    it("sum of 1 and 2 should return 3", function () {
      expect(example2Calculator.add(1, 2)).to.equal(3);
    });
    it("sum of 1 to 5 should return 15", function () {
      expect(example2Calculator.add(1, 2, 3, 4, 5)).to.equal(15);
    });
    it("sum of 1 and 2 is not 4", function () {
      // not negates everything that follow
      expect(example2Calculator.add(1, 2)).to.not.equal(4);
    });
  });
  describe("Subtract numbers", function () {
    it("difference of 10 and 3 should return 7", function () {
      expect(example2Calculator.sub(10, 7)).to.equal(3);
    });
    it("difference of 4, 2, and 1 should return 1", function () {
      expect(example2Calculator.sub(4, 2, 1)).to.equal(1);
    });
  });
  describe("Object properties", function () {
    it("Object comparisons", function () {
      expect({ foo: 42 }).to.deep.equal({ foo: 42 });
    });
    it("Object deeply check", function () {
      expect({ foo: { bar: 11 } }).to.have.deep.property("foo", { bar: 11 });
    });
  });
  describe("Array comparison", function () {
    it("Array to include specific value", function () {
      let numberArray = [1, 2, 3, 4, 5];
      expect(numberArray).to.be.an("array").that.includes(5);
    });
    it("Array is empty", function () {
      let emptyArray = [];
      expect(emptyArray).to.be.empty;
    });
  });
  describe("Type comparison", function () {
    it("Variable is false", function () {
      let falseVariable = false;
      expect(falseVariable).to.be.false;
    });
    it("Variable is null", function () {
      let nullVariable = null;
      expect(nullVariable).to.be.null;
    });
    it("Variable is not a number", function () {
      let notANumberVariable = "foo" / 2;
      expect(notANumberVariable).to.be.NaN;
    });
  });
  describe("Throw assertions", function () {
    it("Test type error", function () {
      var typeErrorFunction = function () {
        throw new TypeError("foo error!");
      };

      expect(typeErrorFunction).to.throw();
      expect(typeErrorFunction).to.throw(TypeError);
      expect(typeErrorFunction).to.throw(TypeError, "foo error!");
      expect(typeErrorFunction).to.throw(TypeError, /error!/);
    });
  });
});

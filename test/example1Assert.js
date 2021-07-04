const chai = require("chai");
const assert = chai.assert;

describe("Test Group", function () {
  describe("String assert", function () {
    it("String equality on number", function () {
      assert.equal(1, "1");
    });
    it("String strict equality on number", function () {
      assert.notStrictEqual(1, "1");
    });
    it("String non-equality on number", function () {
      assert.notEqual("foo", "bar");
    });
    it("String typeof should be string", function () {
      assert.typeOf("foo", "string");
    });
  });
  describe("Array assertion", function () {
    it("Array length should be number of contents", function () {
      let cars = ["Ford", "Tesla", "BMW"];
      assert.isArray(cars);
      assert.lengthOf(cars, 3);
    });
  });
  describe("Object assertion", function () {
    it("Object should contain property or inherited property", function () {
      let car = { brand: "Tesla", model: "3", battery: { miles: 300 } };
      assert.property(car, "brand");
      assert.propertyVal(car, "brand", "Tesla");

      // with dot notation
      assert.nestedProperty(car, "battery.miles");
      assert.nestedPropertyVal(car, "battery.miles", 300);

      assert.property(car, "toString");
    });
  });
  describe("Errors assertion", function () {
    it("Error sample assertions", function () {
      let errorFunction = function () {
        throw "sample error";
      };

      assert.throws(errorFunction, "sample error");
      assert.throws(errorFunction, /sample err/);

      let referenceErrorFunction = function () {
        throw new ReferenceError("test reference error");
      };
      assert.throws(referenceErrorFunction, ReferenceError);
      assert.throws(referenceErrorFunction, ReferenceError, /reference/);
    });
  });
  describe("Null, undefined and NaN assertion", function () {
    it("Variable should be null", function () {
      let nullVariable = null;
      assert.isNull(nullVariable);
    });
    it("Variable should be not a number", function () {
      let notANumberVariable = "foo" / 4;
      assert.isNaN(notANumberVariable);
    });
    it("Variable should be undefined", function () {
      let undefinedVariable;
      assert.isUndefined(undefinedVariable);
    });
    it("Variable should be neither null nor undefined", function () {
      let definedVariable = "foo";
      assert.exists(definedVariable);
    });
  });
});

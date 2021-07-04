const chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

chai.should();

const Zoo = require("../examples/Example4Zoo");

describe("Zoo", function () {
  context("#getAllAnimals()", function () {
    it("using Promises should get all animals after 500ms without error", function (done) {
      let zoo = new Zoo();
      zoo
        .getAllAnimals()
        .then((data) => {
          data.should.have.length(3);
          data.should.deep.equals(["Elephant", "Bear", "Giraffe"]);
        })
        .then(() => {
          // should be called in a separate then so that error is printed properly
          done();
        }, done);
    });
    it("using chai-as-promised should get all animals after 500ms without error", function (done) {
      let zoo = new Zoo();
      zoo
        .getAllAnimals()
        .should.eventually.have.length(3)
        .and.deep.equals(["Elephant", "Bear", "Giraffe"])
        .notify(done);
    });
    it("using async/await should get all animals after 500ms without error", async () => {
      let zoo = new Zoo();
      const animals = await zoo.getAllAnimals();
      animals.should.have.length(3);
      animals.should.deep.equals(["Elephant", "Bear", "Giraffe"]);
    });
  });
});

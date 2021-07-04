describe('BDD Test Suite', () => {
    before(() => {
        console.log("before() called!")
    });
    after(() => {
        console.log("after() called!")
    });
    beforeEach(() => {
        console.log("beforeEach() called!")
    });
    afterEach(() => {
        console.log("afterEach() called!")
    });

    context('BDD Test Context', () => {
        it('should 1st test case pass', () => {
            console.log("it() called! Test case 1");
        })
    }) 
    context('BDD Test Context', () => {
        it('should 2nd test case pass', () => {
            console.log("it() called! Test case 2");
        })
    }) 
});

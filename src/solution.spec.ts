import solution = require('./solution');
import {assert} from "chai";

function testIt(eps : number, expected : number[]) {
    assert.deepEqual(solution.G964.iterPi(eps), expected)
}

describe("Fixed Tests iterPi", function() {
    it("Basic tests", function() {
        testIt(0.1, [10, 3.0418396189]);
        testIt(0.01,  [100, 3.1315929036]);
        testIt(0.001,  [1000, 3.1405926538]);
    });
});




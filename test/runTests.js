
// ---------------------- //
// runTests.js - Test runner.
// Runs all the test files. You should NOT change this file.
// ---------------------- //

import { runQueueTests } from './Queue.test.js';
import { runPriorityQueueTests } from './PriorityQueue.test.js';
import { runBinaryMatrixGraphTests } from './BinaryMatrixGraph.test.js';
import { testPassedCount, testFailedCount } from './testUtils.js';

runTests();

function runTests() {
    console.log("== Starting tests ==");
    runQueueTests();
    runPriorityQueueTests();
    runBinaryMatrixGraphTests();
    console.log("== " + testPassedCount + " passed, " + testFailedCount + " failed ==");
}



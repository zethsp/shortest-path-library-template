
// ---------------------- //
// White-box unit tests of the PriorityQueue data structure (PriorityQueue.js).
//
// The method under test is enqueue():
//   - Adds item to the queue.
//   - Throws an error if the queue is full (maxNumItems items).
// ---------------------- //

import { describe, test, assertEquals, assertTrue, assertThrows } from './testUtils.js';
import { PriorityQueue } from '../src/PriorityQueue.js';

export function runPriorityQueueTests() {
    describe("PriorityQueue");

    // ---- Tests for enqueue() ---- //

    test("enqueue makes an empty queue non-empty", () => {
        const q = new PriorityQueue(3);
        q.enqueue("A");
        assertTrue(!q.isEmpty());
    });

    test("enqueue followed by dequeue makes the queue empty", () => {
        const q = new PriorityQueue(3);
        q.enqueue("A");
        q.dequeue();
        assertTrue(q.isEmpty());
    });

    test("enqueue followed by dequeue returns the same item", () => {
        const q = new PriorityQueue(3);
        q.enqueue("A");
        assertEquals(q.dequeue(), "A");
    });

    test("items leave the queue in the same order they were added (FIFO)", () => {
        const q = new PriorityQueue(5);
        q.enqueue("A",3);
        q.enqueue("B",1);
        q.enqueue("C",2);
        assertEquals(q.dequeue(), "B");
        assertEquals(q.dequeue(), "C");
        assertEquals(q.dequeue(), "A");
    });

    test("a queue can be filled up to its maximum size without error", () => {
        const q = new PriorityQueue(2);
        q.enqueue("a",2);
        q.enqueue("b",1);
        assertEquals(q.dequeue(), "b");
        assertEquals(q.dequeue(), "a");
    });

    test("enqueue on a full queue throws an error", () => {
        const q = new PriorityQueue(2);
        q.enqueue("a");
        q.enqueue("b");
        assertThrows(() => q.enqueue("c"));
    });

    test("the circular buffer wraps around without losing items", () => {
        const q = new PriorityQueue(3);
        q.enqueue("a");
        q.enqueue("b");
        q.enqueue("c");
        q.dequeue();                    // removes "a"
        q.dequeue();                    // removes "b"
        q.enqueue("d");
        q.enqueue("e");                 // the queue is full again
        assertEquals(q.dequeue(), "c");
        assertEquals(q.dequeue(), "d");
        assertEquals(q.dequeue(), "e");
    });

    test("enqueue works with different types (numbers, strings, arrays)", () => {
        const q = new PriorityQueue(3);
        q.enqueue(42);                  // number
        q.enqueue("text");              // string
        q.enqueue([2, 3]);              // node [row, col]
        assertEquals(q.dequeue(), 42);
        assertEquals(q.dequeue(), "text");
        assertEquals(q.dequeue(), [2, 3]);
    });

    test("peek shows the front item after enqueue", () => {
        const q = new PriorityQueue(3);
        q.enqueue("x");
        q.enqueue("y");
        assertEquals(q.peek(), "x");
    });

    test("a queue of size one can be filled and emptied", () => {
        const q = new PriorityQueue(1);
        q.enqueue("only");
        assertThrows(() => q.enqueue("too many"));
        assertEquals(q.dequeue(), "only");
        assertTrue(q.isEmpty());
    });
}


export class PriorityQueue {
    #first = 0;
    #last = 0;
    #count = 0;
    #data;
    #prioritydata;
    #arraySize;

    /**
     * A queue based on a circular array stored in the variable #data .
     * 
     * @param {number} maxNumItems - Maximum number of items that the queue can hold.
     */
    constructor(maxNumItems) {
        this.#data = new Array(maxNumItems);
        this.#arraySize = maxNumItems;
    }

    
    /**
     * Adds item to the queue.
     * Throws an error if the queue is full
     * @template Item - Can be any type
     * @param {Item} item - The item to be enqueued
     */
    enqueue(item,priority) {
        // Implementér denne metode
        if (this.#count == this.#arraySize) {
             throw new error ("queue is full");
        }

        // this.#data[this.#last]=item;
        // this.#prioritydata[this.#last]=priority;
        // this.#last++;       
        // this.#last %= this.#arraySize;
        // this.#count++;
    }
    

    dequeue() {
        let priority_min = Infinity;
        let i_min;
        for (const i in this.#prioritydata) {
            let priority = this.#prioritydata[i];
            if (priority<this.#prioritydata[i_min]) {
                i_min = i;
                priority_min = this.#prioritydata[i_min];
            } 
        }
        // let item = this.#data[this.#first];
        // this.#data[this.#first] = undefined;
        // this.#first += 1;
        // this.#first %= this.#arraySize;
        // this.#count -= 1;
        let item = this.#data[i_min];
        return item;
    }

    peek() {
        return this.#data[this.#first];
    }

    isEmpty() {
        return this.#count === 0;
    }
}
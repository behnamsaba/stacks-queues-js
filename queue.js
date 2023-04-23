/** Node: node for a queue. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** enqueue(val): add new value to end of the queue. Returns undefined. */

    enqueue(val) {
        const newNode = new Node(val);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }

    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Cannot dequeue from an empty queue');
        }
        let removedNode = this.first;
        this.first = this.first.next;
        this.size--;
        return removedNode.val;
    }

    /** peek(): return the value of the first node in the queue. */

    peek() {
        if (this.isEmpty()) {
            throw new Error('Cannot peek an empty queue');
        }
        return this.first.val;
    }

    /** isEmpty(): return true if the queue is empty, otherwise false */

    isEmpty() {
        if (this.size === 0) {
            return true;
        }
        return false;
    }
}

module.exports = Queue;


const newNode = new Node(val);
if(this.isEmpty()){
  this.first = newNode;
  this.last = newNode;
}else {
  this.first.next = this.first;
  this.first = newNode
}
this.size ++
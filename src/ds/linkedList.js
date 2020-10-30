class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Return the length of the LinkedList.
     */
    length() {
        if (this.head === null) {
            return 0;
        }

        let length = 1;

        let tmp = this.head;
        while (tmp.next != null) {
            length++;
            tmp = tmp.next;
        }

        return length;
    }

    /**
     * Appends the specified element to the end of this list.
     * @param {*} value 
     */
    add(value) {
        const node = new Node(value, null);

        // check if list is currently empty
        // insert in head position of the list
        if (this.head === null) {
            this.head = node;
            return;
        }

        // find the last node in the list
        let tmp = this.head;
        while (tmp.next != null) {
            tmp = tmp.next;
        }

        // tmp is the last value
        // point tmp to new node.
        tmp.next = node;
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

module.exports = LinkedList;
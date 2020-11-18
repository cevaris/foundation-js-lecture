class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Return the length of the LinkedList.
     */
    length() {
        let length = 0;

        for (const value of this) {
            length++;
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

    remove(value) {
        // check first node in linked list to see if 
        // contains the value that we are looking for
        if (this.head && this.head.value === value) {
            // value = A
            // head -> A -> B -> C .... -> Z -> null
            this.head = this.head.next;
            // head -> B -> C .... -> Z -> null
            return true;

            // head -> one -> null
            // remove(one)
            // head -> null
        }

        let prev = null;
        let curr = this.head;
        // loop until end of list or until value is found
        while (curr && curr.value !== value) {
            prev = curr;
            curr = curr.next;
        }

        // we got to the end of list without finding
        // matching value
        if (curr === null) {
            return false;
        }

        // found node with matching value; curr.
        // remove curr node
 
        // value = Y
        //       prev  curr
        // head -> X -> Y -> Z -> null
        // head -> X -> Z -> null

        prev.next = curr.next;
        return true;
    }

    *iterator() {
        let tmp = this.head;
        while (tmp) {
            yield tmp.value;
            tmp = tmp.next;
        }
    }

    [Symbol.iterator]() {
        return this.iterator();
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

module.exports = LinkedList;
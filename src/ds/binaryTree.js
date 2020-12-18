class BinaryTree {
    constructor() {
        this.root = null;
    }

    get length() {
        return 0;
    }

    add(value) {
        function recursiveAdd(node, value) {
            if (node === null) {
                return new Node(value, null, null);
            }

            const direction = comparator(value, node.value);
            if (direction === -1) {
                node.left = recursiveAdd(node.left, value);
            }
            if (direction === 1) {
                node.right = recursiveAdd(node.right, value);
            }

            return node;
        }

        this.root = recursiveAdd(this.root, value);
    }

    // add value 5
    // recursiveAdd(null, 5)
    //    Node(5)

    // add value 3
    // recursiveAdd(Node(5, null, null), 3)
    //    recursiveAdd(null, 3)
    //       Node(3)
    //    Node(5, Node(3), null)
    // update root

    // add value 4
    // recursiveAdd(Node(5, Node(3), null), 4)
    //  recursiveAdd(Node(3, null, null), 4)
    //   recursiveAdd(null, 4)
    //    Node(4, null, null)
    //   Node(3, null, Node(4, null, null))
    // Node(5, Node(3, null, Node(4,null, null)), null)

    /**
     * Returns true if binary tree contains the value.
     * Return false if binary tree does not contain the value.
     */
    contains(value) {
        function containsAdd(node, value) {
            // Recursively navigate tree to see if value exists.
            // if current node value is equal to value, return true.
            // if current value does not match, recursive deeper until reach bottom of tree.
        }

        return containsAdd(this.root, value);
    }

    [Symbol.iterator]() {
        return this.inOrder(this.root);
    }

    iterator(order) {
        switch(order){
            case Order.IN_ORDER:
                return this.inOrder(this.root);
            case Order.PRE_ORDER:
                return this.preOrder(this.root);
            default:
                throw Error(`invalid order ${order}`);
        }
    }

    *inOrder(node) {
        if (node !== null) {
            // left
            yield* this.inOrder(node.left);
            // root
            yield node.value;
            // right
            yield* this.inOrder(node.right);
        }
        return;
    }

    *preOrder(node) {
        if (node !== null) {
            // root
            yield node.value;
            // left
            yield* this.preOrder(node.left);
            // right
            yield* this.preOrder(node.right);
        }
        return;
    }
}

const Order = {
    IN_ORDER: 'IN_ORDER',
    PRE_ORDER: 'PRE_ORDER',
    POST_ORDER: 'POST_ORDER',
};

class Node {
    /**
     * @param {*} value 
     * @param {Node} left 
     * @param {Node} right 
     */
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

/**
 * a < b => -1
 * a = b =>  0
 * a > b =   1
 * @param {*} a 
 * @param {*} b 
 */
function comparator(a, b) {
    const left = JSON.stringify(a);
    const right = JSON.stringify(b);

    if (left === right) {
        return 0;
    }
    return left < right ? -1 : 1;
}

module.exports = BinaryTree;
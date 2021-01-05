class BinaryTree {
    constructor() {
        this.root = null;
    }

    get length() {
        let len = 0;
        for (const e of this) {
            len++;
        }
        return len;
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
        function recursiveContains(node, value) {
            // Recursively navigate tree to see if value exists.
            // if current node value is equal to value, return true.
            // if current value does not match, recursive deeper until reach bottom of tree.
        }

        return recursiveContains(this.root, value);
    }

    remove(value) {
        let removed = false;

        function recursiveRemove(node, value) {
            if (node === null) {
                // hit the bottom of the tree; 
                // value was not found
                return null;
            }

            const direction = comparator(value, node.value);

            if (direction === 0) {
                removed = true;

                // leaf node, no children
                if (node.left === null && node.right === null) {
                    return null;
                }

                // right is null; promote left
                if (node.right === null) {
                    return node.left;
                }

                // left is null; promote right
                if (node.left === null) {
                    return node.right;
                }

                // find next largest value
                const smallestValue = findSmallestValue(node.right);
                node.value = smallestValue;
                node.right = recursiveRemove(node.right, smallestValue);
            }

            if (direction === -1) {
                node.left = recursiveRemove(node.left, value);
            }

            if (direction === 1) {
                node.right = recursiveRemove(node.right, value);
            }

            return node;
        }

        this.root = recursiveRemove(this.root, value);
        return removed;
    }

    [Symbol.iterator]() {
        return this.inOrder(this.root);
    }

    iterator(order) {
        switch (order) {
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
 * Find left most node in a tree.
 * A.K.A; Find the smallest node in a tree.
 * @param {*} node 
 */
function findSmallestValue(node) {
    // return node.left === null ?
    //     node.value :
    //     smallestValue(node.left);

    if (node.left === null) {
        return node.value; //5
    } else {
        return findSmallestValue(node.left);
    }
}

// findSmallestValue(Node(11))
//  findSmallestValue(Node(8))
//   findSmallestValue(Node(6))
//    findSmallestValue(Node(5))
//     return 5;
//    return 5;
//   return 5;
//  return 5;
// return 5;

/**
 * a < b => -1
 * a = b =>  0
 * a > b =   1
 * @param {*} a 
 * @param {*} b 
 */
function comparator(a, b) {
    const left = a instanceof Object ? JSON.stringify(a) : a;
    const right = b instanceof Object ? JSON.stringify(b) : b;

    if (left === right) {
        return 0;
    }
    return left < right ? -1 : 1;
}

exports.BinaryTree = BinaryTree;
exports.comparator = comparator;
class BinaryTree {
    constructor() {
        this.root = null;
    }

    get length() {
        return 0;
    }

    //    5
    //  3   6

    //    5
    //  3   6
    //2 

    //TODO review nesting/stack of recursive methods
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
}

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
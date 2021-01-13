const { BinaryTree } = require('../../src/ds/binaryTree');

/**
 * Check if a BinaryTree is balanced. 
 * A binary tree is balanced if every internal node has both 
 * a left and right node, with the exception of leaf nodes. 
 * 
 * Return true if balanced, false if not.
 */

test('returns true for balanced tree', () => {
    const tree = new BinaryTree();
    const data = [100, 50, 150, 75, 25, 175, 125];
    data.forEach(e => tree.add(e));

    expect(isTreeBalanced(tree)).toBe(true);
});

test('returns false for imbalanced tree, 1,2,3', () => {
    const tree = new BinaryTree();
    const data = [1, 2, 3];
    data.forEach(e => tree.add(e));

    expect(isTreeBalanced(tree)).toBe(false);
});

test('returns false for imbalanced tree, 3,2,5,4', () => {
    const tree = new BinaryTree();
    const data = [3, 2, 5, 4];
    data.forEach(e => tree.add(e));

    expect(isTreeBalanced(tree)).toBe(false);
});

test('returns true for empty tree', () => {
    const tree = new BinaryTree();
    expect(isTreeBalanced(tree)).toBe(true);
});

test('returns true for tree with 1 node', () => {
    const tree = new BinaryTree();
    expect(isTreeBalanced(tree)).toBe(true);
});


function isTreeBalanced(tree) {
}
const BinaryTree = require('../../src/ds/binaryTree');

test('create empty BinaryTree', () => {
    const tree = new BinaryTree();
    expect(tree.length).toBe(0);
});

test('create BinaryTree with one value', () => {
    const tree = new BinaryTree();
    tree.add('alpha');
    console.log(tree);
});

test('create BinaryTree with multiple values', () => {
    const tree = new BinaryTree();
    tree.add(5);
    tree.add(6);
    tree.add(4);
    tree.add(1);
    tree.add(2);
    console.log(JSON.stringify(tree, null, 3));
});
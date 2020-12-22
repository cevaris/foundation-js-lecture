const BinaryTree = require('../../src/ds/binaryTree');

test('create empty BinaryTree', () => {
    const tree = new BinaryTree();
    expect(tree.length).toBe(0);
});

test('create BinaryTree with one value', () => {
    const tree = new BinaryTree();
    tree.add('alpha');
    // console.log(tree);
});

test('create BinaryTree with multiple values', () => {
    const tree = new BinaryTree();
    tree.add(5);
    tree.add(6);
    tree.add(4);
    tree.add(1);
    tree.add(2);
    // console.log(JSON.stringify(tree, null, 3));
});

test('InOrder BinaryTree iterator', () => {
    const tree = new BinaryTree();

    tree.add(6);
    tree.add(7);
    tree.add(4);
    tree.add(2);
    tree.add(5);

    var ref = [];
    for (const value of tree) {
        ref.push(value);
    }
    expect(ref).toStrictEqual([2, 4, 5, 6, 7]);

    const array = Array.from(tree.iterator('IN_ORDER'));
    expect(array).toStrictEqual([2, 4, 5, 6, 7]);
});

// TODO: FIX THIS TEST; NOT WORKING AS EXPECTED
test.skip('remove Node when multiple children present', () => {
    const tree = new BinaryTree();

    tree.add(100);
    tree.add(50);
    tree.add(75);
    tree.add(60);
    tree.add(25);

    //console.log(JSON.stringify(tree, null, 3));

    expect(tree.remove(50)).toBe(true);

    expect(tree.length).toBe(4);

    const array = Array.from(tree);
    expect(array).toStrictEqual([25, 75, 60, 100]);
});
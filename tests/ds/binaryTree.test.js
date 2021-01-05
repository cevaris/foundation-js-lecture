const { BinaryTree, comparator } = require('../../src/ds/binaryTree');

test('create empty BinaryTree', () => {
    const tree = new BinaryTree();
    expect(tree.length).toBe(0);
});

test('create BinaryTree with one value', () => {
    const tree = new BinaryTree();
    tree.add('alpha');
});

test('create BinaryTree with multiple values', () => {
    const tree = new BinaryTree();
    tree.add(5);
    tree.add(6);
    tree.add(4);
    tree.add(1);
    tree.add(2);
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

    const array = Array.from(tree);
    expect(array).toStrictEqual([2, 4, 5, 6, 7]);
});

test('remove Node with two children present', () => {
    const tree = new BinaryTree();

    tree.add(100);
    tree.add(50);
    tree.add(75);
    tree.add(60);
    tree.add(25);

    expect(tree.remove(50)).toBe(true);

    expect(tree.length).toBe(4);

    const array = Array.from(tree);
    expect(array).toStrictEqual([25, 60, 75, 100]);
});


test('remove Node with no children present', () => {
    const tree = new BinaryTree();

    tree.add(100);
    tree.add(50);
    tree.add(75);
    tree.add(60);
    tree.add(25);

    expect(tree.remove(25)).toBe(true);

    expect(tree.length).toBe(4);

    const array = Array.from(tree);
    expect(array).toStrictEqual([50, 60, 75, 100]);
});

test('remove Node with left only child', () => {
    const tree = new BinaryTree();

    tree.add(100);
    tree.add(50);
    tree.add(25);
    tree.add(150);
    tree.add(175);

    expect(tree.remove(50)).toBe(true);

    expect(tree.length).toBe(4);

    const array = Array.from(tree);
    expect(array).toStrictEqual([25, 100, 150, 175]);
});

test('remove Node with right only child', () => {
    const tree = new BinaryTree();

    tree.add(100);
    tree.add(50);
    tree.add(25);
    tree.add(150);
    tree.add(175);

    expect(tree.remove(150)).toBe(true);

    expect(tree.length).toBe(4);

    const array = Array.from(tree);
    expect(array).toStrictEqual([25, 50, 100, 175]);
});

test('attempt to remove non-exist Node from tree ', () => {
    const tree = new BinaryTree();

    tree.add(100);
    tree.add(50);
    tree.add(25);
    tree.add(150);
    tree.add(175);

    expect(tree.remove(-1)).toBe(false);
    expect(tree.remove('5')).toBe(false);
    expect(tree.remove({ 'test': 'test' })).toBe(false);

    expect(tree.length).toBe(5);

    const array = Array.from(tree);
    expect(array).toStrictEqual([25, 50, 100, 150, 175]);
});

test('comparator compares correctly', () => {
    expect(comparator(1, 3)).toBe(-1);
    expect(comparator(3, 1)).toBe(1);
    expect(comparator(3, 3)).toBe(0);

    expect(comparator('a', 'b')).toBe(-1);
    expect(comparator('b', 'a')).toBe(1);
    expect(comparator('a', 'a')).toBe(0);

    expect(comparator({ 'a': 1 }, { 'b': 2 })).toBe(-1);
    expect(comparator({ 'b': 2 }, { 'a': 1 })).toBe(1);
    expect(comparator({ 'a': 1 }, { 'a': 1 })).toBe(0);
});
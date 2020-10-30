const LinkedList = require('../../src/ds/linkedList');

test('assert empty list to have size 0', () => {
    const list = new LinkedList();
    expect(list.length()).toBe(0);
});

test('assert list with one node to have size 1', () => {
    const list = new LinkedList();
    list.add(5);
    expect(list.length()).toBe(1);
});

test('assert list with two nodes to have size 2', () => {
    const list = new LinkedList();
    list.add(5);
    list.add(47);
    expect(list.length()).toBe(2);
});

test('assert list with 10 nodes to have size 10', () => {
    const list = new LinkedList();

    for (let i = 0; i < 10; i++) {
        list.add(i);
    }

    expect(list.length()).toBe(10);
});
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

test('remove from empty list', () => {
    const list = new LinkedList();
    expect(list.remove(10)).toBe(false);
});

test('remove from list with one node', () => {
    const list = new LinkedList();

    list.add('one');

    expect(list.remove('doesNotExist')).toBe(false);
    expect(list.remove('one')).toBe(true);
    expect(list.length()).toBe(0);
});

test('remove many from list', () => {
    const list = new LinkedList();

    for (let i = 0; i < 1000; i++) {
        list.add(i);
    }

    for (let i = 0; i < 1000; i++) {
        expect(list.remove(i)).toBe(true);
    }

    expect(list.length()).toBe(0);
});


test('iterate through linked list', () => {
    const list = new LinkedList();

    const data = [];

    for (let i = 0; i < 1000; i++) {
        list.add(i);
        data.push(i);
    }

    for (const element of list) {
        // pop the value from reference list
        const expectedValue = data.shift();
        // expect value from reference list to be seen
        expect(element).toBe(expectedValue);
    }

    // verify all values were seen
    expect(data.length === 0).toBeTruthy();
});
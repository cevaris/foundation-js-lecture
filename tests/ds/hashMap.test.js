const HashMap = require('../../src/ds/hashMap');

test('create empty HashMap', () => {
    const map = new HashMap();
    expect(map.length).toBe(0);
});

test('put/get key values to HashMap', () => {
    const map = new HashMap();

    map.put('test', 1);
    map.put(333, 2);
    map.put({ obj: true }, 22);
    map.put({ obj: true }, 33);
    map.put({ obj: true }, 44);

    expect(map.length).toBe(3);

    expect(map.get('test')).toBe(1);
    expect(map.get(333)).toBe(2);
    expect(map.get({ obj: true })).toBe(44);
    expect(map.get('doesNotExist')).toBe(null);
});
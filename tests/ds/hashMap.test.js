const HashMap = require('../../src/ds/hashMap');

test('create empty HashMap', () => {
    const map = new HashMap();
    expect(map.length).toBe(0);
});

test('add key values to HashMap', () => {
    const map = new HashMap();
    
    map.put('test', 1);
    map.put(333, 2);
    map.put({ obj: true }, 3);
    map.put({ obj: true }, 3);
    map.put({ obj: true }, 3);

    expect(map.length).toBe(0);
});
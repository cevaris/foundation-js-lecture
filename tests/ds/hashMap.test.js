const HashMap = require('../../src/ds/hashMap');

test('create empty HashMap', () => {
    const map = new HashMap();
    expect(map.length).toBe(0);
});

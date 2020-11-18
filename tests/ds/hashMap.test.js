const HashMap = require('../../src/ds/hashMap');

test('create empty HashMap', () => {
    const map = new HashMap();
    expect(map.length).toBe(0);
});

test('add key values to HashMap', () => {
    const map = new HashMap();
    
    map.put('test', 1);
    map.put(333, 2);
    map.put({ obj: true }, 22);
    map.put({ obj: true }, 33);
    map.put({ obj: true }, 44);

    // console.log(JSON.stringify(map, null, 2));

    for(const kv of map){
        console.log(kv);
    }

    expect(map.length).toBe(0);
});
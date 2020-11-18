
class HashMap {
    constructor() {
        this.buckets = new Array(10);
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Array();
        }
    }

    /**
     * Return number of KeyValues in HashMap.
     */
    get length() {
        return 0;
    }

    /**
     * Inserts key and value into HashMap.
     * @param {*} key 
     * @param {*} value 
     */
    put(key, value) {
        const hashNumber = hashCode(key);
        const bucketIdx = hashNumber % this.buckets.length;
        const bucket = this.buckets[bucketIdx];

        // create key value object
        const kv = keyValue(key, value);

        for (let i = 0; i < bucket.length; i++) {
            // Need to use JSON.stringify to compare objects
            if (JSON.stringify(bucket[i].key) === JSON.stringify(key)) {
                // key is already present; update its value
                bucket[i].value = value;
                return;
            }
        }

        // no duplicate ky found
        // add new key value to bucket
        bucket.push(kv);
    }

    /**
     * Retrieves a value from a HashMap, given the key.
     * @param {*} key 
     */
    get(key) {
    }

    /**
     * Remove value from HashMap that is associated.
     * @param {*} key 
     */
    remove(key) {
    }


    *iterator(){
        // Loop through every and yield key value in HashMap 
        for(const bucket of this.buckets){
            for(const kv of bucket){
                yield kv;
            }
        }
        // for(let bucketIdx = 0; this.buckets.length; bucketIdx++){
        //     for(let bucketArrayIdx = 0; this.buckets[bucketIdx].length; bucketArrayIdx++){
        //         yield this.buckets[bucketIdx][bucketArrayIdx]
        //     }
        // }
        // return 0;
    }

    [Symbol.iterator](){
        return this.iterator();
    }

}

module.exports = HashMap;


function keyValue(key, value) {
    return {
        key: key,
        value: value
    };
}

/**
 * Generates a int53 number hashCode for a given object.
 * @param {number} key 
 */
function hashCode(key) {
    const str = JSON.stringify(key);

    // https://stackoverflow.com/a/52171480/3538289
    const seed = 0;
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}


// const hash = h(key) -> number
// const bucket = hash % bucketSize;

// const hashNumber = h("someKey") // 123123123112
// const bucket = hashNumber % 7;
// [][][]["someKey"][][][][]


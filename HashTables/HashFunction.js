class HashTable {
    constructor(size = 5) {
        this.map = new Array(size);
    }

    _hashFunction(key) {
        let sum = 0;
        const PRIME_NUMBER = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(i) - 96;
            sum = (sum * PRIME_NUMBER + charCode) % this.map.length;
        }

        return sum;
    }

    set(key, value) {
        const index = this._hashFunction(key);

        if (!this.map[index]) {
            this.map[index] = [];
        }

        this.map[index].push([key, value]);
    }

    get(key) {
        const index = this._hashFunction(key);

        if (this.map[index]) {
            for (let i = 0; i < this.map[index].length; i++) {
                if (this.map[index][i][0] === key) {
                    return this.map[index][i][1];
                }
            }
        }

        return undefined;
    }

    getAllKeys() {
        let keys = [];
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i]) {
                for (let j = 0; j < this.map[i].length; j++) {
                    keys.push(this.map[i][j][0]);
                }
            }
        }
        return keys;
    }
    getAllValues(){
        let values = [];
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i]) {
                for (let j = 0; j < this.map[i].length; j++) {
                    values.push(this.map[i][j][1]);
                }
            }
        }
        return values;
    }
}

// Testing the HashTable
const phonebook = new HashTable();
phonebook.set('john', "555-555-555");
phonebook.set('jane', "123-456-789");
phonebook.set('doe', "987-654-321");

console.log(phonebook.get('john'));  
console.log(phonebook.getAllKeys()); 
console.log(phonebook.getAllValues()); 

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = 'Hello world!'
for (const i of greetings) {
    if (i == ' '){
        continue
    }
    // console.log(`Each char is ${i}`);
}

// Maps

const map = new Map()
map.set('BH', "Bharat")
map.set('USA', "United State America")
map.set('FR', "France")
map.set('BH', "Bharat")

// console.log(map);

// for (const key of map) {
//     console.log(key);    // simply print the whole array one by one
// }

for (const [key, value] of map) {
    console.log(key, ':-', value);   // Return the value in proper way
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'

}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);    // myObject is not iterable
}
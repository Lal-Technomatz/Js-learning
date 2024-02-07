const myObject = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('BH', "Bharat")
// map.set('USA', "United State America")
// map.set('FR', "France")
// map.set('BH', "Bharat")

// for (const key in map) {
//     console.log(map[key]);     // map is not iteratable like this.
// }
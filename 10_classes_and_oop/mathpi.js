const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger Chai',
    price: 250,
    isAvaiable: true,
    orderChai: function(){
        console.log("chai nhi bani");
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    // writable: false,          // when use this not possible to write the value again. 
    enumerable: false            // Not possible to apply the loop so here you check the name property is not available in the output.
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
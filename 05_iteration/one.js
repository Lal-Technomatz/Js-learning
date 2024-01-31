// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        // console.log(`${i} is the Best Number`);
    }
    // console.log(element);
    
}

// console.log(element);  // ====> scop of the element is not available here.

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop Value: ${i} =====`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop Value: ${j} and Inner Loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}
let myArray = ["Flesh", "Batman", "Superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// Break And Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of index is ${index}`);   

// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of index is ${index}`);    
}
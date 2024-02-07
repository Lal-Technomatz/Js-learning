const coding = ['js', 'rb', 'py', 'java', 'cpp']

// coding.forEach( function (element) {
//     console.log(element);
// });

// coding.forEach( (item) => {
//     console.log(item);
// } );

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // only provide the reference (printMe) of the function not the execution (printMe()) of the funtion.

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
// Both are same nothing is different while creating an object but the main difference is that while creating object with cunstructor is singleton object.
// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Hitesh",
            lastName: "Chaoudhary"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
const obj3 = {7: "g", 8: "h", 9: "i"}

// const obj4 = {obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "lal@singh.com"
    },
    {
        id: 2,
        email: "aryan@singh.com"
    },
    {
        id: 3,
        email: "prem@singh.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "Hitesh"
}

// course.courseinstructor   // if anyone want to print inside values.

const {courseinstructor: instructor} = course // destructuring the object.

// console.log(courseinstructor);
console.log(instructor); // getting same value

// Api returning data formate
// Json format
// {
//     "name": "lal singh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Array format

// [
//     {},
//     {},
//     {}
// ]
var c;
console.log("--Welcome in JS----");

// console.log("-----Starting with Variables------", c);

const a = 5;
let b = 6;
var c = 7;

// console.log("-a : , b : , c : ", a, b, c);
// console.log("----Sum --- :" + a + b + c);

// console.log("-----If Else Statments---");

const marks = 80;

// if (marks > 40) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// console.log("largest no:");
const x = 5;
const y = 8;
const z = 67;

// if (x > y) {
//   if (x > z) {
//     console.log(x);
//   }
// } else {
//   if (y > z) {
//     console.log(y);
//   } else {
//     console.log(z);
//   }
// }

// console.log("-----For Loop----");

// let sum = 0; //  0 1 2 3 4 5 6 7 8 9
// for (let i = 0; i < 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }
// console.log(sum);

// console.log("-----while loop-------");

// let n = 10;
// let sum = 0;
// while (n > 0) {
//   sum = sum + n;
//   n--;
// }
// console.log(sum);

// let m = 10;
// while (m > 0) {
//   m = m - 1;
//   console.log(m);
//   m = m - 1;
// }

//  Question : Find max value from 4 numbers.

console.log("---------Array------------");

//  indexes: 0, 1, 2, 3, 4, 5, 6, 7
const arr = [1, 2, 3, 4, 5, 6, 6, 6];

console.log(arr);
console.log("first value : ", arr[0]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

console.log("-----add new element at given index:");

arr.splice(4, 0, 7);
console.log(arr);

console.log("-----remove element from array----");
arr.splice(2, 1);
console.log(arr);

// Questions:
//  Replace all 5 with 3 : eg: [ 3,5,6,7,5] --> [3,3,6,7,3];
//  Reverse the array :    eg: [3,4,5,6,6,2] --> [2,6,6,5,4,3];

console.log("---objects--------:");

const obj = {
  name: "harsh",
  rollno: 2938,
  result: "pass",
};

console.log(obj);
console.log("  name :", obj["name"]);

console.log("---add new key in obj---");
obj.id = 2;

console.log(obj);

console.log("----remove element from obj-----");

delete obj.name;

console.log(obj);

// const data = [
//   {
//     id: 1,
//     name: "a",
//   },
//   {
//     id: 2,
//     name: "b",
//   },
//   {
//     id: 3,
//     name: "c",
//   },
//   {
//     id: 4,
//     name: "d",
//   },
//   {
//     id: 5,
//     name: "e",
//   },
// ];

// for (let i = 0; i < data.length; i++) {
//   const myObj = data[i];
//   console.log(myObj.cca2);
// }

// const d = {
//   name: "south G..",
//   tld: tld[0],
//   independent: false,
//   capital: "all...",
// };

console.log(data);

const objArr = [];

for (let i = 0; i < data.length; i++) {
  const myObj = data[i];
  const newObjItem = {};
  newObjItem.name = myObj?.name?.common;
  newObjItem.ccn3 = myObj?.ccn3;
  objArr.push(newObjItem);
}

console.table(objArr);

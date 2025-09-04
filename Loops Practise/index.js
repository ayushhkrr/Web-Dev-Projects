


// let num = 57
// let isprime = true

// for (i = 2; i < num; i++){
//     if (num % i === 0) {
//         isprime = false
//         break;
//     }

// }
// if (isprime) {
//     console.log(num + " is a prime number")
// } else {
//     console.log(num + " is not a prime number")
// }

// let x1 = 0;
// let x2 = 1;
// let xx;
// console.log(x1);
// console.log(x2);

// for (i = 3; i < 11; i++) {
//   xx = x1 + x2;
//     console.log(xx);
//     x1 = x2
//     x2 = xx
// }

// for (i = 1; i < 5; i++){
//   let pattern = "*"
//   for (x = 1; x < i; x++){

//     pattern += "*"
//   }
// console.log(pattern)
// }

// for (i = 5; i > 0; i--){
//   let pattern = ""
//   for (j = 0; j < i; j++){
//     pattern += "&"
//   }
//   console.log(pattern)
// }

// let multiply = (a, b)=> {
//   return a*b
// }

// let car = {
//   brand: "BMW",
//   color: "Black",
//   year: 1969

// }

// console.log(car.brand);
// console.log(car["color"]);

// let person = {
//   name: "Ayush",
//   age: 20,
//   city: "Delhi",
// };

// person.isStudentTrue = true;
// person.age = 21;
// delete person.city;

// console.log(person);

// let new_arr = ["one", "two", "three"]

// let one = "first"
// let two = "second"
// let three = "third"

// console.log(Array.of(one, two, three));

const obj = {
  name: "Ayush",
  Age: 20,
  Religion: "Hindu",
  warning : function () {
 return "You Are In Danger";
}

};


// console.log(obj);

// console.log({
//   ...obj,
//   warning: obj.warning(),
// });

// obj.newWarning = function () {
//   console.log(`You Are In Danger ${this.name}`);
  
// }

// console.log(obj.newWarning());

const first = {
  name: "Roshan",
  age: 21
}
const second = {
  word: "Ayush",
  number: 20
}

// const third = Object.assign({}, first, second)

// console.log(third);

// console.log(Object.keys(first));
// console.log(Object.values(first));
// console.log(Object.entries(first));
console.log(first.hasOwnProperty("name"));



// for (let i = 0; i < 10; i++){
//     console.log(i)
// }
// sum = 0
// for (i = 0; i <= 50; i++){
//     if (i % 2 === 0) {
//         sum = sum + i;
//     }

// }console.log(sum)

// let sum = 0;
// for (i = 0; i <= 10; i++) {
//     sum = sum + i;
// }
//    console.log(sum)

// for (i = 1; i <= 10; i++){
//     console.log(`5 * ${i} = ${i*5}`)
// }
// factor = 1
// for (i = 1; i <= 5; i++){
//     factor = factor * i;

// }
// console.log(factor)

// for (i = 1; i < 6; i++){
//     let pattern = "*";
//     for (k = 1; k < i; k++){
//         pattern += "*";
//     }
//         console.log(pattern)

// }

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

let x1 = 0;
let x2 = 1;
let xx;
console.log(x1);
console.log(x2);

for (i = 3; i < 11; i++) {
  xx = x1 + x2;
    console.log(xx);
    x1 = x2
    x2 = xx
}


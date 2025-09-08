// let a = 64
// let b = 69


// a = a + 5
// b = b - 5

// console.log(a, b);

// let a = 69

// if (a % 2 === 0) {
//     console.log("even");

// } else {
//     console.log("odd");

// }

// let num = [44, 65, 2, 55]

// console.log("The largest number is " + Math.max(...num));

// let a = 4356;
// let b = 4456;
// let c = 4256;

// if (a > b && a > c) {
//     console.log(`The largest number is: ${a}`);
    
// }
// else if(b > c && b > a) {
//     console.log(`The largest number is: ${b}`);
    
// }
// else {
//     console.log(`The largest number is: ${c}`);
    
// }

// let citizens = {
//     Abhinav: {
//         Age: 22
//     },
//     Roshan: {
//         Age: 21
//     },
//     Nikil: {
//         Age: 12
//     }
// }

// for (let name in citizens) {
// if (citizens[name].Age >= 18) {
//   console.log(` ${name} is eligible to vote.`);
// } else {
//     console.log(`${name} is not eligible for vote.`);
    
// }
// }

// const fun =  () => {

//     if (true) {
//         let a = 10;
//         const b = 20;
//         var c = 30;
//         console.log(a, b, c);
//         return [a, b, c];
//     }
// }

// console.log(...fun());

for (i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 ===0){
    console.log('FizzBuzz');
    
    } else if (i % 3 === 0) {
        console.log('Fizz');
        
    } else if (i % 5 === 0) {
        console.log('Buzz');
        
    } else {
        console.log(i);
        
    }
}


// let one = function () {
//     console.log(this)
// }

// one()

let two = {
    name: "Blue",
    age: 69,
    country : function() {
         console.log(`${this.name}`)
    } ,
   
    
}

two.country()
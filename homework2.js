//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
let food = Object.values(person3);
for (property in person3){
    console.log(person3[property]);
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name=name,
    this.age=age,
    this.printInfo = function(){
        console.log(this.name)
        console.log(this.age)
    }
}
const person = new Person("john", 27)
person.printInfo()
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
// function addAge = ()=>{

// }

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const words = ['test', 'wordssssss', 'to', 'use', 'for', 'this', 'exxxercises']
// words.map(word => word.length)
//     words.filter(word) =>{word.length > 10
//         return('Big World')
//     }
function checkStringLen(word){
    return new Promise((resolve, reject) => {
        if (typeof word !== 'string'){
            reject(new Error("not a string"))
        }else{
            if (word.length > 10){
                resolve("Big number")        
            }else{
                resolve('small number')
            }
        }
    })
}
// checkStringLen("wordsss")
//     .then(result => console.log(result)) 
//     .catch(error => console.log(error))
words.map(word => 
    checkStringLen(word)
    .then(result => console.log(`${word} => ${result}`)) 
    .catch(error => console.log(error))
)
    // if (x == 0) {
    //     myResolve("OK");
    // } else {
    //     myReject("Error");
    // }
    // });
//     if(`${wordLen}` > 10){
// return ('big word')
// }




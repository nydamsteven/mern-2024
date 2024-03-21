function math (x,y) {
    console.log(`product': ${x * y}`) 
    console.log(`quotient': ${x / y}`)
    console.log(`sum': ${x + y}`)
    console.log(`difference': ${x - y}`)
}
math (5, 4)



function totalSum (number) {
    let sum = 0
    for (let i= 0; i<=number;i++) {
        sum +=i
    }

    return sum
}
 console.log(totalSum(9))




// function double(x,y){
//     return x*y
// }

let double = (x=6,y=6) => x*y
console.log(double(5))



// var arr = [1,2,3,4];

// console.log( sumAll(...arr));




function randomNumber() {
    // return Math.floor (Math.random()*101)
    // return Math.random()*5
    return Math.trunc(Math.random()*100)     
}
let guess = randomNumber()
 let userguess = prompt('Guess a number between 1 and 100')
console.log(guess,userguess)

 if(userguess < guess){
    console.log('Try again, but higher')
 }

 else if(userguess > guess){
    console.log('Try again, but lower')
 }

 else if(userguess == guess){
    console.log('Winner Winner Chicken Dinner!! The number has changed')
 }





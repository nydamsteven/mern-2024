console.log('Hello world!')

let array = [-1, 2, -3, 4, -5]

function replaceNegatives(array) {
    for(let i=0; i<array.length; i++) {
        if(array[i] <0) {
        array[i] = "Negative"
    } 
}
return array

}
console.log(replaceNegatives(array))



function reverseString(string){
    let outputString = ""

    for(let i=string.length-1; i>=0; i--){
        outputString += string[i]
    }
    return outputString
}
console.log(reverseString("string"))
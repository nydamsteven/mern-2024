console.log('"I know now that I know nothing"- Socrates')



function randomNumber() {

    return Math.trunc(Math.random()*100);     
}
let num = randomNumber();
let numGuess = 0;
let count = 0; 
let backgroundColor = 'White';
let message = document.getElementById('message');
let message2 = document.getElementById('message2');
let message3 = document.getElementById('message3'); 
let btn = document.getElementById('submitguess');

 
    btn.addEventListener("click", function() { 
    var x = document.getElementById("guessfield").value; 
    console.log(x);
    userGuess (x)
    count = count + 1;
    message2.innerHTML = "TOTAL GUESSES: " + count
    
    // function chBackcolor(color) {
    //     document.body.style.background = 'black';
    //  }
    
    // changeElementBackground()
});

// function changeBackground() {
//     ele.style.backgroundColor = 'Black'
//     ele.style.color = 'White'
// }

function userGuess (userguess) {
    if(isNaN(userguess)){
        message.innerHTML = "That is not a number! Try again."
        
    }

    if(userguess < num){
        message.innerHTML = "Try again, but higher"
       
     }
    
     else if(userguess > num){
        message.innerHTML =  "Try again, but lower"
       
     }
    
     else if(userguess == num){
        message.innerHTML = 'Winner Winner Chicken Dinner!! The number has changed'
        numGuess = numGuess + 1;
        message3.innerHTML = "CORRECT GUESSES: " + numGuess
     }

     backgroundColor = (backgroundColor == 'White' || backgroundColor == 'Red') ? 'Black' : 'Red'
     
     

    //  if (backgroundColor == 'White' ) {
    //     document.body.style.backgroundColor = 'Black'
    //     document.body.style.color = 'White'
    //     backgroundColor = 'Black'
    //  }

    // else if(backgroundColor == 'Black'){
    //     document.body.style.backgroundColor = 'Red'
    //     document.body.style.color = 'White'
    //     backgroundColor = 'Red'
    //  }

    //  else if(backgroundColor == 'Red'){
    //     document.body.style.backgroundColor = 'Black'
    //     document.body.style.color = 'White'
    //     backgroundColor = 'Black'
    //  }

    document.body.style.backgroundColor = backgroundColor
        document.body.style.color = 'White'

}



message2.innerHTML = "TOTAL GUESSES: " 

message3.innerHTML = "CORRECT GUESSES: " 



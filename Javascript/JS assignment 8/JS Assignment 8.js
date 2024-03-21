console.log('Bienvenue power bottoms!')

document.getElementById('bgcolor').setAttribute("style","width:500px; height:500px; border: 4px solid black");

let button = document.getElementById("jsbutton")
let div = document.getElementById('bgcolor')

button.addEventListener('click', function(){
    changeElementBackground(div)
})



function changeElementBackground(ele, callback) {
    ele.style.backgroundColor = 'Green'
    ele.style.color = 'White'
}

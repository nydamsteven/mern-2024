


let h1 = document.createElement("h1")
let text = document.createTextNode("Steven Nydam")
h1.appendChild(text)
document.body.appendChild(h1)


let h3 = document.createElement("h3")
let text2 = document.createTextNode("Blue")
h3.appendChild(text2)
document.body.appendChild(h3)
h3.style.color = "blue"


let secondh3 = document.createElement("h3")
let text3 = document.createTextNode("Fav food: Tacos")
secondh3.appendChild(text3)
document.body.appendChild(secondh3)

let img = document.createElement('img')
img.src = "https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg"
document.body.appendChild(img)

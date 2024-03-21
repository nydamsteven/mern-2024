console.log('Hello world!')

let img1 = "<img src='./images/woo1.jpeg'>"
let img2 = "<img src='./images/woo2.jpg'>"
let img3 = "<img src='./images/woo3.jpg'>"

let imageArr = [img1,img2,img3]

for(let i = 0; i<imageArr.length; i++) {
    document.write(imageArr[i])
}
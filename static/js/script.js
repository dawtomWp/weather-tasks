const titleElement = document.getElementById("title");
// titleElement.textContent = "Witam wszystkich";
titleElement.style.color = "red"

const btnElement = document.getElementById("btn1");

function showLog() {
    const random = Math.random()*100
    titleElement.textContent = random
}

btnElement.addEventListener("click", showLog)


const inputElement = document.getElementById("field1")

function showValue() {
    titleElement.textContent = inputElement.value
}

// inputElement.addEventListener("input", showValue)

inputElement.addEventListener("input", () => titleElement.textContent = inputElement.value)


document.body.addEventListener("click",()=>{
    const color1 = Math.floor(Math.random()*255)
    const color2 = Math.floor(Math.random()*255)
    const color3 = Math.floor(Math.random()*255)
    document.body.style.background = `rgb(${color1},${color2},${color3})`

    console.log(color1, color2, color3)
})






// console.log("Hello!");

// // stała
// const year = 2023;
// // zmienna
// let firstname = "Jan";


// const isAdmin = true 

// if(isAdmin == true) {
//    console.log("Admin!");
// }
// else {
//    console.log("Odmowa dostępu");
// };


// for(let i = 0; i < 20; i++) {
//     console.log("Iteracja numer " + i);   
// };


// function zwyklaFunkcja () {
//     return 123;
// };

// const arrowFn = (a) => a + 10;
// arrowFn(10);


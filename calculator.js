const numButton = document.querySelectorAll(".numButton")
const signButton= document.querySelectorAll(".signButton");
const equalButton = document.querySelector(".equalButton")

const output = document.querySelector("#output");
let a = "";
let b = ""
let sign="";




equalButton.onclick = () =>{
    switch(sign){
        case "+":
            output.innerHTML = add();
            break;
        case "-":
            output.innerHTML = subtract();
            break;
        case "/":
            output.innerHTML = divide();
            break;
        case "*":
            output.innerHTML = multiply();
            break;

    }
}
signButton.forEach(btn =>{
    btn.onclick = () => {
        sign = btn.textContent;
    }
});

numButton.forEach((btn) => {
    btn.onclick = () =>
        (sign === "")?
            a += btn.textContent:
            b += btn.textContent;
});

function add(){
    return Number(a) + Number(b);
}
function subtract(){
    return Number(a) - Number(b);
}
function divide(){
    return Number(a) / Number(b);
}
function multiply(){
    return Number(a) * Number(b);
}
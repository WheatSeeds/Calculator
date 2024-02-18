const numButton = document.querySelectorAll(".numButton")
const signButton= document.querySelectorAll(".signButton");
const equalButton = document.querySelector(".equalButton")
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");

const output = document.querySelector("#output");
const story = document.querySelector("#story");

let a = "";
let b = "";
let sign="";

function updateScreen(){
    (sign === "")
        ?((a==="")
             ?(output.innerHTML = 0)
             :(output.innerHTML = a))
         :((b==="")
             ?(output.innerHTML = 0)
             :(output.innerHTML = b));
}



clearButton.onclick = () =>{
    a = "";
    b = "";
    sign="";
    output.innerHTML = 0;
    story.innerHTML = ".";
}

deleteButton.onclick = () =>{
    if(sign===""){
        a = a.slice(0, -1)
        updateScreen()
    }
    else{
        b = b.slice(0, -1)
        updateScreen()
    }
}

equalButton.onclick = () =>{
    switch(sign){
        case "+":
            story.innerHTML = a + " " + sign + " " + b;
            output.innerHTML = add();
            break;
        case "-":
            story.innerHTML = a + " " + sign + " " + b;
            output.innerHTML = subtract();
            break;
        case "/":
            story.innerHTML = a + " " + sign + " " + b;
            output.innerHTML = divide();
            break;
        case "*":
            story.innerHTML = a + " " + sign + " " + b;
            output.innerHTML = multiply();
            break;

    }
}

signButton.forEach(btn =>{
    btn.onclick = () => {
        sign = btn.textContent;
        story.innerHTML = a + " " + sign + " " + b;
    }
});

numButton.forEach((btn) => {
    btn.onclick = () => {
        if (sign === "") {
            a += btn.textContent;
            output.innerHTML = a;
        } else {
            b += btn.textContent;
            output.innerHTML = b;
            story.innerHTML = a + " " + sign;
        }
    }
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
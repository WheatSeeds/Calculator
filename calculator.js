const story = document.querySelector("#story");
const output = document.querySelector("#output");

const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const divideButton = document.querySelector("#divideButton");
const multiplyButton = document.querySelector("#multiplyButton");

addButton.onclick = () => storage.sign = "+";
subtractButton.onclick = () => storage.sign = "-";
divideButton.onclick = () => storage.sign = "/";
multiplyButton.onclick = () => storage.sign = "*";

const storage = {
    first:2,
    sign:"+",
    second:3,
}

function add(storage){
    return Number(storage.first) + Number(storage.second);
}
function subtract(storage){
    return Number(storage.first) - Number(storage.second);
}
function divide(storage){
    return Number(storage.first) / Number(storage.second);
}
function multiply(storage){
    return Number(storage.first) * Number(storage.second);
}
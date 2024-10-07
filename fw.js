let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3;
let answer4;
let img = document.getElementById("img");


let text1 = document.getElementById("wellDone");
let wellDoneText = "Дуруст!!!";

let alg = [
    {
        item1: "resistor",
        item2: "capasity"
    }
]


console.log(
    alg.map(i => {
        return {
            item1a: i.item1,
            ...i
        }
    })
)

function func1() {
    console.log("clicked first button")
    text1.innerText="Нодуруст!!!";
    text1.style.color = "red"
}

function func2() {
    console.log("clicked first button")
    text1.innerText=wellDoneText;
    text1.style.color = "green"

}
function func3() {
    console.log("clicked first button")
    text1.style.color = "red"
    text1.innerText="Нодуруст!!!";
}
function func4() {
    console.log("clicked first button")
    text1.style.color = "red"
    text1.innerText="Нодуруст!!!";
}


function nextFunc() {
    answer2.innerText = "Mouse"
    img.src = "mouse.jpg"
}
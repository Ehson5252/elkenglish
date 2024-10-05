let answer1;
let answer2;
let answer3;
let answer4;

// let text1 = document.getElementById("wellDone");
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
    if()
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

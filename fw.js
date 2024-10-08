let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let img = document.getElementById("img");
let options = document.getElementById("options");

let text1 = document.getElementById("wellDone");
let wellDoneText = "Дуруст!!!";

let alg = ["mirror", "lotion", "glasses", "apple", "cap", "pen", "spoon"];
let list = [answer1, answer2, answer3, answer4];

let rightAns = Math.floor(Math.random()*4);
console.log(rightAns);
list[rightAns].innerText = alg[0]
let theR = alg[0];
alg.splice(0, 1);


for(let i=0; i<list.length; i++) {
    console.log("a", i)
    if(i !== rightAns) {
        let rand = Math.floor(Math.random() * alg.length)
        list[i].innerText = alg[rand];
        alg.splice(rand, 1);
    }
}

console.log(answer1.innerText);




// answer1.innerText =  alg[Math.floor(Math.random() * 7)]


function func1() {
    console.log("clicked first button")
    if(list[0].innerText == theR) {
        text1.innerText=wellDoneText;
        text1.style.color = "green"
    } else {
        text1.innerText="Нодуруст!!!";
        text1.style.color = "red"
    }
}

function func2() {
    if(list[1].innerText == theR) {
        text1.innerText=wellDoneText;
        text1.style.color = "green"
    } else {
        text1.innerText="Нодуруст!!!";
        text1.style.color = "red"
    }

}
function func3() {
    if(list[2].innerText == theR) {
        text1.innerText=wellDoneText;
        text1.style.color = "green"
    } else {
        text1.innerText="Нодуруст!!!";
        text1.style.color = "red"
    }
}
function func4() {
    if(list[3].innerText == theR) {
        text1.innerText=wellDoneText;
        text1.style.color = "green"
    } else {
        text1.innerText="Нодуруст!!!";
        text1.style.color = "red"
    }
}


function nextFunc() {
    answer1.innerText = "mouse"
    img.src = "mouse.jpg"
    theR = "mouse"
    text1.innerText = "";
}
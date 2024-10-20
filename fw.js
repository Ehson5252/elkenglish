import words_data from "./modules/words_data.js";


let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let next = document.getElementById("next");
let img = document.getElementById("img");
let comment_text = document.getElementById("wellDone");


let right_comment = "Дуруст!!!";
let wrong_comment = "Нодуруст!!!";

const list = [answer1, answer2, answer3, answer4];
let copyArr = [...words_data]
let wordsLeft = [...words_data]

let randomNumOf4;
let randomNumOfAll;
let theR;

const call1 = () => {
    randomNumOf4 = Math.floor(Math.random()*4);
    randomNumOfAll = Math.floor(Math.random()*wordsLeft.length);

    theR =  wordsLeft[randomNumOfAll].word;

    list[randomNumOf4].innerText = theR
    img.src= wordsLeft[randomNumOfAll].img;

    wordsLeft.splice(randomNumOfAll, 1);

    let findIndex = copyArr.findIndex(e => e.word == theR);
    copyArr.splice(findIndex, 1);
}

const call2 = ()=> {
    for(let i=0; i<list.length; i++) {
        if(i!==randomNumOf4) {
            let rand = Math.floor(Math.random() * copyArr.length);
            list[i].innerText = copyArr[rand].word;
            copyArr.splice(rand, 1);
        }
    }
}

call1();
call2();


answer1.addEventListener('click', () => func1());
answer2.addEventListener('click', () => func2());
answer3.addEventListener('click', () => func3());
answer4.addEventListener('click', () => func4());
next.addEventListener('click', () => nextFunc());




function func1() {
    console.log("clicked first button")
    if(list[0].innerText == theR) {
        comment_text.innerText=right_comment;
        comment_text.style.color = "green"
    } else {
        comment_text.innerText="Нодуруст!!!";
        comment_text.style.color = "red"
    }
}

function func2() {
    if(list[1].innerText == theR) {
        comment_text.innerText=right_comment;
        comment_text.style.color = "green"
    } else {
        comment_text.innerText="Нодуруст!!!";
        comment_text.style.color = "red"
    }
}

function func3() {
    if(list[2].innerText == theR) {
        comment_text.innerText=right_comment;
        comment_text.style.color = "green"
    } else {
        comment_text.innerText="Нодуруст!!!";
        comment_text.style.color = "red"
    }
}

function func4() {
    if(list[3].innerText == theR) {
        comment_text.innerText=right_comment;
        comment_text.style.color = "green"
    } else {
        comment_text.innerText="Нодуруст!!!";
        comment_text.style.color = "red"
    }
}

let counter = 4;

function nextFunc() {
    copyArr=[...words_data];
    if(counter>0){
        comment_text.innerText = "";
        console.log("yes", counter)
        call1();
        call2();
        counter = counter-1;
    }
}
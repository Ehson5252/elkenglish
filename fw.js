import words_data from "./modules/words_data.js";

let indicators = document.querySelector(".indicators")
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let next = document.getElementById("next");
let img = document.getElementById("img");
let comment_text = document.getElementById("comment_text");

let right_comment = "Right! Дуруст!";
let wrong_comment = "Wrong!!! Нодуруст!!!";

let amountOfQs = 10;
let randomNumOf4;
let theROption;
let indexOfCurQ = 0
let rightAs = 0;

const answers = [answer1, answer2, answer3, answer4];
let copyArr = [...words_data]
let checkArr = []

const makeIndicators = (amountOfQs) => {
    for(let i=1; i<=amountOfQs; i++) {
        let hElm = document.createElement("p")
        let node = document.createTextNode(i);
        hElm.appendChild(node);
        indicators.appendChild(hElm)  
    }
}

makeIndicators(amountOfQs);

let ind = indicators.children;
ind[indexOfCurQ].style.transform ="scale(1.2)"


const makeRandomQs = (originalQs, qty) => {
    let randomQs = [];
    let usedIdexes = new Set();

    while (randomQs.length<qty && usedIdexes.size<originalQs.length) {
        console.log("repeat");
        let randomIndex = Math.floor(Math.random() * originalQs.length);
        if(!usedIdexes.has(randomIndex)) {
            randomQs.push(originalQs[randomIndex]);
            usedIdexes.add(randomIndex)
        } 
    }
    return randomQs;
}


let randomQs = makeRandomQs(copyArr, amountOfQs);


const crtROption = () => {
    console.log("crtROption")

    theROption = randomQs[indexOfCurQ].word;

    randomNumOf4 = Math.floor(Math.random()*4);
    answers[randomNumOf4].innerText = theROption
    img.src= randomQs[indexOfCurQ].img;
    checkArr.push(theROption)
}

const crt3MoreOption = ()=> {
    console.log("crt3MoreOption")

    for(let i=0; i<answers.length; i++) {
        console.log("for loop inside crt3MoreOption" )
        if(i!==randomNumOf4) {
            let rand = Math.floor(Math.random() * copyArr.length);

            if(!checkArr.includes(copyArr[rand].word)) {
                answers[i].innerText = copyArr[rand].word;
                checkArr.push(copyArr[rand].word)

            } else {
                i--;
            }
            
        }
    }
    checkArr = [];
}

crtROption();
crt3MoreOption();


answer1.addEventListener('click', () => func(answers[0]));
answer2.addEventListener('click', () => func(answers[1]));
answer3.addEventListener('click', () => func(answers[2]));
answer4.addEventListener('click', () => func(answers[3]));
next.addEventListener('click', () => nextFunc());




function func(arg) {
    console.log(" inside func(arg) clicked ")

    if(arg.innerText == theROption) {
        console.log("right answer");

        comment_text.innerText=right_comment;
        comment_text.style.color = "green"
        ind[indexOfCurQ].style.transform ="scale(1)"
        ind[indexOfCurQ].style.background ="green"

        rightAs++;
        indexOfCurQ++;

        if(indexOfCurQ < amountOfQs) {
            setTimeout(() => nextFunc(), 700)
        } else {
            console.log("do you ?  " + indexOfCurQ)
            setTimeout(() => playAgain(), 1000) 
        }
        
    } else {
        console.log("wrong answer");

        comment_text.innerText = wrong_comment;
        comment_text.style.color = "red"
        ind[indexOfCurQ].style.transform ="scale(1)"
        ind[indexOfCurQ].style.background ="red"

        indexOfCurQ++;

        if(indexOfCurQ < amountOfQs) {
            setTimeout(() => nextFunc(), 700)
        } else {
            setTimeout(() => playAgain(), 1000) 
        }

       
    }
}



function nextFunc() {
        comment_text.innerText = "";
        crtROption();
        crt3MoreOption();
        
        ind[indexOfCurQ].style.transform ="scale(1.2)"

    
        console.log("end of nexfunc");
}

function playAgain() {
    comment_text.innerHTML = `
        <p style="font-size:20px; color:#2400FF; ">You answered ${rightAs} question(s) correctly.</p>
        <p style="font-size:16px; color:#2400FF; display: block "> Шумо ба ${rightAs} савол дуруст ҷавоб додед. </p>
        <a style = "display: block; " href = 'http://elkenglish.net' >Play Again</a>
    `
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;
}
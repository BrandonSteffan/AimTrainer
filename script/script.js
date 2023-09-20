let target = document.querySelector(".target");
let scoreS = document.querySelector(".score3");
let scoreS2 = document.querySelector(".score2");
let timerT = document.querySelector(".timer");
let timerP = document.querySelector(".timer1");
let scoreP = document.querySelector(".score1");
let sSpan = document.querySelector(".sSpan");
let restart = document.querySelector(".restart");
let gamearea = document.querySelector(".gamearea");
let start = document.querySelector(".start");
let startB = document.querySelector(".startB");
let highScoreD = document.querySelector(".highscore");
let newHigh = document.querySelector(".newHigh");
restart.style.display = "none";
let posTopT = Math.random()*710;
let posLeftT = Math.random()*960
target.style.top = posTopT +"px";
target.style.left = posLeftT+"px";
target.style.display = "block";
gamearea.style.cursor ="default";
scoreP.style.display = "none";
target.style.display = "none";
timerP.style.display = "none";
newHigh.style.display = "none";
startB.addEventListener("click", play);
let score = 0;
let timerV = 0;
let highscore = localStorage.getItem("score");
highScoreD.innerHTML = highscore;
function timer(){
    if(timerV >=0){
        timerT.innerHTML = timerV;
        timerV--;
    }
    else{
        clearTimeout(currentTimeId);
        //target.removeEventListener("click", hit);
        scoreP.style.display = "none";
        target.style.display = "none";
        timerP.style.display = "none";
        restart.style.display = "flex";
        gamearea.style.cursor ="default";
        scoreS.innerHTML = score;
        if(score > highscore){
            localStorage.setItem("score",score);
            highscore = score;
            highScoreD.innerHTML = highscore;
            newHigh.style.display = "block";
        }
    }
}

function play(){
    timerV = 30;
    score = 0;
    currentDiff = 1;
    scoreMult = 1;
    scoreS2.innerHTML = score;
    newHigh.style.display = "none";
    target.style.display = "block";
    scoreP.style.display = "block";
    timerP.style.display = "block";
    start.style.display = "none";
    restart.style.display = "none";
    gamearea.style.cursor ="crosshair";
    nextMove(currentDiff);
    setInterval(timer,1000);
}
function replay(){
    timerV = 30;
    score = 0;
    currentDiff = 1;
    scoreMult = 1;
    scoreS2.innerHTML = score;
    newHigh.style.display = "none";
    target.style.display = "block";
    scoreP.style.display = "block";
    timerP.style.display = "block";
    start.style.display = "none";
    restart.style.display = "none";
    gamearea.style.cursor ="crosshair";
    nextMove(currentDiff);
    //setInterval(timer,1000);
}

function move(){
    target.style.display = "none";
    posTopT = Math.random()*710;
    posLeftT = Math.random()*960
    target.style.top = posTopT +"px";
    target.style.left = posLeftT+"px";
    target.style.display = "block";
}
let retry = document.querySelector(".retry");
retry.addEventListener("click" , replay);

let currentDiff = 1 ;
let scoreMult = 1;
//nextMove(currentDiff);

currentTimeId=0

function nextMove(difficulty){
    currentTimeId = setTimeout(() => {
        move();
        nextMove(currentDiff);
    },difficulty*1000);
}

target.addEventListener("click" , hit);

function hit(){
    score+= scoreMult*100;
    scoreS2.innerHTML = score;
    currentDiff-=0.01;
    scoreMult += 0.1;
    target.style.display = "none";
    //clearTimeout(currentTimeId);
    //nextMove(difficulty);
    //move();
}

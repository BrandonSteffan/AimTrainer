let target = document.querySelector(".target");
let scoreS = document.querySelector(".score");
let timerT = document.querySelector(".timer");
let timerP = document.querySelector(".timer1");
let scoreP = document.querySelector(".score1");
let sSpan = document.querySelector(".sSpan");
let restart = document.querySelector(".restart");
restart.style.display = "none";
let posTopT = Math.random()*710;
let posLeftT = Math.random()*960
target.style.top = posTopT +"px";
target.style.left = posLeftT+"px";
target.style.display = "block";
let score = 0;
let timerV = 2;
function timer(){
    if(timerV >=0){
        timerT.innerHTML = timerV;
        timerV--;
    }
    else{
        clearTimeout(currentTimeId);
        target.removeEventListener("click", hit);
        scoreP.style.display = "none";
        target.style.display = "none";
        timerP.style.display = "none";
        restart.style.display = "flex";
        scoreS.innerHTML = score;
    }
}
setInterval(timer,1000);
function play(){
    timerV = 2;
    score = 0;
    currentDiff = 1;
    scoreMult = 1;
    scoreS.innerHTML = score;
    target.style.display = "block";
    scoreP.style.display = "block";
    timerP.style.display = "block";
    restart.style.display = "none";
    nextMove(currentDiff);
}
function move(){
    target.style.display = "none";
    posTopT = Math.random()*710;
    posLeftT = Math.random()*960
    target.style.top = posTopT +"px";
    target.style.left = posLeftT+"px";
    target.style.display = "block";
}

restart.addEventListener("click" , play);

let currentDiff = 1 ;
let scoreMult = 1;
nextMove(currentDiff);

currentTimeId=0

function nextMove(difficulty){
    currentTimeId = setTimeout(() => {
        console.log("currentTimeId", currentTimeId)
        move();
        nextMove(currentDiff);
    },difficulty*1000);
}

target.addEventListener("click" , hit);

function hit(){
    score+= scoreMult*100;
    scoreS.innerHTML = score;
    currentDiff-=0.01;
    scoreMult += 0.1;
    //clearTimeout(currentTimeId);
    //nextMove(difficulty);
    //move();
}

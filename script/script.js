let target = document.querySelector(".target");
let scoreS = document.querySelector(".score");
let timerT = document.querySelector(".timer");
let posTopT = Math.random()*710;
let posLeftT = Math.random()*960
target.style.top = posTopT +"px";
target.style.left = posLeftT+"px";
target.style.display = "block";
let score = 0;
let timerV = 30;
function timer(){
    if(timerV >=0){
        timerT.innerHTML = timerV;
        timerV--;
    }
    else{
        clearTimeout(currentTimeId);
    }
}
setInterval(timer,1000);
function move(){
    target.style.display = "none";
    posTopT = Math.random()*710;
    posLeftT = Math.random()*960
    target.style.top = posTopT +"px";
    target.style.left = posLeftT+"px";
    target.style.display = "block";
}

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

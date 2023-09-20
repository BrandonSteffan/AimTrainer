let target = document.querySelector(".target");
let scoreS = document.querySelector(".score");
let timerT = document.querySelector(".timer");
let scoreP = document.querySelector(".score1");
let sSpan = document.querySelector(".sSpan")
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
        scoreP.style.top = "45%";
        scoreP.style.left = "35%";
        scoreP.style.fontSize = "50px";
        scoreP.style.zindex = "1";
        sSpan.innerText = "Final Score: ";
        scoreP.style.color = "green";
        scoreP.style.display = "block";
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

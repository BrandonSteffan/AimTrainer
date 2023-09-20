let target = document.querySelector(".target");
let posTopT = Math.random()*710;
let posLeftT = Math.random()*960
target.style.top = posTopT +"px";
target.style.left = posLeftT+"px";
target.style.display = "block";
let score = 0;
function move(){
    target.style.display = "none";
    posTopT = Math.random()*710;
    posLeftT = Math.random()*960
    target.style.top = posTopT +"px";
    target.style.left = posLeftT+"px";
    target.style.display = "block";
}

let currentDiff = 1 ;
nextMove(currentDiff);
function nextMove(difficulty){
    setTimeout(() => {
        move();
        nextMove(currentDiff);
    },difficulty*1000);
}

target.addEventListener("click" , hit());

function hit(){
    score++;
    move();
}

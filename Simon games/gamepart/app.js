let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"]; // Four colors
let started = false;
let level = 1;
let highestscore=1;
let h3=document.querySelector("h3");
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 500);
}

function levelUp() {
    userseq = [];
    level++;
    h3.innerText =`highestscore ${highestscore}`;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 4); // Update to 4 for four colors
    let randColor = btns[randidx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randbtn);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length - 1);
}

function checkAns(idxx) {
    console.log("curr level :", level);

    // Compare the last element of userseq with corresponding element in gameseq
    if (userseq[idxx] == gameseq[idxx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){document.querySelector("body").style.backgroundColor="white"},1150);
        if(highestscore<level)
            {
        highestscore=level;
        h3.innerText =`highestscore ${highestscore}`;
            };
        h2.innerHTML = `Game Over! Your score was<b>${level}<br>Press any key to start`;
        reset();
    }
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 500);
}

let allbtns = document.querySelectorAll(".btn");

for (i of allbtns) {
    i.addEventListener("click", btnPress);
}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}


let user=0;
let comp=0;
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}


const drawGame=()=>{
    
    msg.innerText="draw!...play again";
    msg.style.backgroundColor="#081b31";
}


const showWinner=(userwin,compchoice,userchoice)=>{
    if(userwin){
        user++;
        userscore.innerText=user;
        
        msg.innerText=`you win!! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp++;
        compscore.innerText=comp;
        
        msg.innerText=`you lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    
    const compchoice=gencompchoice();
    
    if(userchoice===compchoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoice == "rock"){
            //paper,scissors
            userwin=compchoice == "paper"?false:true;
        }
        else if(userchoice == "paper"){
            //rock,scissors
            userwin=compchoice == "scissors"?false:true;
        }
        else{
            //rock,paper
             userwin=compchoice == "rock"?false:true;
        }
        showWinner(userwin,compchoice,userchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice);

    });
});
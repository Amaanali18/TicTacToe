//button calls
let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset");
let player = document.querySelector(".player");

//move checker
let i=1;

//reset function 
//function for clicking reset button
reset.addEventListener("click",()=>{
    player.innerText = Math.random() < 0.5 ? "X" : "O";
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
});

// change turms X-O
let turn = Math.random() < 0.5 ? "X" : "O";
player.innerText=turn;

//Win Patterns
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

//function for clicking boxes
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
            if(turn==='O'){
                box.innerText=turn;
                //check for winner
                checkWinner();
                //change turns
                turn='X';
                //change turns
                player.innerText=turn;
            }else{
                box.innerText=turn;
                //check for winner
                checkWinner();
                //change turns
                turn='O';
                //change turns
                player.innerText=turn;
            }
            // disable the box to avoid overwriting it
            box.disabled=true;
});
});

//check Winner
const checkWinner = () => {
    for(let pattern of winPattern){
        let x=boxes[pattern[0]].innerText;
        let y=boxes[pattern[1]].innerText;
        let z=boxes[pattern[2]].innerText;
        if(x!=="" && x===y && y===z && x===z){
            winner(turn);
        }
    }
}

//if winner is declared
const winner=(turn)=>{
    alert('Winner is '+turn);
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};

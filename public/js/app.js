let cells=document.querySelectorAll(".cell");
let player=document.querySelector("#player");
let squares=[];
//*
let turn= "X";
function win() {
    //*
    for (let index = 1; index <10; index++) {
        squares[index]=document.getElementById('square'+ index).innerHTML; 
        
    }
    //* conditions
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        console.log("done");
    }
}
function game(id) {
    let text =document.getElementById(id);
    if (turn === "X" && text.innerHTML =="") {
        text.innerHTML="X";
        turn ="O";
        player.innerHTML ="Turn: O";
    }else if (turn === "O" && text.innerHTML =="") {
        text.innerHTML="O";
        turn ="X";
        player.innerHTML ="Turn: X ";
    }
    win();
}
// const conditions =[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
// ];
// let options=["", "", "", "", "", "", "", "", ""];
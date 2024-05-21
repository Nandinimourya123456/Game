
let boxes = document.querySelectorAll(".box");

let msgg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container")


let resetbtn = document.querySelector(".restart-game");
let newgame=document.querySelector(".New-game");


let true0;
//Multidiametional array 
let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// any problem your game u can use reset button reset button   click and restart the game  !

const resetgame=()=>{
    enabledd();

    // add the hide class add on your html web page it means jo iski property none vo none kr dega again 

    msgcontainer.classList.add("hide");
}



//disabled box not display it means first click the button and after not any reaction in our button 


const disaabled=()=>{
for(let box of boxes)// use a of with for loop for the short syntax 
{
    box.disabled=true;
}}


// enabld game
const enabledd=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
  
    }
}


// axcess all the box in game
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")


        if (true0) {
            box.innerText = "0";
            true0 = false;
        }

        else {
            box.innerText = "x";
            true0 = true;
        }

        box.disabled = true;
        checkwinner();
    });
});
   




// show the winner function 
const showwinner=(winner)=>{
msgg.innerText=`congratulation, winner is ${winner}`;
console.log("apna kaam khud ")
    msgcontainer.classList.remove("hide");
    disaabled();



} 



// check winner function write


const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;

        let pos2 = boxes[pattern[1]].innerText;
     

        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {


                console.log("winner",pos1);
                showwinner(pos1);
            }
        }

    }
};

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

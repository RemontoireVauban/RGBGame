//alert("Connected")
var numSquares = 16;
var colors = generateRandomColors(numSquares) // Color Array

var squares = document.querySelectorAll(".square") //Select CSS class Square 
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        modeButtons[3].classList.remove("selected");
        this.classList.add("selected");
        // this.textContent === "Easy" ? numSquares = 4: numSquares = 16;
        if(this.textContent === "Easy"){
            numSquares = 4;
        }
        else if(this.textContent === "Normal"){
            numSquares = 8;
        }
        else if(this.textContent === "Hard"){
            numSquares = 12;
        }
        else{
            numSquares = 16;
        }
        reset();

    });
}

function reset(){
        //generate new colors
        colors = generateRandomColors(numSquares);
        //choose random from array
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        this.textContent = "Generate Colors";
        
        messageDisplay.textContent = "";
        //change colors
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
            else {
            squares[i].style.display = "none";
            }
        }
        h1.style.background = "coral";
        resetButton.textContent = "Generate Colors";
}




resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //choose random from array
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "Generate Colors";
    
    messageDisplay.textContent = "";
    //change colors
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "coral";
    resetButton.textContent = "Generate Colors";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; // add colors to sqaures

    squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    var failure = ['Try Again', 'Incorrect', 'Not Quite' , 'No'][Math.floor(Math.random() * 4)]

    if(clickedColor  === pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";

    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = failure;
    }
     });
} 


function changeColors(color){
    //loop squares
    for(var i = 0; i < squares.length; i++){
    //change color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var randomNo = Math.floor(Math.random() * colors.length);
   return colors[randomNo];
} //generate a random hex as answer

function generateRandomColors(num){
//array
var arr = []
//add num random colors to array
for(var i = 0; i < num; i++) {
    arr.push(randomColor())
    //get random color and push to array

}
//return
return arr;
}

function randomColor(){
    //pick r 0-255
    var r = Math.floor(Math.random() * 256);
    //pick g 0-255
    var g = Math.floor(Math.random() * 256);
    //pick b 0-255
    var b = Math.floor(Math.random() * 256);


    return "rgb(" + r + ", " + g + ", " + b +")";
}
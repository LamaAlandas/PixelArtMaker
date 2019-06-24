// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//implemented makeGrid function
function makeGrid(event) {

//stabalize the page 
event.preventDefault();

//variables
var height = document.getElementById("inputHeight").value;
var width = document.getElementById("inputWidth").value;
var canvas = document.getElementById("pixelCanvas");

//clean up canvas
canvas.innerHTML= "";

//draw table on canvas
for (var i = 0; i < height; i++){
    var row  = document.createElement("tr");//r for row
    for (var j = 0; j < width; j++){
        var cell = document.createElement("td");//c for cell in a row
        row.appendChild(cell);
    }//end inner loop
    canvas.appendChild(row);
}//end outer loop
}//function end

//Add a function for coloring the canvas
function colorCell (event){
    //if the clicked spot matches a valid node, then color it with the chosen 
    //color by user and update backgroundcolor accordingly
    if (event.target.nodeName == "TD"){
        var colorChoice = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor = colorChoice;
    }//enي if statement
}//end function


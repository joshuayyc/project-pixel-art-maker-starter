// Select color input *
const color = document.querySelector('#colorPicker').value;

// Select size input
const submit = document.querySelector('submit');
const table = document.querySelector('#pixelCanvas');
const form = document.getElementById('sizePicker');
const log = document.getElementById('log');
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;


//This function was used as a test for functionality
// function test(event) {
//     event.preventDefault();
//     log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//     var height = document.getElementById('inputHeight').value;
//     var width = document.getElementById('inputWidth').value;
//     console.log(height+"plus"+width);
//     console.log(event);
//   }


// Function to make the grid based on height and width sizes specified by inputs
// When size is submitted by the user, calls this makeGrid() function
// event.preventDefault() - prevents form from reloading automatically
function makeGrid(event) {
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  event.preventDefault();
  console.log('The submit button was pressed');
  console.log('The color is'+color)
  table.innerHTML = ""; //clears old grid
   for (let i=0; i<height; i++)
     {
     let row = table.insertRow(i);
     for (let j = 0; j < width; j++)
     {
     let cell = row.insertCell(j);
}
}
}


// Function to fill in the table squares based on chosen color
function fillCanvas(event){
let color = document.querySelector('#colorPicker').value;
console.log('you have clicked successfully');
event.target.style.backgroundColor = color;
}


// (1) Event listener for submitting sizes of Grid
// (2) Event Listener for clicking on and filling Canvas squares
form.addEventListener('submit', makeGrid, true);
table.addEventListener('click', fillCanvas);


// Extra code for testing purposes
// form.addEventListener('submit', test, true);

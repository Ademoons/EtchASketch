const etcha = document.getElementById('etcha');
const box = document.getElementById('box');

let gridSize = document.querySelector('#input');

let clean = document.getElementById('reset').addEventListener('click', resetPad);
let erase = document.getElementById('erase').addEventListener('click', erasePad);
let change = document.getElementById('submit').addEventListener('click', changeRows);

/* cool effect just not on this project
box.addEventListener('mousemove', runEvent);

function runEvent(e) {
    
    document.body.style.backgroundColor = "rgba(56, "+e.offsetX+", "+e.offsetY+", 0.2)";
}
*/

function makeRows(rows, columns) {
    etcha.style.setProperty('--grid-rows', rows);
    etcha.style.setProperty('--grid-columns', columns);
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        cell.style.background = "#fefefe";
        cell.addEventListener("mouseenter", cellColor);
        etcha.appendChild(cell).className = "grid-item"; 
    }
}

function changeRows() {
    etcha.innerHTML = "";
    makeRows(gridSize.value, gridSize.value);
}

function resetPad() {
    etcha.innerHTML = "";
    makeRows(16, 16);
}

function erasePad() {
    etcha.innerHTML = "";
    if (gridSize.value == 16) {
        makeRows(16, 16);
    } else {
        changeRows();
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 255);
  }
  
  function cellColor(e) {
    return e.target.style.background = `rgb(${randomNumber()}, 
      ${randomNumber()}, ${randomNumber()}) `;
  }

  makeRows(16, 16);

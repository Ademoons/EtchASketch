const etcha = document.getElementById("etcha");

function makeRows(rows, columns) {
    etcha.style.setProperty('--grid-rows', rows);
    etcha.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        etcha.appendChild(cell).className = "grid-item"; 
    }
}

makeRows(4, 4);

function clean() {
    makeRows(16, 16);
}
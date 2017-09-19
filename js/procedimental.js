generateTable();

function generateTable() {
    let mapa = [
        "**1__111",
        "221__1*1",
        "____1221",
        "11__1*1_",
        "*1__111_",
        "11122211",
        "113**2*1",
        "1*3*3211"];
    let table = document.createElement("table");
    table.border = "1";
    let tablero = document.getElementById("tablero");
 
    for (let i = 0; i < mapa.length; i++) {
        let filas = document.createElement("tr");
        for (let j = 0; j < mapa[i].length; j++) {
            let celda = document.createElement("td");
            if (mapa[i][j] == "*") {
            var imgContent = document.createElement("img");
                imgContent.setAttribute("class", "image");
                imgContent.src = "img/busca.png"
                celda.appendChild(imgContent);
            }
            else if (mapa[i][j] == "_") {
                celda.setAttribute("class", "white");
            }
            filas.appendChild(celda);
            //arrayCelda[i][j] = celda;
        }
        table.appendChild(filas);
    }
    tablero.appendChild(table);
}
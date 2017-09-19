function BuscaMinasTab(map){
    this.map=map;
    this.generate = function(){
        let table = document.createElement("table");
        table.border = "1";
        let tablero = document.getElementById("tablero");
    
        for (let i = 0; i < map.length; i++) {
            let filas = document.createElement("tr");
            for (let j = 0; j < map[i].length; j++) {
                let celda = document.createElement("td");
                celda.setAttribute("class", "back");
                celda.addEventListener("click", function () {
                    if (map[i][j] == "*") {
                        celda.setAttribute("class","bomb");
                        var imgContent = document.createElement("img");
                        imgContent.setAttribute("class", "image");
                        imgContent.src = "img/busca.png"
                        celda.appendChild(imgContent);
                        alert("perdiste");
                    }
                    else if (map[i][j] == "_") {
                        celda.setAttribute("class", "white");
                    }
                    else {
                        h3Valor = document.createElement("h3");
                        h3Valor.setAttribute("class", "numeros");
                        celda.setAttribute("class", "white");
                        content = document.createTextNode(map[i][j]);
                        h3Valor.appendChild(content);
                        celda.appendChild(h3Valor);
                    }
                });
    
                filas.appendChild(celda);
                //arrayCelda[i][j] = celda;
            }
            table.appendChild(filas);
        }
        tablero.appendChild(table);
    }
}

let map = [
    "**1__111",
    "221__1*1",
    "____1221",
    "11__1*1_",
    "*1__111_",
    "11122211",
    "113**2*1",
    "1*3*3211"];
table = new BuscaMinasTab(map);
table.generate();
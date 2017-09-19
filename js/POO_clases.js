class Tablero {
    constructor(map) {
        this.map = map;
    }
    create_map() {
        let table = document.createElement("table");
        table.border = "1";
        let tablero = document.getElementById("tablero");
        for (let i = 0; i < this.map.length; i++) {
            let filas = document.createElement("tr");
            for (let j = 0; j < this.map[i].length; j++) {
                let celda = document.createElement("td");
                celda.setAttribute("class", "back");
                celda.setAttribute("id", i + "" + j);
                celda.addEventListener("click", this.showNumber, true);
                filas.appendChild(celda);
            }
            table.appendChild(filas);
        }
        tablero.appendChild(table);
    }
    showNumber(e){
        let id = this.id.split("");
        let myid = id[0] + id[1];
        let tdObjt = document.getElementById(myid);
        //minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] 
        if (this.map[parseInt(id[0], 10)][parseInt(id[1], 10)] == "_") {
            tdObjt.setAttribute("class", "white");
        }
        else if (this.map[parseInt(id[0], 10)][parseInt(id[1], 10)] == "*") {
            tdObjt.setAttribute("class", "bomb");
            alert("perdiste");
            showBombs();

        }
        else {
            h3Valor = document.createElement("h3");
            h3Valor.setAttribute("class", "numeros");
            tdObjt.setAttribute("class", "white");
            content = document.createTextNode(this.map[parseInt(id[0], 10)][parseInt(id[1], 10)]);
            h3Valor.appendChild(content);
            tdObjt.appendChild(h3Valor);
        }
    }
    showBombs() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let myid = i + "" + j;
                let tdObjt = document.getElementById(myid);
                if (this.map[i][j] == "*") {

                    // tdObjt.style.backgroundImage = "url(img/busca.png)";
                    let imgContent = document.createElement("img");
                    imgContent.setAttribute("class", "image");
                    imgContent.src = "img/busca.png"
                    tdObjt.appendChild(imgContent);
                }
            }
        }
    }
}

let mapBuscaminas = [
    "**1__111",
    "221__1*1",
    "____1221",
    "11__1*1_",
    "*1__111_",
    "11122211",
    "113**2*1",
    "1*3*3211"];

let tableBuscaMinas = new Tablero(mapBuscaminas);
tableBuscaMinas.create_map();
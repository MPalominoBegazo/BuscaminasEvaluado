"use strict";
let BuscaMinasTab = {
    map:undefined,
    generate: function(){
        BuscaMinasTab.map = [
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
        for (let i = 0; i < BuscaMinasTab.map.length; i++) {
            let filas = document.createElement("tr");
            for (let j = 0; j < BuscaMinasTab.map[i].length; j++) {
                let celda = document.createElement("td");
                celda.setAttribute("class", "back");
                celda.setAttribute("id", i + "" + j);
                celda.addEventListener("click", BuscaMinasTab.showNumber, true);
                filas.appendChild(celda);
    
            }
            table.appendChild(filas);
        }
    
        tablero.appendChild(table);
    },
    showNumber: function(e){
        let id = this.id.split("");				
        let myid = id[0] + id[1];			
        tdObjt = document.getElementById(myid);
        //minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] 
        if (BuscaMinasTab.map[parseInt(id[0],10)][parseInt(id[1],10)] == "_") {
            tdObjt.setAttribute("class", "white");
        }
        else if (BuscaMinasTab.map[parseInt(id[0],10)][parseInt(id[1],10)] == "*") {
            tdObjt.setAttribute("class", "bomb");
            alert("perdiste");
            BuscaMinasTab.showBombs();
            
        }
        else{
            h3Valor = document.createElement("h3");
            h3Valor.setAttribute("class", "numeros");
            tdObjt.setAttribute("class", "white");
            content = document.createTextNode(BuscaMinasTab.map[parseInt(id[0],10)][parseInt(id[1],10)]);
            h3Valor.appendChild(content);
            tdObjt.appendChild(h3Valor);
        }
    },
    showBombs: function(){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){	
                let myid = i+""+j;
                let tdObjt = document.getElementById(myid);	           
               if(BuscaMinasTab.map[i][j] == "*"){			        	
                   
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

BuscaMinasTab.generate();
"use strict"
console.log("table.js called");

class Table{
    constructor(){
    }

    getTableElement(pieces){

        let elementTable = document.createElement('table');
        for ( let i = 0 ; i < pieces.length; i++ ){
            let elementRow = document.createElement('tr');
            for (let j = 0 ; j < pieces[i].length ; j++){
                let elementPiece = document.createElement('th');
                elementPiece.append(pieces[i][j]);
                elementRow.append(elementPiece);
                console.log(elementPiece);
            }
            elementTable.append(elementRow);
        }
        return elementTable;
    }
}
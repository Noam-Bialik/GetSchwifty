"use strict"

class Game{
    constructor(){
        this.table;
    }

    newGame(size){
        let table = [];
        let counter = 1;
        for (let i = 0 ; i < size ; i++){
            table.push([]);
            for (let j = 0 ; j < size ; j++){
                table[i].push()
            }
        }
        table[size-1][size-1] = 0 ;
        this.table = table;
    }
    setGame(table){
        this.table
    }
}
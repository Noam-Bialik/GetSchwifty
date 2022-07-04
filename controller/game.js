"use strict"

class Game{

    constructor(){
        this.table;
        this.zeroIndexes = { row:0, column:0 };
    }

    newGame(size){    
        let table = [];
        let counter = 0;
        for (let i = 0 ; i < size ; i++){
            table.push([]);
            for (let j = 0 ; j < size ; j++){
                table[i].push(++counter);
            }
        }
        table[size-1][size-1] = 0 ;
        this.zeroIndexes.row = size-1;
        this.zeroIndexes.column = size-1;
        this.table = table;
        console.log("Game: newGame: \n" + this.table);
        return this.table;
    }

    setGame(table){
        this.table = table;
        return this.table;
    }

    swipeLeft(){
        console.log("swipe right");
        if(this.zeroIndexes.column < this.table.length-1){
            this.swap(this.zeroIndexes.row, this.zeroIndexes.column+1, this.zeroIndexes.row, this.zeroIndexes.column)
            this.zeroIndexes.column = this.zeroIndexes.column+1;
        }
        else{
            console.log("cannot swipe Right")
        }
        return this.table;
    }
    swipeRight(){
        console.log("swipe left");
        if(this.zeroIndexes.column > 0){
            this.swap(this.zeroIndexes.row, this.zeroIndexes.column-1, this.zeroIndexes.row, this.zeroIndexes.column)
            this.zeroIndexes.column = this.zeroIndexes.column-1;
        }
        else{
            console.log("cannot swipe left")
        }
        return this.table;
    }
    swipeUp(){
        console.log("swipe down");
        if(this.zeroIndexes.row < this.table.length-1){
            this.swap(this.zeroIndexes.row+1, this.zeroIndexes.column, this.zeroIndexes.row, this.zeroIndexes.column)
            this.zeroIndexes.row = this.zeroIndexes.row+1;
        }
        else{
            console.log("cannot swipe Down")
        }
        return this.table;
    }
    swipeDown(){
        console.log("swipe up");
        if(this.zeroIndexes.row > 0){
            this.swap(this.zeroIndexes.row-1, this.zeroIndexes.column, this.zeroIndexes.row, this.zeroIndexes.column)
            this.zeroIndexes.row = this.zeroIndexes.row-1;
        }
        else{
            console.log("cannot swipe Up")
        }
        return this.table;
    }

    swap(xRow, xColumn, yRow, yColumn){
        console.log("swap ("+xRow+","+xColumn+") with ("+yRow+","+yColumn+")");
        let temp = this.table[xRow][xColumn];
        this.table[xRow][xColumn] = this.table[yRow][yColumn];
        this.table[yRow][yColumn] = temp;
    }
  
}
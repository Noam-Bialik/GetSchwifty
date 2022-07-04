"use strict"

class Game{
    constructor(){
        this.table;
        this.zeroIndexes;
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
        this.zeroIndexes = [size-1, size-1];
        this.table = table;
        console.log("Game: newGame: \n" + this.table);
        return this.table;
    }

    setGame(table){
        this.table = table;
        return this.table;
    }

    swipeLeft(){
        console.log("swipe left");
        if(this.zeroIndexes[1] > 0){
            this.swap(this.zeroIndexes[0], this.zeroIndexes[1]-1, this.zeroIndexes[0], this.zeroIndexes[1])
            this.zeroIndexes = [ this.zeroIndexes[0], this.zeroIndexes[1]-1];
        }
        else{
            console.log("cannot swipe left")
        }
        return this.table;
    }
    swipeRight(){
        console.log("swipe right");
        if(this.zeroIndexes[1] < this.table.length-1){
            this.swap(this.zeroIndexes[0], this.zeroIndexes[1]+1, this.zeroIndexes[0], this.zeroIndexes[1])
            this.zeroIndexes = [ this.zeroIndexes[0], this.zeroIndexes[1]+1];
        }
        else{
            console.log("cannot swipe Right")
        }
        return this.table;
    }
    swipeUp(){
        console.log("swipe up");
        if(this.zeroIndexes[0] > 0){
            this.swap(this.zeroIndexes[0]-1, this.zeroIndexes[1], this.zeroIndexes[0], this.zeroIndexes[1])
            this.zeroIndexes = [ this.zeroIndexes[0]-1, this.zeroIndexes[1]];
        }
        else{
            console.log("cannot swipe Up")
        }
        return this.table;
    }
    swipeDown(){
        console.log("swipe down");
        if(this.zeroIndexes[0] < this.table.length-1){
            this.swap(this.zeroIndexes[0]+1, this.zeroIndexes[1], this.zeroIndexes[0], this.zeroIndexes[1])
            this.zeroIndexes = [ this.zeroIndexes[0]+1, this.zeroIndexes[1]];
        }
        else{
            console.log("cannot swipe Down")
        }
        return this.table;
    }

    swap(xRow, xColumn, yRow, yColumn){
        console.log("("+xRow+","+xColumn+") ("+yRow+","+yColumn+")");
        let temp = this.table[xRow][xColumn];
        console.log(this.table);
        console.log("temp -" +temp);
        this.table[xRow][xColumn] = this.table[yRow][yColumn];
        this.table[yRow][yColumn] = temp;
    }

    
}
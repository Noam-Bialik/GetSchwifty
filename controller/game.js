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
  
    shuffle(){
        this.swapRandomly(this.table.length*this.table.length);
    }

    swapRandomly(times){
        let from = { x : 0 , y : 0 };
        let to = { x : 0 , y : 0 }; 
        for(let i = 0 ; i < times ; i++){
            from.x = this.getRandomUpTo(this.table.length);
            from.y = this.getRandomUpTo(this.table.length);
            to.x = this.getRandomUpTo(this.table.length);
            to.y = this.getRandomUpTo(this.table.length);
            if(this.table[from.x][from.y] != 0 && this.table[to.x][to.y] != 0){
                this.swap( from.x, from.y, to.x, to.y );
            }
        }
    }

    getRandomUpTo(number){
        return Math.floor(Math.random()*10*number)%number;
    }
  
}
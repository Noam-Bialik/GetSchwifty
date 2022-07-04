"use strict"

console.log("controller.js called");

class Controller{

    constructor(view, model, game){
        this.view = view;
        this.model = model;
        this.game = game;
        this.start();
        }

    start(){
        this.view.bindButton(this.startGame);
        this.view.setOnArrowRight(this.swipeRight);
        this.view.setOnArrowLeft(this.swipeLeft);
        this.view.setOnArrowUp(this.swipeUp);
        this.view.setOnArrowDown(this.swipeDown);
    }

    startGame = (tableSize) => {
        this.table = this.game.newGame(tableSize);
        this.view.showTable(this.table);
    }
    
    swipeLeft = () => {
        this.table = this.game.swipeLeft();
        this.view.showTable(this.table);
    }

    swipeRight = () => {
        this.table = this.game.swipeRight();
        this.view.showTable(this.table);
    }
    
    swipeUp = () => {
        this.table = this.game.swipeUp();
        this.view.showTable(this.table);
    }
    
    swipeDown = () => {
        this.table = this.game.swipeDown();
        this.view.showTable(this.table);
    }
    
}
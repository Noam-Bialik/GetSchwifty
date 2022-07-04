"use strict"
console.log("controller.js called");

class Controller{
    constructor(view, model){
        this.view = view;
        this.model = model;
        this.starter();
        }

    starter(){
        let a = [[1,2,3],[4,5,6],[7,8,9]]
        this.view.showTable(a);
        this.view.setOnArrowRight(this.swipeRight);
        this.view.setOnArrowLeft(this.swipeLeft);
        this.view.setOnArrowUp(this.swipeUp);
        this.view.setOnArrowDown(this.swipeDown);
    }

    swipeLeft(){
        console.log("swipe left");
    }
    swipeRight(){
        console.log("swipe right");
    }
    swipeUp(){
        console.log("swipe up");
    }
    swipeDown(){
        console.log("swipe down");
    }
    
}
"use strict"
console.log("controller.js called");

class Controller{
    constructor(view, model){
        this.view = view;
        this.model = model;
        let a = [[1,2,3],[4,5,6],[7,8,9]]
        this.view.showTable(a);
    }
}
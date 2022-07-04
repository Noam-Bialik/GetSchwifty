"use strict"
console.log("bootstreper.js called");

class Bootstreper{
    constructor(){
        this.view = new ViewBootstraper();
        this.model = null;
        this.controller = new Controller(this.view, this.model);
    }
}

let bootstreper = new Bootstreper();
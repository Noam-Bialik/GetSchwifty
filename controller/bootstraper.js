"use strict"
console.log("bootstreper.js called");

class Bootstreper{
    constructor(){
        this.view = new ViewBootstraper();
        this.model = null;
        let game = new Game();
        this.controller = new Controller(this.view, this.model, game);
    }
}

let bootstreper = new Bootstreper();
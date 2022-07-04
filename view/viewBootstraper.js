"use strict"

console.log("viewBootstraper called");

class ViewBootstraper{

    constructor(){
        this.keiesInput = new KeiesInput(document);
        this.table = new Table();
        this.view = new View(this.table, this.keiesInput);
        return this.view;
    }
    
}
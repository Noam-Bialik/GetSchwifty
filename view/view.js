"use strict"

console.log("view.js called");

class View{
    constructor(table, keiesInput){
        this.table = table;
        this.keiesInput = keiesInput;
        this.root = this.getElement("#root");
     
    }

    showTable(pieces){
        this.root.append(this.table.getTableElement(pieces));
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
      }
    
    setOnArrowRight(handler){
        this.keiesInput.setOnKeyDown(39,handler);
    }
    setOnArrowLeft(handler){
        this.keiesInput.setOnKeyDown(37,handler);
    }
    setOnArrowUp(handler){
        this.keiesInput.setOnKeyDown(38,handler);
    }
    setOnArrowDown(handler){
        this.keiesInput.setOnKeyDown(40,handler);
    }


}
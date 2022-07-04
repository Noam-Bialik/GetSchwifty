"use strict"

console.log("view.js called");

class View{
    constructor(table, keiesInput){
        this.table = table;
        this.keiesInput = keiesInput;
        this.tableContainer = this.getElement("#table_container");
       
        this.root = this.getElement('#root');
        this.form = this.createElement('form');
        this.tableSize = this.createElement('input');
        this.tableSize.setAttribute('type', 'number');
        this.submitButton = this.createElement('button');
        this.submitButton.textContent = 'start';
        this.form.append(this.tableSize,  this.submitButton);
        this.root.append(this.form);
    }

    showTable(pieces){
        this.tableContainer.innerHTML = '';
        this.tableContainer.append(this.table.getTableElement(pieces));
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

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className){
             element.classList.add(className);
            }
        return element
    }
    
    bindButton(handler){
        this.form.addEventListener('submit', event =>{
            this.submitButton.textContent = 'restart';
            console.log("bottun clicked");
            event.preventDefault();
            handler(this.tableSize.value);
      });
    }
    
     
    


}
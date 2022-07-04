"use strict"

console.log("keiesInput called");

class KeiesInput{
    constructor(element){
        this.element = element;
        this.handlers = {}
    }

    setOnKeyDown(key, handler){
        this.handlers.key = handler;
        this.element.addEventListener('keydown', (e) => this.handlers[e.key]())
    }
}


"use strict"

console.log("keiesInput called");

class KeiesInput{
    constructor(element){
        this.element = element;
        this.handlers = {}
        this.setOnKeiesDown();
    }
    
    setOnKeiesDown(){
        document.onkeydown = (e) => {
            e = e || window.event;
            try{
            this.handlers[e.which]();
            }
            catch(error){
                console.log("onkeydown: not support");
            }
        }
    }

    setOnKeyDown(key, handler){
        console.log(key + " : " + handler);
        this.handlers[key] = handler;
        console.log(this.handlers);
    }
}


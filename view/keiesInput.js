"use strict"

console.log("keiesInput called");

class KeiesInput{
    
    constructor(element){
        this.element = element;
        this.handlers = {};
        this.setOnKeiesDown();
    }
    
    setOnKeiesDown(){
        document.onkeydown = (e) => {
            e = e || window.event;
            try{
            this.handlers[e.which]();
            }
            catch(error){
                console.log(error);
                console.log("onkeydown: not support");
            }
        }
    }

    setOnKeyDown(key, handler){
        console.log("setOnKeyDown : handlers : \n" + key + " : " + handler);
        this.handlers[key] = handler;
        console.log("setOnKeyDown : handlers : \n" + this.handlers);
    }
}


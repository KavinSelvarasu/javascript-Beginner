class Calculator{

    constructor(prevOper, currentOper){
        this.prevOper = prevOper;
        this.currentOper = currentOper;
        this.clear();
    }

    clear(){
        this.previousElement = '';
        this.currentElement = '';
        this.operation = undefined;
    }

    delete(){
        this.currentElement = this.currentElement.toString().slice(0,-1);
    }

    chooseOperation(operation){
        if(this.currentElement === '')return
        if(this.previousElement !== ''){
            this.equal();
        }
        this.operation = operation;
        this.previousElement = this.currentElement;
        this.currentElement = "";
        
    }
        
    equal(){

        var output;
        const prev = parseFloat(this.previousElement);
        const current = parseFloat(this.currentElement);
        if(isNaN(prev) || isNaN(current))return
        switch(this.operation){

            case '+':
                output = prev + current;
                break
            case '-':
                output = prev - current;
                break
            case '/':
                output = prev / current;
                break
            case '*':
                output = prev * current;
                break
            default:
                return
        }
        this.currentElement = output;
        this.operation = undefined;
        this.previousElement = '';
        
    }
    appendNumber(number){
        if(number === "." && this.currentElement.includes('.'))return
        this.currentElement = this.currentElement+number;  
    }
    updateDisplay(){

        this.currentOper.innerText = this.currentElement;
        if(this.operation != null){
        this.prevOper.innerText = 
            `${this.previousElement}${this.operation}`;}

    
}
//TODO: add float and letter styling in calculator
}
// non-modifible const variables

const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalToButton = document.querySelector('[data-equal]');
const prevOper = document.querySelector('[data-previous]');
const currentOper = document.querySelector('[data-current]');

const calculator = new Calculator(prevOper, currentOper);

// number button process

numberButton.forEach(button => {

    button.addEventListener('click',()=>{

        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        
    });

});


operationButton.forEach(button => {

    button.addEventListener('click',()=>{

        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
        
    });

});

equalToButton.addEventListener('click', ()=>{
    calculator.equal();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateDisplay();
}); //TODO: verify the all clear for this.previousEelement

deleteButton.addEventListener('click',()=>{

    calculator.delete();
    calculator.updateDisplay();
    
});

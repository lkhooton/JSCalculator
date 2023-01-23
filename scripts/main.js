//store the output
class Calculator {
  constructor(previousText, currentText) {
    this.previousText = previousText;
    this.currentText = currentText;
    this.clear();
  }
};

clear() {
  this.currentOperand = ''
  this.previousOperand = ''
  this.operation = undefined
}

delete() {

}

appendNumber(number){

}

chooseOperation(operation){

}

compute(){

}

updateDisplay(){
  this.currentText.innerText = this.currentOperand

}


const numberButtons = document.querySelectorAll('[data-number');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const previousText = document.querySelector('[data-previous]');
const currentText = document.querySelector('[data-current]');

const calculator = new Calculator (previousText, currentText);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
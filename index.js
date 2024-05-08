class Calculator{
    constructor(output){
        this.output = output
        this.clear()
    }
    appendNumber(number){
        if(number === '.' && this.currentoperand.includes('.'))return;
        this.currentoperand = this.currentoperand.toString() + number.toString()
    }
    Operation(operator){
       
        if(this.previousoperand !== ""){
            this.Calculate()
            this.UpdateDisplay()
        };
        if(this.currentoperand==='')return
         this.operation = operator
        this.previousoperand = this.currentoperand
        this.currentoperand = ''
    }
    clear(){
        this.currentoperand = ""
        this.previousoperand = ""
        this.operation = undefined

    }
    Delete(){
        this.currentoperand = this.currentoperand.toString().slice(0,-1)
    }
    Percent(){
        this.currentoperand = parseFloat(this.currentoperand) / 100
    }
    UpdateDisplay(){
        this.output.value = this.currentoperand
    }
    Calculate(){
        let result;
        const prev = parseFloat(this.previousoperand)
        const curr = parseFloat(this.currentoperand)
        if(isNaN(prev) || isNaN(curr)) return
        switch(this.operation){
            case '+' :
                result = prev + curr
                break
            case '-' :
                result = prev - curr
                break
            case 'x' :
                result = prev * curr
                break
            case '/':
                result = prev / curr 
                break
            
            default :
               return
        }
        this.currentoperand = result
        this.previousoperand = ''
        this.operation = undefined
    }

}

const number = document.querySelectorAll('.operand');
const Operator = document.querySelectorAll('.operator');
const output = document.querySelector('.output')
const Equalto = document.querySelector('.Equalto')
const ClearBtn = document.querySelector('.clear')
const DelBtn = document.querySelector('.del')
const Percentage = document.querySelector('.per')
console.log(output.value)

const calculator = new Calculator(output)
console.log(ClearBtn)


number.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.UpdateDisplay()
        console.log(output.value)
    })
})

Operator.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.Operation(button.innerText)
    })
})

Equalto.addEventListener('click',()=>{
    calculator.Calculate()
    calculator.UpdateDisplay()
})

ClearBtn.addEventListener('click',()=>{
    calculator.clear()
    calculator.UpdateDisplay()
})

DelBtn.addEventListener('click',()=>{
    calculator.Delete()
    calculator.UpdateDisplay()
})

Percentage.addEventListener('click',()=>{
    calculator.Percent()
    calculator.UpdateDisplay()
})


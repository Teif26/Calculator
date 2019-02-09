var backspaceBtn = document.getElementById("backspace");
var equalsBtn = document.getElementById("equals");
var decimalBtn = document.getElementById("decimal");
var clearBtn = document.getElementById("clear");
var operatorBtns = document.querySelectorAll(".operatorBtn");
var displayValEl = document.getElementById('display');
var calcNumBtns = document.getElementsByClassName("numBtn");
//variables to store operands and operators
var displayVal = "0";
var finalVal = "";
var operator = "";
var num1 ;
var num2 ;
// update display when user clicks number
 var updateDisplay = (clkObj)=> {
   var  btnText = clkObj.target.innerText;
   var shouldResetCalc = (operator === "" && finalVal !== 0);
  
  displayVal = (displayVal === "0" || shouldResetCalc)
    ? btnText 
    : displayVal + btnText;

  if (shouldResetCalc)
    finalVal = 0;
  displayValEl.innerText = displayVal;
 }
  //add event listeners to each num button,setting the click functon to update screen
 for(let i=0;i<calcNumBtns.length;i++){
     calcNumBtns[i].addEventListener("click",updateDisplay,false);
  }
  // capturing the first number and operator when the operator btns are clicked
  var operator1 = (clkObj)=>{
      var sign = clkObj.target.innerText;
      num1 = parseFloat(displayVal);
      switch(sign){
       case "+": 
       operator = "+"     
      break;
      case "-": 
      operator = "-"
      break;
      case "÷": 
      operator = "÷"
      break;
      case "x": 
      operator = "x"
      break;
      default:
      break;
    };
    clearDisplay()
    if(finalVal === 0 && num1 !== 0)
    finalVal = num1;
}
function clearDisplay() {
    displayVal = "0";
    displayValEl.innerText = displayVal;
};
//adding event listener to the operator btns, setting click to update num1 and operator variables
for(let i=0;i<operatorBtns.length;i++){
      operatorBtns[i].addEventListener("click", operator1,false);
  }
  //adding decimal functionality, checking to see if one is present already.
 decimalBtn.onclick = ()=>{
  if(!displayVal.includes("."))
  displayVal += "."
  displayValEl.innerText = displayVal;
 }
 //capturing the second value and performing the operation
 equalsBtn.onclick = ()=>{
     num2 = parseFloat(displayVal);
      switch (operator){
          case '+':
          finalVal += num2;
          break;
          case '-':
          finalVal -= num2;
          break;
          case 'x':
          finalVal *= num2;
          break;
          //nesting switches to check for division by zero.
          case '÷':
            switch (true){
             case num2 === 0:
            alert("Cant Devide by Zero")
            break;}             
          finalVal /= num2 ;        
          break;
             default :
          break;   
        }
        displayValEl.innerText = finalVal; 
        num1 = num2;
        operator = "";
    }
 clearBtn.onclick = ()=>{
    operator = "";
    clearValues();
    clearDisplay();
 }
 function clearValues() {
    num1 = 0;
    num2 = 0;
    finalVal = 0;
  }
 backspaceBtn.onclick = ()=>{
    let lengthOfDisplay = displayVal.length;
    displayVal = displayVal.slice(0,lengthOfDisplay - 1)

    var shouldResetCalc = (operator === "" && finalVal !== 0);
  
    if (displayVal === "")
      displayVal = "0";
  
    if (shouldResetCalc)
      finalVal = 0;
      
    displayValEl.innerText = displayVal;
}

  
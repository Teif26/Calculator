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
   if(displayVal === "0")
    displayVal = "";

    displayVal += btnText;
    displayValEl.innerText = displayVal;
 }
  //add event listeners to each num button,setting the click functon to update screen
 for(let i=0;i<calcNumBtns.length;i++){
     calcNumBtns[i].addEventListener("click",updateDisplay,false);
  }
  // capturing the first number and operator when the operator btns are clicked
  var operator1 = (clkObj)=>{
      var sign = clkObj.target.innerText;
      switch(sign){
       case "+": 
       operator = "+"
       num1 = parseFloat(displayVal)
         displayVal = "0";
         displayValEl.innerText = displayVal
      break;
      case "-": 
      operator = "-"
      num1 = parseFloat(displayVal)
        displayVal = "0";
        displayValEl.innerText = displayVal
      break;
      case "÷": 
      operator = "÷"
      num1 = parseFloat(displayVal)
        displayVal = "0";
        displayValEl.innerText = displayVal
      break;
      case "x": 
      operator = "x"
      num1 = parseFloat(displayVal)
        displayVal = "0";
        displayValEl.innerText = displayVal
      break;
      default:
      break;
    };
}
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
          finalVal = num1 + num2;
          displayValEl.innerText = finalVal;
          break;
          case '-':
          finalVal = num1 - num2;
          displayValEl.innerText = finalVal;
          break;
          case 'x':
          finalVal = num1 * num2;
          displayValEl.innerText = finalVal;
          break;
          //nesting switches to check for division by zero.
          case '÷':
              switch (true){
                  case num1 === 0 || num2 === 0:
                  alert("Cant devide by Zero")
                   break;}             
          finalVal = num1 / num2 ;
          displayValEl.innerText = finalVal; 
          
          break;
          default :
          break;

      
        }
        num1 = displayVal;
        num2 = 0;
       // operator = "";
    }

 clearBtn.onclick = ()=>{
  displayVal = "0";
  operator = "";
  num1 = 0
  num2 = 0
  displayValEl.innerText = displayVal;

 }
backspaceBtn.onclick = ()=>{
    let lengthOfDisplay = displayVal.length;
    displayVal = displayVal.slice(0,lengthOfDisplay - 1)

    if(displayVal === "")
    displayVal = "0";

    displayValEl.innerText = displayVal;
}

  
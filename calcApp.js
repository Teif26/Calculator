var decimalBtn = document.getElementById("decimal");
var clearBtn = document.getElementById("clear");
var operatorBtns = document.querySelectorAll(".operatorBtn");
var displayValEl = document.getElementById('display')
var calcNumBtns = document.getElementsByClassName("numBtn");

var displayVal = "0"
var pendingVal = "";
var evalArray = [];


  var updateDisplay = (clkObj) =>{
   btnVal = clkObj.target.innerText;
    
   if(displayVal === "0")
     displayVal = "";

     displayVal += btnVal;
     displayValEl.innerText = displayVal;
    
  }



for(let i=0;i<calcNumBtns.length;i++){
    calcNumBtns[i].addEventListener("click", updateDisplay, false);
}


var performOperation = (clkObj) => {
     operator = clkObj.target.innerText;
     switch(operator){
         case "+": 
         pendingVal = displayVal
         displayVal = "0"
         displayValEl.innerText = displayVal;   
         evalArray.push(pendingVal);
         evalArray.push("+");
         break;
         case "-": 
         pendingVal = displayVal
         displayVal = "0"
         displayValEl.innerText = displayVal;   
         evalArray.push(pendingVal);
         evalArray.push("-");
         break;
         case "x": 
         pendingVal = displayVal
         displayVal = "0"
         displayValEl.innerText = displayVal;   
         evalArray.push(pendingVal);
         evalArray.push("*");
         break;
         case "÷": 
         pendingVal = displayVal
         displayVal = "0"
         displayValEl.innerText = displayVal;   
         evalArray.push(pendingVal);
         evalArray.push("/");
         break;
         case "=":
         evalArray.push(displayVal)
         var evaluation = eval(evalArray.join(" "))
         displayVal = evaluation + '';
         displayValEl.innerText = displayVal;
         console.log(evaluation)
         evalArray = [];
         default:
          break;
         
         
        };
    };

 for (let i =0; i <operatorBtns.length;i++){
          operatorBtns[i].addEventListener("click", performOperation,false)
      };
 
clearBtn.onclick = ()=>{
  displayVal = "0"
  pendingVal ; 
  displayValEl.innerText = displayVal;
}
decimalBtn.onclick = ()=>{
    if(!displayVal.includes("."))
        displayVal += ".";
        displayValEl.innerText = displayVal ;
}
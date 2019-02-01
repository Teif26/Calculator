var numBtn = document.getElementsByClassName("calc-button");

for (var i=0; i<numBtn.length; i++){           
  numBtn[i].addEventListener("mouseover", function(){
    mOverDiv(this)
   });           
  numBtn[i].addEventListener("mouseout", function(){
    mOutDiv(this)
   });
}

function mOverDiv(e) {                
    e.style["z-index"]="3";                
}

function mOutDiv(e) {                
    e.style.background="1";                
}



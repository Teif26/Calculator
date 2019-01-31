var btnNum = document.querySelectorAll(".calc-button")
btnNum = Array.from(btnNum);

// btnNum.forEach((el)=>{
//     el.addEventListener("mouseover", addNewNumbers)
// })
// function addNewNumbers(){
//     btnNum.forEach((el)=>{
//      el.target.style.
//     })
// }
btnNum[1].addEventListener("mouseover", (el)=>{
  el.target.style.background = blue;
})
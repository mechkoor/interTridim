var navLinks=document.getElementById("navLinks");


function showMenu(){
  navLinks.style.right="0";
}

function hideMenu(){
  navLinks.style.right="-200px";
}

let div=document.querySelector(".galery");
let back=document.getElementById("back");
let next=document.getElementById("next");

back.addEventListener("click",()=>{
  div.style.scrollBehavior="smooth";
  div.scrollLeft +=250;
  
})

next.addEventListener("click",()=>{
  div.style.scrollBehavior="smooth";
  div.scrollLeft -=250;
  
})
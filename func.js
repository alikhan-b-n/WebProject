$(document).ready(function(){

});

$(function(){

  var btn = document.querySelector(".btn-adapt");
  var wholeMenu = document.querySelector(".wholeMenu")

  btn.addEventListener("click",function(){

  const visibility = wholeMenu.getAttribute("data-visible")

  if(visibility==="false"){
    wholeMenu.setAttribute("data-visible", true)
  }
  else{
    wholeMenu.setAttribute("data-visible", false)
  }
})

});

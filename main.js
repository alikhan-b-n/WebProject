$(document).ready(function(){

});

$(function(){

var menuTimeout;

$("#dropdownMenuButton").hover(function()
{
    menuTimeout = setTimeout(showMenu, 1000);
}, hideMenu).click(function(){
  showMenu();
});

function showMenu()
{
    var menu = $("#dropdownMenu");
    menu.show();
    menu.appendTo($("#dropdownMenuButton"));
}

function hideMenu()
{
    clearTimeout(menuTimeout);
    $("#dropdownMenu").hide();
}


});

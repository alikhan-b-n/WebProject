function fn()
{
var audio = new Audio('assets/bystro-palcem-dollary.mp3');
audio.play();
    if (rd1.checked==true)
        alert("Thank you for buying our: "+rd1.value);
    else if (rd2.checked==true)
        alert("Thank you for buying our: "+rd2.value);
    else if (rd3.checked==true)
        alert("Thank you for buying our: "+rd3.value);
    else if (rd4.checked==true)
        alert("Thank you for buying our: "+rd4.value);
    else
        alert("Nothing selected");

}

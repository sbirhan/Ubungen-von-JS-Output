function myFunction(){
    document.getElementById("greeting").style.color = "red";
    document.getElementById("greeting").innerHTML = Date(Date.now()).toString();
  }

function changeText() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("test2").innerHTML = userInput;
}

document.write("<h1>Hello World!</h1>");
document.write("<p>Have a nice day!</p>");

mytext = "Hello again!";
document.write(mytext);

name = "Süleyman Salih";
nachname = "Birhan";

document.write("<br><br>");
document.write("Name : " + name);
document.write("<br>");
document.write("Nachname : " + nachname);

window.alert("Hallo Welt");
window.prompt("Bitte Ihren Namen eingeben");
window.prompt("Bitte Ihren Namen eingeben", "Michal");
window.confirm("Stimmen Sie meiner Meinung zu?");

var alter = prompt( "Gib mir bitte dein Alter:" );
console.log(alter);

var b = 5;
var a = b * 5 - 3;
alert(a);

mann = "Robert Wadlow der größte Mann der Welt : ";
grosse = "2,72m";
alert(mann + grosse);

visiter_name = prompt("Schreibe dein Name : ");
if (visiter_name != null && visiter_name != ""){
  alert("Dain Name is : " + visiter_name);
}
else {
  alert("Leerer Name...!");
}

message = "Drücken Sie Ok, um weiterzumachen.";
x = confirm(message);
if (x == true) {
  alert("Du hast auf den Ok-Button geklickt.");
} 
else {
  alert("Sie haben auf die Taste Cancel geklickt.");
}

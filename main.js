function funkcija1()
{
let x='Poslano!';
  
document.getElementById("nez").innHTML = x;
}

function funkcija2() {
  var txt = "";
  if (document.getElementById("id2").validity.true) {
    txt = "Bravo";
  } 
  document.getElementById("demo").innerHTML =txt;
}
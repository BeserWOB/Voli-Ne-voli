function getLength() {
  var element = document.getElementById('input');
  var length = element.value.length;

if (length %2){
document.getElementById("rezultat").innerHTML ="Ne voli.";
} else if (length === 0){
  document.getElementById("rezultat").innerHTML ="Molim, upisite ime simpatije.";
} else {
  document.getElementById("rezultat").innerHTML ="Voli.";

}

}

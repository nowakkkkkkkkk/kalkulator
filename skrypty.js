function dodajNaEkran(liczba)
{
//var naEkranie = document.getElementById("display").innerText;
//var wstawNaEkran = naEkranie + liczba;
document.getElementById("display").innerText += liczba;
}
function oblicz()
{
	var dzialanie = document.getElementById("display").innerText;
	var wynikDzialania = eval(dzialanie)
	document.getElementById("display").innerText = wynikDzialania;
}
function czysc() {
	document.getElementById("display").innerText = "";
}
/*function inneDzialanie() {
	var pierwiastek = Math.sqrt(16);
	document.getElementById("display").innerText = pierwiastek;
}*/
function dodajRamke() {
document.getElementById("calosc").style.backgroundColor="yellow";
}
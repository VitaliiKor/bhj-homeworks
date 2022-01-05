let clickerCounter = document.getElementById("clicker__counter");
let clickNumber = Number(clicker__counter.textContent);
document.getElementById("clicker__counter").innerHTML = clickNumber;
cookie.onclick = function () {
	clickNumber = clickNumber + 1; 
	document.getElementById("clicker__counter").innerHTML = clickNumber;
	cookie.width = 100;
	cookie.height = 100;
}
/*cookie.mouseup = function () {
	cookie.width = 200;
	cookie.height = 127;
}*/
//setInterval('counter()', 1000)
/*setTimeout('alert ("Вы победили в конкурсе!")', (clickNumber+1)*1000);*/
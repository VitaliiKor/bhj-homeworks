// Этот код не работает.
//Надо правильно сделать счётчик кликов.
let clickerCounter = document.getElementById("clicker__counter");
let clickNumber = Number(clicker__counter.textContent);
document.getElementById("clicker__counter").innerHTML = clickNumber;
cookie.onmousedown = function () {
	clickNumber = clickNumber + 1; 
	document.getElementById("clicker__counter").innerHTML = clickNumber;
	if (clickNumber%2 !== 0){
		cookie.width = 100;
		cookie.height = 64;
	}  else {
		cookie.width = 200;
		cookie.height = 127;	
	}
}

/*
let clickerCounter = document.getElementById("clicker__counter");
let clickNumber = Number(clicker__counter.textContent);
document.getElementById("clicker__counter").innerHTML = clickNumber;
cookie.onmousedown = function () {
	clickNumber = clickNumber + 1; 
	document.getElementById("clicker__counter").innerHTML = clickNumber;
	cookie.width = 100;
	cookie.height = 64;
}
cookie.onmouseup = function () {
	cookie.width = 200;
	cookie.height = 127;
}
*/
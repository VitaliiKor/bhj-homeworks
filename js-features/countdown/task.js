let textTime = document.getElementById("timer");
let time = Number(textTime.textContent);
document.getElementById("timer").innerHTML = time;
function counter() {
	time = time - 1; 
	if(time < 0){time = 0} 
	document.getElementById("timer").innerHTML = time;
}
setInterval('counter()', 1000)
setTimeout('alert ("Вы победили в конкурсе!")', (time+1)*1000);

/*
let hh, mm, ss;
ss = time%60;
mm = Math.floor((time/60)%60);
hh = Math.floor(time/60/60)
time = hh + ':' + mm + ':' + ss;
*/
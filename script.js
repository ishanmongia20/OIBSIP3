var celcius = document.getElementById("cel")
var farenhite = document.getElementById("feh")


celcius.addEventListener('input',function(){
	let c = this.value;
	let f = (c*9/5)+32;

	farenhite.value=f;
})


farenhite.addEventListener('input',function(){
	let f = this.value;
	let c = (f-32)*(5/9);

	celcius.value=c;
})
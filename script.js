var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("myBtn");


color1.addEventListener("input", gradientBackground);

color2.addEventListener("input", gradientBackground);

button.addEventListener("click", function(){
	var colorswitch= color1.value;
	console.log(color2.value);
	console.log(color1.value);
	color1.value= color2.value;
	color2.value= colorswitch;
	// color1.value= color2.value;
	// color2.value=colorswitch.value;
	gradientBackground();
});

function gradientBackground(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent= body.style.background + ";";
}


// function switch(){
// color1= "color2;";
// color2="colorswitch;";
// }
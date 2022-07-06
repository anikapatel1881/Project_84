canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imageTag = new Image(); //defining a variable with a new image
	img_imageTag.onload = uploading; // setting a function, onloading this variable
	img_imageTag.src= img_image;   // load image
}

function uploading() {

	ctx.drawImage(img_imageTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
    if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	{
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet Key";
		console.log("alphabet key");
	}
	else if(keyPressed >=48 && keyPressed<=57)
		//write a code to check the type of key pressed
	{
		numberkey();
		document.getElementById("d1").innerHTML="You pressed Number Key";
		console.log("numberkey");
	}	
	else if(keyPressed >=37 && keyPressed<=40)
		//write a code to check the type of key pressed
	{
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed Arrow Key";
		console.log("arrowkey");
	}
	else if((keyPressed == 27 ) || (keyPressed == 18)) {
		specialkey();
		document.getElementById("d1").innerHTML="You pressed Special Key";
	}
	else {
		otherkey();
		document.getElementById("d1").innerHTML="You pressed Other Key";
	}
	
}

function alphabetkey()
{
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}

//uses P5 Play Library //

let buddy;
let cutie; 
let index = 0;
let speed = 6;
let talkA = "Hi! I am Cutie!"
let talkB = "Hello there. I'm Buddy..."
let talkC = "Can you help me?"
let font;

let button; 


function preload(){
  font = loadFont ('font0.otf')
}

function setup() {
	createCanvas(800,800);
	background(240);
	textFont(font);
	textSize(60);
	
	buddy = loadAnimation( //buddy is the curly haired ball
	'Curlyani.png');
	cutie = loadAnimation( // cuttie is the fluffy ball
		'Fluffyani.png');
	
	button = new Button (width,2000);
}

function draw() {
	animationDrawA();
	cutieTalk();
	buddyTalk();
	
	button.display();
	mouseClicked();
	
}

function animationDrawA (){
	clear();
	scale(0.3);
	animation(buddy,2000,1200);
	animation(cutie,700,800);
}

function cutieTalk() { //fluffy talking
	text(talkA.substring(0, index), 300, 1100);
	if (frameCount % speed == 0 && index < talkA.length) { //types the letters
    index++;
  }
}

function buddyTalk() { //curly talking
	text(talkB.substring(0, index), 1500, 1450);
	if (frameCount % speed == 0 && index < talkB.length) { //types the letters
    index++;
  }
}

function mouseClicked(){
	if (mouseY==height/2){
			text(talkC.substring(0, index), 300, 1100);
			if (frameCount % speed == 0 && index < talkC.length) { //types the letters
    		index++;
  		}
		}
}

// function options(){
// 	stroke(0);
// 	strokeWeight(4);
// 	fill('#fadcf2')
// 	rect(width,2000,400,600);
	
// }






//uses P5 Play Library //
 
let index = 0;
let speed = 6;
let talkA = "Hi! I am Cutie!"
let talkB = "Hello there. I'm Buddy..."
let talkC = "Can you help me?"
let font;

let button; 
let option = 1;

let catAni;
let dogAni;
let curlyAni;
let smallAni;


function preload(){
  font = loadFont ('font0.otf')
}

function setup() {
	createCanvas(800,800);
	background('#cff1ff');
	textFont(font);
	textSize(60);
	
	catAni = loadAni('Cat1.png',6);
	dogAni = loadAni('Dog1.png',6);
	curlyAni = loadAni ('Curl1.png',6);
	smallAni = loadAni ('Small1.png',6);
	
	button = new Button();
}

function draw() {
	// if (option==1){
	// 	// animationDrawA();
	// 	cutieTalk();
	// 	buddyTalk();
	// 	animation(catAni,400,400);
	// }
	// clear();
	animation(catAni,400,400);

	
	button.display();
	button.mouseClicked();
	// mouseClicked();
	
}

// function animationDrawA (){
// 	clear();
// 	scale(0.3);
// 	animation(buddy,2000,1200);
// 	animation(cutie,700,800);
// }

// function cutieTalk() { //fluffy talking
// 	text(talkA.substring(0, index), 100, 110);
// 	if (frameCount % speed == 0 && index < talkA.length) { //types the letters
//     index++;
//   }
// }

// function buddyTalk() { //curly talking
// 	text(talkB.substring(0, index), 150, 140);
// 	if (frameCount % speed == 0 && index < talkB.length) { //types the letters
//     index++;
//   }
// }

// function mouseClicked(){
// 	if (mouseY==height/2){
// 			text(talkC.substring(0, index), 300, 1100);
// 			if (frameCount % speed == 0 && index < talkC.length) { //types the letters
//     		index++;
//   		}
// 		}
// }


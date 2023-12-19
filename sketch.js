//uses P5 Play library
let catAni;
let dogAni;
let curlyAni;
let smallAni;
let backdrop;
let backdrop2;
let currentScene = 1;
//character text
let talkA = "Hello. I am Thea.";
let talkAA = "Do you know where I could find a small"; 
let talkAAA = "but mighty doggo to grant my wishes?";

let talkB = "Hi. Do you know where I could find- ";

let talkC = "You're real!";
let talkCC= "I wish to be home with my forever family";
let talkCCC = "but have lost my way.";
let talkCCCC="I only wish for that one thing.";

let chatA = "Hmmmm. Magical doggo? Never heard of one.";
let chatAA="But I do know of a curly and wacky character named Sasssy.";
let chatAAA="I'm Bee by the way! Safe travels strange cat.";

let chatB = "Hello there.";
let chatBB="I had already heard of a strange cat coming my way.";
let chatBBB="You seek the magical doggo in hopes of granting your wish?";
let chatBBBB="All I know is the path you are on is the right one.";

let chatC = "Of course I am real young cat.";
let chatCC= "Thea, is it?";
let chatCCC="My magic has been wary but your wish will be granted!";


function preload(){
  font = loadFont ('font0.otf');
	backdrop = loadImage ('Untitled_Artwork.png'); // main background
	backdrop2 = loadImage('Backdrop2.png'); //final background
}

function setup() {
	createCanvas(800,800);
	background('#ffffff');
	textFont(font);
	textSize(17);
	
	catAni = new Sprite(200,500,50); //create the cat animation as a sprite
	catAni.addAni('walk','Cat1.png', 6); // allows the animation to be moved - p5 play library 
}

function draw(){
  if (currentScene == 1) { //first scene with regular dog Bee
    scene1();
		text(talkA,400,520);
		text(talkAA,320,540);
		text(talkAAA,330,560);
		if (millis()> 5000){ // Bee's text appears after a moment 
			text(chatA,50,80);
			text(chatAA,50,110);
			text(chatAAA,50,140);
		}
    if (catAni.position.x >= 800) {
      currentScene = 2;
      catAni.position.x = 0; // resests Thea's position for the next scene
    }
  } else if (currentScene == 2) { //curly haired dog scene Sassy
    scene2();
		text(talkB,400,520);
		if (millis()>19000){
			text(chatB,50,80);
			text(chatBB,50,110);
			text(chatBBB,50,140);
			text(chatBBBB,50,170);
		}
    if (catAni.position.x >= 800) { //when Thea is moved all the way to the right, it transitions into the next scene. 
      currentScene = 3; // as if thea is walking thorugh the pasture meeting new characters.  
      catAni.position.x = 0;
    }
  } else if (currentScene == 3) { //small dog scene Bella
    scene3();
		text(talkC,410,520);
		text(talkCC,310,540);
		text(talkCCC,390,560);
		text(talkCCCC,350,580);
		if (millis()>40000){
			text(chatC,50,80);
			text(chatCC,50,110);
			text(chatCCC,50,140);
		}
		if (catAni.position.x >= 800) {
      currentScene = 4;
      catAni.position.x = 0; 
    }
  } else if (currentScene == 4){ //final celebratory scene for Thea
		scene4();
	}
}

//dog 1 - Bee
function scene1(){
		background(backdrop);
		catAni.debug = mouse.pressing(); //from p5 play reference/ examples. Allows the catAni sprite to be movable 
		if (kb.pressing('left')) { //left arrow
		catAni.vel.x = -2; //velocity / speed of Thea's movements 
		catAni.mirror.x = true;
	} else if (kb.pressing('right')) { //right arrow
		catAni.vel.x = 2;
		catAni.mirror.x = false; //allows for the animation to be mirrored depending on the direction it is walking. 
	} else {
		catAni.vel.x = 0; //when no key is pressed the animation is stationary 
	}
	  if (!dogAni) { //creates the dog animations as sprites here instead of setup so they only appear in thier scene. 
    dogAni = createSprite(550, 260, 50);
    dogAni.addAnimation('walk', 'Dog1.png', 6);
  }
}

//dog 2 - Sassy
function scene2(){
		background(backdrop);
		catAni.debug = mouse.pressing();
		if (kb.pressing('left')) {
		catAni.vel.x = -2;
		catAni.mirror.x = true;
	} else if (kb.pressing('right')) {
		catAni.vel.x = 2;
		catAni.mirror.x = false;
	} else {
		catAni.vel.x = 0;
	}
	
	if (dogAni) {
    dogAni.remove(); //removes the previous character 
  }
	if (!curlyAni) {
    curlyAni = createSprite(550, 295, 50);
    curlyAni.addAnimation('walk', 'Curl1.png', 6);
  }
}


//dog 3 - Bella the magical doggo
function scene3(){
		background(backdrop);
		catAni.debug = mouse.pressing();
	if (kb.pressing('left')) {
		catAni.vel.x = -2;
		catAni.mirror.x = true;
	} else if (kb.pressing('right')) {
		catAni.vel.x = 2;
		catAni.mirror.x = false;
	} else {
		catAni.vel.x = 0;
	}
	
	if (curlyAni) {
    curlyAni.remove(); 
  }
	
	if (!smallAni) {
    smallAni = createSprite(550, 270, 50);
    smallAni.addAnimation('walk', 'Small1.png', 6);
  }
}


//final scene for Thea
function scene4(){
	background(backdrop2);
	catAni.debug = mouse.pressing();
	if (kb.pressing('left')) {
		catAni.vel.x = -2;
		catAni.mirror.x = true;
	} else if (kb.pressing('right')) {
		catAni.vel.x = 2;
		catAni.mirror.x = false;
	} else {
		catAni.vel.x = 0;
	}
	if (smallAni){
		smallAni.remove();
	}
}

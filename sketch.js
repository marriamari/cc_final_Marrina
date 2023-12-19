
//uses P5 Play Library //

let catAni;
let dogAni;
let curlyAni;
let smallAni;
let backdrop;
let currentScene = 1;

function preload(){
  font = loadFont ('font0.otf');
	backdrop = loadImage ('Untitled_Artwork.png');
}

function setup() {
	createCanvas(800,800);
	background('#ffffff');
	textFont(font);
	textSize(20);
	catAni = new Sprite(200,460,50);
	// dogAni = new Sprite(550, 250,50);
	// curlyAni = new Sprite(550, 250,50);
	// smallAni = new Sprite(550, 250,50);
	
	catAni.addAni('walk','Cat1.png', 6);
	// dogAni.addAni('walk','Dog1.png',6);
	// curlyAni.addAni('walk','Curl1.png',6);
	// smallAni.addAni('walk','Small1.png',6);
	
	// catAni = loadAni('Cat1.png',6);
	// dogAni = loadAni('Dog1.png',6);
	// curlyAni = loadAni ('Curl1.png',6);
	// smallAni = loadAni ('Small1.png',6);
	
}

function draw(){
  if (currentScene === 1) {
    scene1();
    if (catAni.position.x >= 800) {
      currentScene = 2;
      catAni.position.x = 0; // Reset cat's position for the next scene
    }
  } else if (currentScene === 2) {
    scene2();
    if (catAni.position.x >= 800) {
      currentScene = 3;
      catAni.position.x = 0; // Reset cat's position for the next scene
    }
  } else if (currentScene === 3) {
    scene3();
  }

}

function scene1(){
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
	  if (!dogAni) {
    // Create dogAni only if it doesn't exist
    dogAni = createSprite(550, 250, 50);
    dogAni.addAnimation('walk', 'Dog1.png', 6);
  }
}

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
    dogAni.remove(); // or dogAni.visible = false;
  }
	if (!curlyAni) {
    // Create curlyAni only if it doesn't exist
    curlyAni = createSprite(550, 250, 50);
    curlyAni.addAnimation('walk', 'Curl1.png', 6);
  }
}

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
    curlyAni.remove(); // or dogAni.visible = false;
  }
	
	if (!smallAni) {
    // Create smallAni only if it doesn't exist
    smallAni = createSprite(550, 250, 50);
    smallAni.addAnimation('walk', 'Small1.png', 6);
  }
}


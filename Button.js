
let numberA = "1"

class Button {
	
	constructor(x,y){
        this.position =new createVector (x,y);
    }
	
	display(){
		if (mouseY>=height/2){ //when mouse is in the bottom half of the screen 
        this.optionAA(); //appears over the original when mouse is hovered 
    } else{
			this.optionA();
	}
	}
		
		
	optionA(){
		stroke(0);
		strokeWeight(4);
		// numberA();
		fill('#fadcf2')
		rect(width,2000,400,600);
	}
		
	optionAA(){
		stroke(0);
		strokeWeight(4);
		fill('#fadcf2')
		rect(width,1900,480,600);

	}
	
	mouseClicked(){
		if (optionAA == optionAA){
			
		}
	}
	
}






/*
This section of code defines the "Mole" object containing all its variables and functions
This particular "Mole" object is designed for AAH-001-alien-hunter-game - (Whack a mole)

This is the "Mole" object defined as the objects within the "Hole" objects which the player targets to get points.

----------
Variables
----------
ID:
This variable is defined as a string and is used as a unique Identifyer for this mole.

Hitbox:
This variable is defined as a Rectangle object that is used to detect collision and drawing perameters

Timeup:
this variable is defined as an integer and is used as the amount of time the mole stays up before disapearing and the animation time for the mole.

Timedown:
this variable is defined as an integer and is used as the amount of time to animate the mole falling if its whacked

Timeellipsed:
This variable is defined as an integer and is used to count the amount of time that has passed since the mole was created. if the mole is hit this timer resets to allow falling animation.

colour:
This variable is defined as a string and will be in an appropriate colour format as in hex code, RGB, or RGBA

imageset:
This variable is defined as an array object that contains special fields specific to mole's images and animation.
-['ALIVE']
--['image']
--['frames']
--[framesize]
--['animatetime']
-['WHACKED']
--['image']
--['frames']
--[framesize]
--['animatetime']

soundset:
this variable is defined as an array object that contains special fields specific to the mole's sounds.
-['ALIVE']
--['taunt']
--['duck']
--['mock']
-[WHACKED']
--['smack']
--['faint']

state:
This variable is defined as a string with predefined states sucha as "ALIVE" while the mole has not been hit, and "WHACKED" when the mole gets hit by the player, any other new states may be added such as "TAUNT","DIG", "DOWN", or "JUMP" if features are added

Frame:
This variable is defined as an integer and is used to determine the current frame that is to be renderred.

----------
Functions
----------
-UpdateFrame():
This function updates the current frame to the next frame and resets the frame when the image has hit its maximum amount of frames.

-CheckRemove():
this function checks if the mole has completed its full timed cycle of either alive or whacked and then returns true or false.

-Draw(selection,Domlist,ctx):
This method Draws the "mole" based on the call from the "hole" object it is part of. draws based on the current state.

-Whack():
This function is called as a reaction to the "mole" being hit by the player setting the state to "wHACKED" and resetting the timer as well as the frames.

*/

function Mole(ID , moleData){
	this.id = ID;
	this.hitBox=moleData['hitBox'];
	this.timeUp=moleData['timeUp'];
	this.timeDown=moleData['timeDown'];
	this.timeEllipsed=0;
	this.colour=moleData['colour'];
	this.imageSet=moleData['imageSet'];
	this.soundSet=moleData['soundSet'];
	this.state = "ALIVE"
	this.frame=0;

	this.UpdateFrame = UpdateFrame;
	this.CheckRemove = CheckRemove;
	this.Draw = Draw;
	this.Whack = Whack;

	function UpdateFrame(){
		this.frame++;
		if(this.frame > this.imageSet[this.state]['frames']){
			this.frame = 0;
		}
	}

	function CheckRemove(){
		switch(this.state){
			case "ALIVE":
				if(this.timeEllipsed >= this.timeUp){
					return true;
				}else{
					return false;
				}
			break;
			case "WHACKED":
				if(this.timeEllipsed >= this.timeDown && this.frame == this.imageSet[this.state]['frames']){
					return true;
				}else{
					return false;
				}
			break;
			default:
				return true;
			break;
		
		}
	}
	
	function Draw(selection,domList,ctx){
		switch(this.state){
			case "ALIVE":
				if(selection){
					//draws the current frame
					var cFrame = 
					this.hitBox.drawImg();
					
					
					
				}else{}
			break;
			case "WHACKED":
			break;
			default:
			break;
		
		}
	}

	function Whack(){
		if(this.state == "ALIVE"){
			this.state = "WHACKED"
			this.frome = 0;
			this.timeEllipsed=0;
		}
	}
}

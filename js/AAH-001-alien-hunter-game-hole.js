/*
This section of code defines the "Hole" object containing all its variables and functions
This particular "Hole" object is designed for AAH-001-alien-hunter-game - (Whack a mole)

This is the "hole" object that is defined as set spots where "moles" may appear during a game.

----------
Variables
----------
ID:
This variable is defined as a string and is used to uniquily identify this "Hole" object.

HitBox:
This variable is defined as a Rectangle object and it used to determine if the "hole" or the possible "mole" has been clicked and where the objects shoudl be on screen.

BGColour:
This variable is defined as a string with an acceptable colour format in hex code, RGB, or RGBA.

BGImage:
This variable is defined as a reference object to either an image element on the page or another canvas if it is being used.

MoleData: 
This Variable is defined as an array object that contains specific traits for what moles can appear in this particular hole.
-MoleColours:
	This is an array of colours that the "mole" backgrounds can be.
-MoleMax:
	This is the maximum amount of time a "mole" will spend in the "hole" it is calculated by (number-of-seconds-up-in-ms / gamePace).
-MoleMin:
	This is the minimum amount of time a "mole" will spend in the "hole" it is calculated by (number-of-seconds-up-in-ms / gamePace).
-MoleImages:
	This is an array of image references which is chosen randomly upon "mole" creation.
-MoleSounds:
	this is an array of sound references which are chosen based on the "moles" actions.
Mole:
This variable is defined as a "mole" object or an empty string this "mole" object becomes filled as an object when it is set in the hole otherwise it is empty allowing for another mole to fit into the "hole"


----------
Functions
----------
-SetMole():
This function when called adds a new "mole" to this "hole" and if there is no mole set in the hole as it is.

-UnSetMole():
This function when called removes a "mole" with this "hole" inf there is one to remove.

-ModHole(x,y,width,height):
This method moves or changes the "hole" in order to create specific puzzle levels or create specific effects
this modifies the hitbox on both the "hole" and the "mole" if there is one.

-Draw(selection,Domlist,ctx):
This method Draws the "hole" and calls the draw method of the "mole" it uses the arguments to determine what medium to draw on and then sets the properties as is required.
Selection: if true then use a canvas method of drawing if false use the list of dom elements provided to draw
*/

function Hole(ID, HitBox, BGColour, BGImage,MoleData){
	this.id = ID;
	this.hitBox = HitBox;
	this.bgColour = BGColour;
	this.bgImage = BGImage;
	this.moleData = MoleData;
	this.mole = "";

	this.setMole = setmole;
	this.unsetMole = unsetMole;
	this.modHole = modeHole;
	this.draw = draw;


	function setMole(){
		if(typeof(this.mole) != 'object'){
			//mole(ID,hitbox,timeup,colour,imageset,soundset)
			this.mole = new Mole((this.id + ":mole"),this.moleData);
		}
	}

	function unSetMole(){
		if(typeof(this.mole) == 'object'){
			this.mole = "";
			
		}
	}
	
	function modHole(x,y,width,height){
		this.hitBox.x = x;
		this.hitBox.y = y;
		this.hitBox.width = width;
		this.hitBox.height = height;
	}
	
	function draw(selection,domList,ctx){
		if(selection){
			//draws mole background colour
			this.hitBox.drawFill(ctx,this.bgColour);
			//draws background image
			this.hitBox.drawImg(ctx,this.bgImage,this.hitBox);
			//draws mole image
			if(typeof(this.mole) == 'object'){
				this.mole.draw(selection,domList,ctx);
			}
		}else{
			
		}
	}

}
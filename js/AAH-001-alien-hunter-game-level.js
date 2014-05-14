/*
This section of code defines the Level object containing all its variables and functions
This particular level object is designed for AAH-001-alien-hunter-game - (Whack a mole)

----------
Variables
----------
ID:
This variable can be defined as either a string or an Integer. 
It is used to create a unique Identifyer for this level or be used as a groupe Identifyer for a set of levels.

Name:
This variable is defined as a string.
and reperesents the display name of the level that you would like to print to the menu or title.

Description:
This variable is defined as a string.
It is used as additional text to the level and is optional.

PlayArea:
This variable is defined as a rectangle object.
It is the defined play area of the game where all of the objects in the game show visibly.
It can be set by either a Dom object's attributes or by the size of a canvas or section of a canvas.

BGColour:
This variable is defined as a string in either Hex colour format or RGB format or RGBA format
It is used to set a background colour for the play area in the case there is no background image it will display the base colour by default.
this can apply to either Dom objects or a canvas.

BGImage:
This variable is defined as a reference object to either an image tag loaded onto the page or a canvas (if the paly area is a canvas).
It is used to overlay certain sections of the play area to create a scene.

MusicList:
This variable is defined as an array object that holds array objects that hold reference objects to sound/music tags loaded on the page, along with data for them such as, time ellipsed, repeat, and length.
It is just meant to hold the background music of the level with certain methods changing what gets played and where it stops.

ScoreModifyer:
This variable is defined as an integer or a float.
It is used to modify the score for every successful whack and return the value.

HoleList:
This variable is defined as an array object holding "Hole" objects.
It is used to define where holes apear within the play area and what effects they contain.

MoleLimit:
this variable is defined as an integer.
It is used to define the maximum number of "Mole" objects there can be up on the field at one time.
the minimum is 1 and the maximum is the number of "hole" objects in the level.

MoleCount:
This variable is defined as an integer.
it reperesents the current number of moles and is modified in the setnewmole function and onClick function

TimeLimit: 
This variable is defined as an integer or float.
It is the maximum amount of time given for this level.

TimeEllipsed:
This variable is defined as an integer or float.
It is used to count up from the start time at a given interval in a counttime method.


----------
functions
----------
-Update()
Updates all objects within a level and calls specific functions to run to continue the progress of the game.

-Draw(selection,Domlist,ctx)
Draws all aspects of the level currently.
The selection argument is a boolean and allows the programmer to choose whether the game is using a Dom element or a canvas.
Domlist is an array of reference objects to the dom elements and sets thier properties based on the current variables.
ctx is a context for a canvas and is used to draw all of the level objects to the given canvas.

-CountUp(interval)
Adds time to the Timeellipsed variable based on the interval argument.
the interval can change within the game if we decide to include powerups or maybe a slow mo or fast mo challange setting.

-GetTimeLeft(outertimerinterval)
Returns a string of text with a preset format displaying the time in minutes and seconds.
the outertimerinterval variable is the main gamepace variable and is used to calculate along with level timelimit and timeellipsed to create the final string.

-OnClick(e)
This uses the event inputted by a click and calls the checkfield function to see if the user has successfully clicked something then reacts to the result.

-CheckField(checkrectangle)
This method checks the field and using the rectangle objects intercect method checks if any objects in the level lists were clicked.
the checkrectangle argument is the rectangle being compared to the list objects and can be a mouse click event translated as a rectangle.

-SetNewMole(rate)
This method checks if there are any "Mole" objects attached to any of the "hole" objects and determines using the molelimit if there can be any more moles on the field. it then uses the rate argument to do a calculation on the chances of another mole popping up.
the rate argument is an integer ranging from 1 to 100 this is meant to be a percentage compared to a random number. if the random number is less than or equal to the percentage rounded down then a new mole is set in place.


*/
function Level(ID,Name,Description,PlayArea,BGColour,BGImage,MusicList,ScoreModifyer,HoleList,MoleLimit,TimeLimit){
	this.id=ID;
	this.name=Name;
	this.description=Description;
	this.playarea=PlayArea;
	this.bgcolour=BGColour;
	this.bgimage=BGImage;
	this.musiclist=MusicList;
	this.scoremodifyer=ScoreModifyer;
	this.holelist=HoleList;
	this.molelimit=MoleLimit;
	this.molecount = 0;
	this.timelimit=TimeLimit;
	this.timeellipsed=0;	

	this.update=update;
	this.draw=draw;
	this.countUp=countUp;
	this.getTimeLeft=getTimeLeft;
	this.onClick=onClick;
	this.checkField=checkField;
	this.setNewMole=setNewMole;

	
	function update(){
		
	}

	function draw(selection,Domlist,ctx){
		
	}

	function countUp(interval){
		
	}

	function getTimeLeft(oti){
		
	}

	function onClick(e){
		
	}

	function checkField(crect){
		
	}

	function setNewMole(rate){
		//checks if you have reached the "mole" limit
		if(this.molecount<this.molelimit){
			//compares the rate and determines if a new mole should randomly pop up a higher rate should be set for lower amounts of moles in list
			if(Math.floor(Math.random()*100)<=rate){
				//calls a method in the "hole" object which checks if a "mole" is currently in the "hole" or not and places or not places a "mole" accordingly
				this.holelist[Math.floor(Math.random()*(this.holelist.length-1))].SetMole();
			}
		}
	}

}
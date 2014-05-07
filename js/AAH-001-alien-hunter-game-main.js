/*
AAH-001-Alien hunter game initial js file.
Date started 11:12 AM 5/6/2014
This section contains a brief description of what will be in this file.
---------
Gameloop
---------
-Init(): 
This method will contain a method to launch as soon as the game is called.It will set up the predefined menu and wait letting the user choose the level and game settings.

-SetLevel(level): takes an integer as an argument
This method sets up the level based on the level index given and sets the level variable

-StartGame():
This Method starts the game timer calling update after a level has been set up as well as changing the gamestate to PLAY.

-EndGame():
Stops the timer and changes the gamestate to GAMEOVER

-PauseGame():
Checks the current state of the game, if its PLAY stop the timer halting update and draw calls for play mode and using them instead for pause mode and change the gamestate to PAUSE. if gamestate is PAUSE set the time timer interval again, set the gamestate to PLAY and continue the game.

-OpenMenu():
Sets the state of the game to MENU and sets the gametime to draw the menu.

-Update():
This method updates every time the set timer interval ticks. The updates consist of figuring out the status of the current game, checking all objects and calling the necesary methods within them, setting any changes to the appropriate variables and, calling the draw method.

-Draw():
This method will display given variables on screen that were set previously in the update method. The way it draws will be dependent on the technology we choose for displaying (DOM elements or HTML5 Canvas).
------------------------------------------

-------
JQUERY
-------
-$(element).Click...
This method will be used either to collect click information and use another method to decipher the data of the event 
OR
immediately effect the clicked element and cause a direct reaction and method call based on the element clicked

-$(element).ready...
This method will begin the call of other methods after loading specific elements to prevent errors from occuring during runtime due to missing elements.
----------
Variables
----------
Gamestate: This variable equates to the current state of the game. these states can be: MENU, OPTIONS, PLAY, PAUSE, GAMEOVER, ERROR or, SCORE as a string.

GameTime: this is the variable holding the set interval method.

GamePace: this is the interval of time between updates as an integer in miliseconds.

Level: This variable contains the index of the level being set for play as an integer.

LevelSets: This variable is an array of level objects which can be preset before init or during init if needed. the level objects will be called using level as an index in the array.

Menu: contains a menu object which is only present while the gamestate is equal to MENU.

Score: holds a total score value of accumulated points given based on the level.

PauseKey: this is an integer index that will be mapped to the pause button in the game by default this is 32 for the space bar.
*/

//variable declaration
var gameState;
var gameTime;
var gamePace;
var level;
var levelSets;
var menu;
var score;
var pauseKey;

///////////////////////////////////initialization//////////////////////////////////////
function Init(){
	
	gamePace = 100;
	score = 0;
	pauseKey = 32;
	OpenMenu();

}

/////////////////////////////////////SETUP FUNCTIONS//////////////////////////////////
//sets level based on menu selection
function SetLevel(LEVEL){

}

//Starts the game interval and the initial game based on level
function StartGame(){
	gameState = "PLAY";
	clearInterval(gameTime);
	gameTime = setInterval(function(){Update();},gamePace);
}

//stops the timer and ends the game
function EndGame(){
	gameState="GAMEOVER";
	Update();
	clearInterval(gameTime);

}

//stops or starts the game timer based on current state
PauseGame(){
	if(gameState == "PLAY"){
		clearInterval(gameTime);
		gameState="PAUSE";
	}else if(gameState == "PAUSE"){
		gameState="PLAY";
		gameTime = setInterval(function(){Update();},gamePace);

	}
}

//sets up for menu display
function OpenMenu(){
	gameState="MENU";
	clearInterval(gameTime);
	gametime=setInterval(function(){Update();},gamePace);
}

///////////////////////////////////////////GAMELOOP FUNCTIONS///////////////////////////
//content Update
function Update(){
	switch (gameState){
		case "PLAY":
		break;
		case "PAUSE":
		break;
		case "MENU":
		break;
		case "GAMEOVER":
		break;
		case "ERROR":
		break;
		case "SCORE":
		break;
		default:
		break;
	}

}


//content Draw
function Draw(){
	switch (gameState){
		case "PLAY":
		break;
		case "PAUSE":
		break;
		case "MENU":
		break;
		case "GAMEOVER":
		break;
		case "ERROR":
		break;
		case "SCORE":
		break;
		default:
		break;
	}
}

/////////////////////////////////////JQUERY FUNCTIONS///////////////////////////////////

$(document).ready(function(){
//Calls functions as soon as the Page is finished loading
	Init();

//Allows other event calls as soon as document is ready
//e is the event information so we can collect attripbutes such as the x and y position of the mouse at the point of clicking.
	$(/*ELement Name here*/).click(function(e){
		
	});
	$(/*Element Name here*/).keyup(function(e){
		if(gameState=="PLAY" || gameState="PAUSE"){
			if(e.keyCode == pauseKey){
				PauseGame();
			}
		}else if(gameState == "OPTIONS"){
			pauseKey = e.keyCode;
		}
	});

});
var playerx;
var playery;
var gravity;
var playervel;
var playeracc;

var objectx;

var FRAMERATE;

function setup()
{
	createCanvas(600, 480);
	background(255);
	FRAMERATE = 60;
	frameRate(FRAMERATE);
	
	playerx = 20;
	playery = 310;
	
	playervel = 0;
	playeracc = 0;
	gravity = 10;
}

function updateposx()
{
	if(keyIsDown(65)){
		playerx = (playerx + 600)%600 - 5;
	}
	if(keyIsDown(68)){
		playerx = playerx%600 + 5;
	}
}

function updateposy()
{
	if(keyIsDown(32) && playery >= 310){
		playeracc	= 50;
	}
	if(playeracc > 0){
		playery		-= 1000/(FRAMERATE*2);
		playeracc	-= (gravity*(1000/(FRAMERATE*2)))*(FRAMERATE/1000);
	}
	if(playery < 310 && playeracc <= 0){
		playery 	+= (gravity*(1000/(FRAMERATE*2)))*(FRAMERATE/1000)*0.5;
	}
}

function draw()
{
	clear();
	updateposx();
	updateposy();
	fill(0);
	rect(playerx, playery, 50, 50);
	console.log(playery);
	line(0, 360, 600, 360);
}

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
const TouchGestures = require('TouchGestures');
const Scene = require('Scene');

// How to access scene objects (uncomment line below to activate)
// const directionalLight = Scene.root.find('directionalLight0');

// How to access class properties (uncomment line below to activate)
// const directionalLightIntensity = directionalLight.intensity;

// How to log messages to the console (uncomment line below to activate)
// Diagnostics.log('Console message logged from the script.');

var arrayText = ["kucing", "Dog", "Bird", "jimena", "insu song"];

var scoreTextNode = Scene.root.find('scoreText');
var textNode = Scene.root.find('text');
var myBtn = Scene.root.find('button');
var myBtnPass = Scene.root.find('buttonPass');

var score = 0;
var count = 0;

function main() {
	textNode.text = arrayText[Math.floor(Math.random()*arrayText.length)];
	scoreTextNode.text = "Score: " + score;
}

TouchGestures.onTap(myBtn).subscribe(function() {
	textNode.text = arrayText[Math.floor(Math.random()*arrayText.length)];
	score++;
	scoreTextNode.text = "Score: " + score;
});

TouchGestures.onTap(myBtnPass).subscribe(function() {
	textNode.text = arrayText[Math.floor(Math.random()*arrayText.length)];
});

function displayTextEverySec() {
	
}

main();


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
const Time = require('Time');
const Audio = require('Audio');

// How to access scene objects (uncomment line below to activate)
// const directionalLight = Scene.root.find('directionalLight0');

// How to access class properties (uncomment line below to activate)
// const directionalLightIntensity = directionalLight.intensity;

// How to log messages to the console (uncomment line below to activate)
// Diagnostics.log('Console message logged from the script.');

var arrayText = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

var scoreTextNode = Scene.root.find('scoreText');
var timerText = Scene.root.find('headerText');
var textNode = Scene.root.find('text');
var startTextNode = Scene.root.find('taptostart');

var myBtn = Scene.root.find('button');
var correctBtn = Scene.root.find('buttonCorrect');
var myBtnPass = Scene.root.find('buttonPass');

var canvasClick = Scene.root.find('canvasfullPage');
var clockSound = Scene.root.find('clockSpeaker');

var started = false;
var score = 0;
var count = 0;
var timecount = 11;
var myTimer;

var playbackController = Audio.getPlaybackController('clockTick');

TouchGestures.onTap(startTextNode).subscribe(function(gesture) {
	if (started == false) {
		startTextNode.text = "";
		started = true;
		main();
	}
});

function main() {
    timecount = 11;
	if (started == true && timecount >= 0) {
		myTimer = Time.setInterval(timer,1000);
        console.log(timecount);
	}
    else if (timecount <= 0) {
        Time.clearInterval(myTimer);
    }

	textNode.text = arrayText[Math.floor(Math.random()*arrayText.length)];
	scoreTextNode.text = "Score: " + score;
	correctBtn.text = "Correct";
    
}

function timer() {
	timecount--;
	timerText.text = timecount + " seconds left to answer";
    playbackController.setLooping(true);
    playbackController.setPlaying(true);
	
	if (timecount <= 0) {
		timerText.text = "GAME OVER";
		correctBtn.text = "Try again";
		scoreTextNode.text = "Final Score: " + score;	
        playbackController.setPlaying(false);
	}
}

TouchGestures.onTap(myBtn).subscribe(function(gesture) {
	if (started == true) {
		if (timecount <= 0) {
			score = 0;
			main();
		} else {
			textNode.text = arrayText[Math.floor(Math.random()*arrayText.length)];
			score++;
			scoreTextNode.text = "Score: " + score;
            timecount = 11;
            
			// set timer back to 10secs
			//timecount = 10;
		}
	}
});

TouchGestures.onTap(myBtnPass).subscribe(function(gesture) {
	if (started == true) {
		if (timecount <= 0) {
			// do nothing
		} else {
			textNode.text = arrayText[Math.floor(Math.random()*arrayText.length)];
			//timecount = 10;
		}
	}
});



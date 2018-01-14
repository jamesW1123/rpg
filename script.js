const topContainer = document.getElementById("top_container");
const imageContainer = document.getElementById("image_container");
const textContainer = document.getElementById("text_container");
const inputField = document.getElementById("cmd");
const commands = ["go", "look", "talk", "get"];
const fileName = "data.json";

var player, weapons, places;
var currentPlace = "town";

function readData(file, callback){

	var req = new XMLHttpRequest();	

	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200){
			var data = JSON.parse(req.responseText);
			player = data.player;
			weapons = data.weapons;
			places = data.locations;
			callback();
		}
	}
	req.open("GET", file, true);
	req.send(null);
}

function init(){

	var done = readData(fileName, function(ready){

		inputField.addEventListener('keypress', (event) =>{
			const keyName = event.key;
			if(keyName == "Enter"){

				var input = inputField.value.toLowerCase().split(" ");
				inputField.value = "";

				switch(input[0]){

					case "go":
						go(input[1]);
						break;
					case "look":
						look(input[1]);
						break;
					case "talk":
						talk(input[1]);
						break;
					case "get":
						get(input[1]);
						break;
					case "help":
						help();
						break;
					default:
						textContainer.innerHTML = "invalid command";
				}		
			}		
		});

		topContainer.innerHTML = "Hit Points: " + player.hitPoints;
		textContainer.innerHTML = places[currentPlace].description;
	});
	
}

function go(str){
	if(places[str] == undefined){
		textContainer.innerHTML = "That place doesn't exist!";
		return;
	}
	textContainer.innerHTML = places[str].description;
}

function look(str){
	textContainer.innerHTML = "look at " + str;
	var s = "";
	
}

function talk(str){
	textContainer.innerHTML = "talk to " + str;
}

function get(str){
	textContainer.innerHTML = "get " + str;
}

function help(){

	var helpString = "Possible commands are:\n";

	commands.forEach(function(current){
		helpString += current + "\n";
	});
	alert(helpString);
}





























// Suppose that we play playstation football game and during the game we want to chenge the game plan
//     (attack -defence - meduim) ( strategy design patter )

// using strategy design pattern to handle this question

class attack {
	chooseMode(modeDetails){
		return "you are choose attack mode"
	}
}

class defence {
	chooseMode(modeDetails){
		// calculatuon packageDetails 
		return "you are choose defence mode"
	}
}

class medium {
	chooseMode(modeDetails){
		return "you are choose medium mode"
	}
}




class footballGame{

	setStrategy(mode){  
		this.mode = mode
	}

	chooseMode(modeOption){ 
		return this.mode.chooseMode(modeOption) 
	}

}

var attack1 = new attack();
var defence1 = new defence();
var medium1 = new medium();

var modeDetails = {
	difficulty: "hard",
     styleGame: "style1"
}



var footballGameplay = new footballGame()
footballGameplay.setStrategy(attack1)
footballGameplay.setStrategy(defence1)
console.log(footballGameplay.chooseMode(modeDetails))




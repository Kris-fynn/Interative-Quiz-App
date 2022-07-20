var questions = [{
	question:"What is the baby of a moth known as?",
	choices:["baby", "infent", "kit", "larva"],
	correctAnswer: 3
},{
	question:"What is the adult of a kid known called",
	choices:["calf", "doe", "goat", "chick"],
	correctAnswer: 2
},{
	question: "What is the young of Bufallo called",
	choices:  ["calf", "baby", "pup", "cow"],
	correctAnswer: 0
},{
	question: "What a baby Aligator called",
	choices:  ["baby","gator","hatchling","calf"],
	correctAnswer: 2
},{
	question: "What is a baby Goose called",
	choices: ["gooser", "gosling", "gup", "pup"],
	correctAnswer: 1
},{
	question: "What is a baby Hamster called",
	choices: ["pup", "chick", "infant", "billy"],
	correctAnswer: 0
},{
	question: "What is a baby Hawk called",
	choices: ["Hawklett", "pup", "larva", "eyas"],
	correctAnswer: 3
},{
	question: "What is a baby grasshopper called",
	choices: ["hopper", "nymph", "stick", "pup"],
	correctAnswer: 1
},{
	question: "What is a baby Kangaroo called",
	choices: ["kanga", "joey", "calf", "baby"],
	correctAnswer: 1

},{
	question: "What is a baby Whale called",
	choices: ["Whala", "cub", "grab", "infant"],
	correctAnswer: 1
	
},{
	question: "What is a baby Monkey called",
	choices: ["infant", "baby", "calf", "pup"],
	correctAnswer: 0
	
},{
	question: "What is a baby Bear called",
	choices: ["cub", "baby balu", "young bear", "bearlet"],
	correctAnswer: 0
}];


var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
	diplayCurrentQuestion();
	$(this).find(".quizMessage").hide();
	$(this).find(".nextButton").on("click", function () {
		if (!quizOver) {
			value = $("input[type='radio']:checked").val();
			if (value == undefined) {
				$(document).find(".quizMessage").text("Please select an answer");
				$(document).find(".quizMessage").show();
			} else {
				$(document).find(".quizMessage").hide();
				if (value == questions[currentQuestion].correctAnswer) {
					correctAnswer++;
			    }
			currentQuestion++;
			if (currentQuestion < questions.length) {
				diplayCurrentQuestion();
			} else {
				diplayScore();
				$(document).find(".nextButton").text("Play Again");
				quizOver = true;
			} else {
			    quizOver = false;
			    $(document).find(".nextButton").text("Next diplayCurrentQuestion");
			    resetQuiz();
			    diplayCurrentQuestion();
			    hideScore();
		    }
		}
	});
});


function diplayCurrentQuestion() {

	console.log("In diplayCurrentQuestion");

	var question = questions[currentQuestion].question;
	var questionClass = $(document).find(".quizContainer > .question");
	var choiceList = $(document).find(".quizContainer > .choiceList");
	var numChoices = questions[currentQuestion].choices.length;

	//Set the questionClass text to the current question 
	$( questionClass).text(question);

	//Remove all the current <li> element (if any)
	$(choiceList).find("li").remove();

	var choice;
	for (i = 0; i < numChoices; i++) {
		choices = questions[currentQuestion].choices[i];
		$('<li><input type="radio" value='+ i + ' name="dynradio"/>' + choice + '</li>').appendTo(choiceList);
    }
}function resetQuiz(){
	currentQuestion = 0:
	correctAnswers = 0;
	hideScore();
}

function diplayScore() {
	$(document).find(".quizContainer > .result").text(" You scoed:" + correctAnswer + " out of: " + questions.length);
	$(document).find(".quizContainer > .result").show(); 

	
}function hideScore(){
	$(document).find(".result").hide();
}

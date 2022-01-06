//* Data initial
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
	const choices = [
		"r", "p", "s"
	];

	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

getComputerChoice();

function converToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

// work functions result choice game
function win(userChoice, computerChoice) {
	const smallUserWord = "(user)".fontsize(3).sub();
	const smallCompWord = "(comp)".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);

	userScore++;
	// console.log("WINS");
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `
		${converToWord(userChoice)}<b>${smallUserWord}</b> beats ${converToWord(computerChoice)}<b>${smallCompWord}</b>. You win! <span>🔥</span>
	`;

	userChoice_div.classList.add("green-glow");
	setTimeout(() => {
		userChoice_div.classList.remove("green-glow");
	}, 300);
}

function lose(userChoice, computerChoice) {
	const smallUserWord = "(user)".fontsize(3).sub();
	const smallCompWord = "(comp)".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);

	computerScore++;
	// console.log("LOSE");
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

	result_p.innerHTML = `
		${converToWord(userChoice)}<b>${smallUserWord}</b> loses to ${converToWord(computerChoice)}<b>${smallCompWord}</b>. You lost! 💩
	`;
	userChoice_div.classList.add("red-glow");
	setTimeout(() => {
		userChoice_div.classList.remove("red-glow");
	}, 300);
}

function draw(userChoice, computerChoice) {
	// console.log("DRAW");
	const smallUserWord = "(user)".fontsize(3).sub();
	const smallCompWord = "(comp)".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);

	result_p.innerHTML = `
		${converToWord(userChoice)}<b>${smallUserWord}</b> equals ${converToWord(computerChoice)}<b>${smallCompWord}</b>. It's a draw... 💩
	`;
	userChoice_div.classList.add("gray-glow");
	setTimeout(() => {
		userChoice_div.classList.remove("gray-glow");
	}, 300);
}

// game function
function game(userChoice) {
	// the computer choice
	const computerChoice = getComputerChoice();

	// console.log("* computer => ",computerChoice);
	// console.log("* user     => ",userChoice);
	let resultChoice = computerChoice + userChoice;

	// working result choice game
	switch (resultChoice) {
		case "rp":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;

		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;

		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	// main Events
	rock_div.addEventListener("click", () => game("r"));
	paper_div.addEventListener("click", () => game("p"));
	scissors_div.addEventListener("click", () => game("s"));
}

main();

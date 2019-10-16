let slider = document.getElementById("myHomeRange");
let homeOutput = document.getElementById("home-probability-results");
let awayOutput = document.getElementById("away-probability-results");
homeOutput.innerHTML = slider.value;

slider.oninput = function() {
	homeOutput.innerHTML = this.value;
	awayOutput.innerHTML = 100 - this.value;
};

// $('input[name="home-win-probability"]').on("input", function(e) {
// 	let awayProbability;
// 	let homeProbability = parseFloat(e.target.value) / 100;
// 	awayProbability = 1 - homeProbability;
// 	$("#away-win-probability-input").val(awayProbability);
// 	$("#home-win-probability-input").val(homeProbability);
// });

$("button").on("click", function(e) {
	e.preventDefault();
	calculateBet();
});

function calculateBet() {
	let homeProbability =
		parseFloat(
			document.getElementById("home-probability-results").textContent
		) / 100;
	let awayProbability =
		parseFloat(
			document.getElementById("away-probability-results").textContent
		) / 100;
	let homeOdds = $('input[name="home-decimal-odds"]')[0].valueAsNumber;
	let awayOdds = $('input[name="away-decimal-odds"]')[0].valueAsNumber;
	let percentOfBankrollOnHome =
		((homeOdds - 1) * homeProbability - awayProbability) / (homeOdds - 1);

	recommendation(percentOfBankrollOnHome);
}

function recommendation(arg) {
	let bankroll = $('input[name="bankroll"]')[0].valueAsNumber;
	let bet = arg.toFixed(2);
	let betAmount = "$" + bankroll * bet;
	let betString = bet * 100 + "%";
	let amount = (document.getElementById("amount").innerHTML =
		"Bet " + betString);
	let percent = (document.getElementById("percent").innerHTML =
		"or " + betAmount);
}

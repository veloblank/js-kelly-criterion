let slider = document.getElementById("myHomeRange");
let homeOutput = document.getElementById("home-probability-results");
let awayOutput = document.getElementById("away-probability-results");
homeOutput.innerHTML = slider.value;

slider.oninput = function() {
	homeOutput.innerHTML = this.value;
	awayOutput.innerHTML = 100 - this.value;
	calculateBet();
};

function calculateBet() {
	let homeProbability =
		parseFloat(
			document.getElementById("home-probability-results").textContent
		) / 100;
	let awayProbability =
		parseFloat(
			document.getElementById("away-probability-results").textContent
		) / 100;
	let homeOdds = $('input[name="win-decimal-odds"]')[0].valueAsNumber;
	let awayOdds = $('input[name="loss-decimal-odds"]')[0].valueAsNumber;
	let percentOfBankrollOnFave =
		((homeOdds - 1) * homeProbability - awayProbability) / (homeOdds - 1);

	if (percentOfBankrollOnFave >= 0) {
		recommendation(percentOfBankrollOnFave);
		document.getElementById("results").classList.add("place-bet");
		document.getElementById("results").classList.remove("no-bet");
	}

	if (percentOfBankrollOnFave < 0) {
		document.getElementById("results").classList.add("no-bet");
		document.getElementById("results").classList.remove("place-bet");
	}
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

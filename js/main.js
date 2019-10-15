$('input[name="home-win-probability"]').on("change", function(e) {
	let homeProbability = parseFloat(e.target.value);
	let awayProbability = 100 - homeProbability;
	$("#away-win-probability-input").val(awayProbability);
});

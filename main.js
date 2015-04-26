var clickCounter = 0;

var exampleButtonClicked = function() {
	// console.log("Example button clicked.");
	clickCounter++;

	if(clickCounter == 1) {
		$('.click-counter').html(clickCounter + ' Click');
	}
	else {
		$('.click-counter').html(clickCounter + ' Clicks');
	}
}
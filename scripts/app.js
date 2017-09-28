console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	console.log("The DOM is ready!");

	function addSubHeader() {
		var subHeader = $('<small>&nbsp&nbspsquash the bugs!</small>')
		$('h1').append(subHeader);
	}

	addSubHeader();


	$('form').on('submit', function(event){
		event.preventDefault();
		console.log('form submitted');
		var input = $('input').eq(i).val();

		// should count occurrences of the letter "E"
		// and update the display. instead always shows 0
		for (var i = 0; i < 50; i++){
			var count = 0;
			if (input[i] === "e"){
				count = count +1;
			}
			$('#num-es').text(count);
		}
	});

});

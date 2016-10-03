var $red = '<div class="color-cube red"></div>';
var $green = '<div class="color-cube green"></div>';
var $yellow = '<div class="color-cube yellow"></div>';
var $blue = '<div class="color-cube blue"></div>';
var red = 0;
var blue = 0;
var green = 0;
var yellow = 0;

function addColorCube($obj) {
	var color = $obj.attr('data-color');
	switch (color) {
		case 'red':
			red++;
			$('#red').empty();
			$('#red').append(red);
			$('.container').append($red);
			break;
		case 'green':
			green++;
			$('#green').empty();
			$('#green').append(green);
			$('.container').append($green);
			break;
		case 'blue':
			blue++;
			$('#blue').empty();
			$('#blue').append(blue);
			$('.container').append($blue);
			break;
		case 'yellow':
			yellow++;
			$('#yellow').empty();
			$('#yellow').append(yellow);
			$('.container').append($yellow);
			break;
	}
}
$(document).ready(function() {
	$('.color-button').on('click', function() {
		addColorCube($(this));
	})
})

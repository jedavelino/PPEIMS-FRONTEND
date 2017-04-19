$(document).ready(function() {

	initTooltip();

	function initTooltip() {
		$('[data-toggle="tooltip"]').tooltip();
	}

	function toggleChevron(e) {
	    $(e.target)
	        .prev('.panel-group-issuance .panel-heading')
	        .find('span:nth-child(2) i')
	        .toggleClass('glyphicon-minus glyphicon-plus');
	}
	$('#accordion').on('hidden.bs.collapse', toggleChevron);
	$('#accordion').on('shown.bs.collapse', toggleChevron);

	$('.printBtn').on('click', function(e) {
		e.preventDefault();
		window.print();
	});

});